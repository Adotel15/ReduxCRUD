
import { useState } from "react"
// Actions de redux 
import { crearNuevoProductoAction } from "../actions/productoActions"
import { useDispatch, useSelector } from "react-redux"

const NuevoProducto = () => {

    const [ nombre, setNombre ] = useState('')
    const [ precio, setPrecio ] = useState('')

    // Utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch()

    // Manda a llamar el action de productoAction
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    const submitNuevoProducto = event => {

        event.preventDefault()

        // Validar formulario
        if([ nombre, precio ].includes('')) {
            return
        }

        if(precio < 0) return

        // Si no hay errores

        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        })
    }

    return (
        <div className = "row justify-content-center">
            <div className = "col-md-8">
                <div className = "card">
                    <div className = "card-body">
                        <h2 className = "text-center mb-4 font-weight-bold">
                            Agregar Nuevo producto
                        </h2>

                        <form
                            onSubmit = {submitNuevoProducto}
                        >
                            <div className = "form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type = "text"
                                    className = "form-control"
                                    placeholder = "Nombre Producto"
                                    name = "nombre"
                                    value = {nombre}
                                    onChange = { e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className = "form-group">
                                <label>Precio Producto</label>
                                <input
                                    type = "number"
                                    className = "form-control"
                                    placeholder = "Precio Producto"
                                    name = "precio"
                                    value = {precio}
                                    onChange = { e => setPrecio( Number (e.target.value) )}
                                />
                            </div>

                            <button
                                type = "submit"
                                className= "btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar Producto
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
