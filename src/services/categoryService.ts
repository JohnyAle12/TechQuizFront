import axios from "axios";
import { Category } from "../interfaces/types";

const urlBack = import.meta.env.VITE_BACK_HOST + 'categories';

const getCategories = async(): Promise<Category[]> => {
    const data = await axios.get(urlBack)
        .then((res) => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
        
    return data.categories;
}

export {
    getCategories
};