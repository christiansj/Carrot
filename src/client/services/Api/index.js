import axios from 'axios';


const client = axios.create({
  baseURL: "http://localhost:8080/",
  json: true
})
export default class ApiService{
  async execute(method, resource, data){
    return client({
      method, 
      url: resource,
      data
    }).then(res=> {
      return res
    }).catch(err=>{
      console.log(err);
      throw err
    })
  }
}