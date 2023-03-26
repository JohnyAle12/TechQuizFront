import axios from "axios";
import { Country } from "../interfaces/types";

const urlBack = import.meta.env.VITE_COUNTRIES_HOST;

const getCountries = async(): Promise<Country[]> => {
    const data = await axios.get(urlBack)
        .then((res) => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
        
    return data.map((country: any) => ({
        commonName: country.name.common,
        oficialName: country.name.official
    }));
}

export {
    getCountries
};