import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }
const prevJwt = localStorage.getItem('token');
// const prevJwt = () => JSON.parse(localStorage.getItem('jwt')) || '';

export const productsGetAll = async (data) => {
    try {
        return await axios.get(`${apiHost}/api/product`, {
            headers: {
                authorization: `bearer ${prevJwt}`,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const productsCreate = async (data) => {
    try {
        return await axios.post(`${apiHost}/api/product`, data, {
            headers: {
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const productsDelete = async (data) => {
    console.log(data);
    try {
        return await axios.delete(`${apiHost}/api/product/${data.id}`, {
            headers: {
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const productsUpdate = async (data) => {
    console.log('.....................');
    console.log(data);
    try {
        return await axios.put(`${apiHost}/api/product/${data.id}`,data,{
            headers: {
                // token
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};