// icons imports
import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/";

export const COMPANY_NAME = "Sneaker Freaks";

export const API = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const AUTH_ENDPOINTS = {
    login: "auth/login",
    register: "auth/register",
    update: "auth/update/",
    logout: "auth/logout",
    authenticate: "auth/authenticate"
};

export const SNEAKER_ENDPOINTS = {
    get: "sneaker/",
    update: "sneaker/",
    delete: "sneaker/",
    add: "/sneaker/add",
};

export const USER_PERMISSIONS = [
    "FULL-ACCESS",
    "READ-WRITE",
    "READ-ONLY",
    "AUTHORIZATION",
    "BODY-REMOVAL",
    "COFFIN-INVENTORY",
];

export const USER_TYPES = [
    "COFFIN-MANAGER",
    "VEHICLE-MANAGER",
    "DRIVER",
    "ADMIN",
    "SECURITY",
];

export const USER_STATUS = [
    "ACTIVE",
    "PENDING",
    "BLOCKED",
    "AVAILABLE",
    "ON-TRIP",
];

export const getAxiosError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        return error.response.data;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return error.request.data;
    } else {
        console.error(error);
        return "Internal error occured!";
        // return error.message;
    }
};
