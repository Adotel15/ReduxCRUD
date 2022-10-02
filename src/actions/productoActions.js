
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR    
} from '../types'

// Crear Nuevos Productos
export function crearNuevoProductoAction() {
    return () => {
        console.log("Desde action")
    }
}