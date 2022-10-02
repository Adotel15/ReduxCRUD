
// Cada reducer tiene su propio State

const initialState = {
    productos : [],
    error: null,
    loading: false
}

// Si no existe nada se pone el state Inicial
export default function(state = initialState, action) {

    switch (action.type) {
        default:
            return state
    }
}