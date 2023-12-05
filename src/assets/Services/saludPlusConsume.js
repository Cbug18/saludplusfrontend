import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const login = async (formData) => {
try {
    const response = await axios.post(`${API_URL}/login`, formData,{

        headers:{
            'Content-Type': 'application/json'
        }
    } );
    return response.data;

} catch (error) {
    console.error("Error en la peticion: ", error);
    throw new Error("Error mientras se entraba al sistema")
}
}