
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR    
} from '../types'

import clienteAxios from '../config/clienteAxios'

// Crear Nuevos Productos
export function crearNuevoProductoAction(producto) {
    return async dispatch => {
        // Intenta agregar el producto, ponemos loading true
        dispatch( agregarProducto() ) 
        try {
            // Si lo consigue añade producto al state, insertar en la API
            await clienteAxios.post('/productos', producto)

            dispatch ( agregarProductoExito(producto) )
        } catch (error) {
            console.log(error)
            // Si falla añade el error
            dispatch ( agregarProductoError(true) )
        }
        
    }
}

const agregarProducto = () => ({
    type : AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
}) 