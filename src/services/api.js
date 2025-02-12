import axios from "axios";
import { constant } from "constant"; // Ensure the path is correct

// Helper function to set token and user data in storage
const saveTokenAndUser = (token, user, login) => {
    if (token) {
        if (login) {
            localStorage.setItem("token", token);
        } else {
            sessionStorage.setItem("token", token);
        }
        localStorage.setItem("user", JSON.stringify(user));
    }
};

// Function to get authorization headers
const getAuthHeaders = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};

// POST request function for login
export const postApi = async (path, data, login = true) => {
    try {
        // Construct the URL properly
        const url = `${constant.baseURL}${path.startsWith('/') ? '' : '/'}${path}`;
        
        // Perform the POST request
        const result = await axios.post(url, data, {
            headers: getAuthHeaders(),
            withCredentials: constant.withCredentials, // Use withCredentials if needed
        });

        // Save token and user data if present
        if (login) saveTokenAndUser(result.data?.token, result.data?.user, login);

        return result;
    } catch (e) {
        // Log detailed error
        console.error(`Error ${e.response?.status}:`, e.response?.data || e.message);
        throw e.response?.data || e;
    }
};

// PUT request function
export const putApi = async (path, data) => {
    try {
        const result = await axios.put(`${constant.baseUrl}${path}`, data, getAuthHeaders());
        return result;
    } catch (e) {
        console.error(`Error ${e.response?.status}:`, e.response?.data || e.message);
        return e.response?.data || e;
    }
};

// DELETE request function (single item)
export const deleteApi = async (path, id) => {
    try {
        const result = await axios.delete(`${constant.baseUrl}${path}/${id}`, getAuthHeaders());
        
        // Save token if present
        if (result.data?.token) {
            localStorage.setItem("token", result.data.token);
        }
        return result;
    } catch (e) {
        console.error(`Error ${e.response?.status}:`, e.response?.data || e.message);
        return e.response?.data || e;
    }
};

// DELETE request function (multiple items)
export const deleteManyApi = async (path, data) => {
    try {
        const result = await axios.post(`${constant.baseUrl}${path}`, data, getAuthHeaders());
        
        // Save token if present
        if (result.data?.token) {
            localStorage.setItem("token", result.data.token);
        }
        return result;
    } catch (e) {
        console.error(`Error ${e.response?.status}:`, e.response?.data || e.message);
        return e.response?.data || e;
    }
};

// GET request function
export const getApi = async (path, id = '') => {
    try {
        const result = await axios.get(`${constant.baseUrl}${path}${id}`, getAuthHeaders());
        return result;
    } catch (e) {
        console.error(`Error ${e.response?.status}:`, e.response?.data || e.message);
        return e.response?.data || e;
    }
};
