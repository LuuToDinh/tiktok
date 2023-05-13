import axios from "axios";

const httpRequest = axios.create({
     baseURL: process.env,
})

export const get = async(path, option = {}) => {
     const response = await httpRequest(path, option)

     return response.data
}

export default httpRequest