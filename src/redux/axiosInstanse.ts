import axios from 'axios'
import { BASE_URL } from '../utils/constants/general'

export const instance = axios.create({
	baseURL: BASE_URL,
})
