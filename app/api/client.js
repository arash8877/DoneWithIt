import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.50.50:9000/api",
});


export default apiClient;