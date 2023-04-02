import { LoginResponse } from "../models/LoginResponse";
import { BaseResponse } from "../models/BaseResponse";
import { API_URL } from "../constants";

const register = async (username: string, email: string, password: string) => {
    return await fetch(API_URL + "signup", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
}

const login = async (username: string, password: string) => {
    const response = await fetch(API_URL + "login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const response_data: BaseResponse<LoginResponse> = await response.json();
    if (response_data.result.username) localStorage.setItem("user", JSON.stringify(response_data.result.username));
}

const logout = async () => {
    localStorage.removeItem("user");
    await fetch(API_URL + "logout", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || "");
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;