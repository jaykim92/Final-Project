import axios from 'axios';

export const signup = data => axios.post("/auth/signup", data);
export const login = data => axios.post("/auth/login", data);
export const validateJWT = jwt => axios.post("/api/get_user", {
    headers: {
        authorization: jwt
    }
});