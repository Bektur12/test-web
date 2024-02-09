/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export const handleCheckResponseUser = async (email: string) => {
	const checkResponse = await axios.get(
		`http://localhost:4000/users?email=${email}`,
	)
	return checkResponse.data
}
