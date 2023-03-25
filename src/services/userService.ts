import axios from "axios";
import { User } from "../interfaces/types";

const urlBack = import.meta.env.VITE_BACK_HOST + 'user';

const getUser = async(): Promise<User[]> => {
    const data = await axios.get(urlBack)
        .then((res) => res)
        .catch(error => {
            throw new Error(error.response.data.message);
        });

    return data.data.users;
}

export {
    getUser
};