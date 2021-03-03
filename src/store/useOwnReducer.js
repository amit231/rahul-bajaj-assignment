import { useReducer } from 'react'

export default function useOwnReducer() {
    const initialState = {
        name: 'amit'
    }
    const reducer = (state, actions) => {
        switch (actions.type) {
            case 'change-name':
                let n = 'amit'
                console.log(state.name)
                if (state.name === 'amit') {
                    n = 'anubhav'
                }
                return {
                    ...state,
                    name: n
                }
            default:
                return state;
        }
    }
    return useReducer(reducer, initialState)
}