import { instance } from '../../redux/axiosInstanse'

export const handleCheckResponseUser = async (id: string) => {
	const checkResponse = await instance.get(`users?email=${id}`)
	return checkResponse.data
}
