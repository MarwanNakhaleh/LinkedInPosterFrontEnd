import { API_URL } from "../constants";

const getContent = async (endpoint: string) => {
    return await fetch(API_URL + endpoint, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
};

const UserService = {
  getContent,
}

export default UserService;