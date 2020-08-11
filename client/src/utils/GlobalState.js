import React, {createContext, useReducer, useContext} from 'react';
import {FIND_LOCATION, CHECK_TOKEN, STORE_HEATMAP_DATA} from './actions';

const AppContext = createContext();
const {Provider} = AppContext;

const reducer = (state, action) => {
    switch(action.type) {
        case FIND_LOCATION:
            return {
                ...state,
                location: action.payload
            };
        case STORE_HEATMAP_DATA:
            return {
                ...state,
                heatmap: action.payload
            }
        default:
            return state;
    }
}

const AppProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        location: null,
        user: null,
        heatmap: []
    })

    return <Provider value={[state,dispatch]} {...props} />
}

const useAppContext = () => useContext(AppContext);

export {useAppContext, AppProvider}