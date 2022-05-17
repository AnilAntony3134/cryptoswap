import axios from "axios";

const instance = axios.create({
    baseURL: "https://rest.cryptoapis.io/v2/",
});
export default instance;