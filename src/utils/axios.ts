import { Axios } from 'axios'

export const api = new Axios({
	baseURL: 'http://localhost:3000/api',
})
