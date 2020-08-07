import React, {createContext, useReducer, useContext} from 'react';
import {FIND_LOCATION} from './actions';

const AppContext = createContext();
const {Provider} = AppContext;

const reducer = (state, action) => {
    switch(action.type) {
        case FIND_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        default:
            return state;
    }
}

const AppProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        location: null,
        user: null
    })

    return <Provider value={[state,dispatch]} {...props} />
}

const useAppContext = () => useContext(AppContext);

export {useAppContext, AppProvider}