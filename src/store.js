
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const Store = createStore(
    reducers,
    compose( applyMiddleware(thunk),

    // Cuando tengamos instalado redux dev tools aplicalo, sino no hagas nada
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)

export default Store;