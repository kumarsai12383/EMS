// frontend/src/api's/api.js
// Function to register a new user
import axios from "axios"
import api from "./axiosinstance";
async function registerUser(userData) {
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};
// Function to log in a user
async function loginUser(credentials) {
    try {
        const response = await api.post("/auth/login", credentials);
        console.log("Login response:", response.data); // Log the entire response object
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

export { registerUser, loginUser };