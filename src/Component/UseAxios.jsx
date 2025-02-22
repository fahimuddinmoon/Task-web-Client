import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://task-project-sand.vercel.app'
}) 
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;