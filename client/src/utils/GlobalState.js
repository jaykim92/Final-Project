import React, {createContext, useReducer, useContext, useEffect} from 'react';
import {FIND_LOCATION, CHECK_TOKEN, STORE_HEATMAP_DATA, LOGIN_SUCCESS, PENDING, SET_USER} from './actions';
import {validateJWT} from "./API.js";
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
            };
        case PENDING: 
            return {
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            console.log(action.payload)
            localStorage.setItem("user", JSON.stringify(action.payload.token))
            return {
                ...state,
                user: action.payload.userData,
                loading: false
            }
        case SET_USER:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        default:
            return state;
    }

   
}

const AppProvider = ({ value = [], ...props}) => {
     
    const [state, dispatch] = useReducer(reducer, {
        location: null,
        user: null,
        heatmap: [],
        loading: false,
    })

useEffect(() => {
        if(localStorage.getItem('user')){
            dispatch({type:PENDING})
            validateJWT().then(({data})=>{
                dispatch({type: SET_USER, payload:data})
            })
    
        }
    }, [])
    return <Provider value={[state,dispatch]} {...props} />
}

const useAppContext = () => useContext(AppContext);

export {useAppContext, AppProvider}