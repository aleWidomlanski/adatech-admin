import axios from "axios";

/* import BackendApi from "@/config/api";
 */
async function createProduct (data:any) {
	try {
		const response = await axios.post(
			`localhost:3000/api/products`, data
		);
		return response;
/* 		const response = await BackendApi.post(``, data)
		return response.data; */
	} catch (err) {
		console.log(err);
	}
}
 
export default createProduct