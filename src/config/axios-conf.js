import * as axios from "axios";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "https://0b1aa95036bd.ngrok.io/api/";
console.log(axios);