
import { combineReducers } from 'redux'
import productosReducer from './productosReducer'

// Solo hay un store por APP pero puede tener varios reducers
// En index importo los reducers que no dejan ser funciones
// Y  los combiono con combineReducers, en este caso productosReducer
// que tiene el nombre de productos
export default combineReducers({
    productos : productosReducer
})