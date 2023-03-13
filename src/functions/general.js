import axios from 'axios'


export const login = async(value) => 
    await axios.post(process.env.REACT_APP_SERVER_API + "/login",value)

export const register = async(value) => 
    await axios.post(process.env.REACT_APP_SERVER_API + "/register",value)