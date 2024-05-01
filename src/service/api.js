import axios from "axios"

const url = process.env.REACT_APP_BASE_URL
export const getProjects = async()=>{
 const res = await axios.get(`${url}/api/project/all`)
 return res.data
//    console.log('api: ',res.data);
}