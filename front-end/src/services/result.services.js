import axios from "./axios";

export const getAllProducts = async () => {
    try {
        return await axios.get(`/api/products`)
    } catch (error) {
        return error.response;
    }
}

export const getProductById = async (payload) => {
    try {
        return await axios.get(`/api/products/${payload}`)
    } catch (error) {
        return error.response;
    }
}