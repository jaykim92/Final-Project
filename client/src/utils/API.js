import axios from 'axios';
const addAuthHeader = config => {
    const token = localStorage.getItem("user");
    if(token){
        config.headers.Authorization = token
    }
    return config
}

axios.interceptors.request.use(addAuthHeader);
export const signup = data => axios.post("/auth/signup", data);
export const login = data => axios.post("/auth/login", data);
export const validateJWT = () => axios.post("/auth/get_user")
export const getHeatmapData = () => axios.get(`/api/coords`);
export const getFakeHeatmapData = (count = 200) =>
  axios.get(`/api/coords/simulated/${count}`);