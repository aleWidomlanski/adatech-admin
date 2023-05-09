import axios from 'axios';

/**
 * Setup axios interceptors for backend endpoints requeriments.
 *
 * @remarks
 * Includes both request interceptor to add required headers,
 * and response interceptor to transform status fake success status (200)
 * if response body has error.
 */
const BackendApi = axios.create({
    baseURL: `localhost:3000/api/products`
});

export default BackendApi;


