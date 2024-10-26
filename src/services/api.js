import axios from "axios";
import { constant } from "constant"; // Make sure to adjust this import path if necessary

// Function to get authorization headers
const getAuthHeaders = () => ({
    headers: {
        Authorization: localStorage.getItem("token") || sessionStorage.getItem("token"),
    },
});

// POST request function
export const postApi = async (path, data, login) => {
    try {
        // Update the path in the API call to match your backend
const result = await axios.post(`${constant.baseUrl}/api/user/login`, data, getAuthHeaders());


        // Save the token and user data if present
        if (result.data?.token) {
            if (login) {
                localStorage.setItem('token', result.data.token);
            } else {
                sessionStorage.setItem('token', result.data.token);
            }
            localStorage.setItem('user', JSON.stringify(result.data.user));
        }

        return result;
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e;
    }
};

// PUT request function
export const putApi = async (path, data) => {
    try {
        const result = await axios.put(`${constant.baseUrl}${path}`, data, getAuthHeaders());
        return result;
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e;
    }
};

// DELETE request function (single item)
export const deleteApi = async (path, id) => {
    try {
        const result = await axios.delete(`${constant.baseUrl}${path}${id}`, getAuthHeaders());
        
        // Save the token if present
        if (result.data?.token) {
            localStorage.setItem('token', result.data.token);
        }
        return result;
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e;
    }
};

// DELETE request function (multiple items)
export const deleteManyApi = async (path, data) => {
    try {
        const result = await axios.post(`${constant.baseUrl}${path}`, data, getAuthHeaders());

        // Save the token if present
        if (result.data?.token) {
            localStorage.setItem('token', result.data.token);
        }
        return result;
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e;
    }
};

// GET request function
export const getApi = async (path, id = '') => {
    try {
        const result = await axios.get(`${constant.baseUrl}${path}${id}`, getAuthHeaders());
        return result;
    } catch (e) {
        console.error(e.response ? e.response.data : e.message);
        return e.response ? e.response.data : e;
    }
};
