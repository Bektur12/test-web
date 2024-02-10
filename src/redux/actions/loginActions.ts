import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'
import { LoginUserProps } from '../../types/types'
import { authActions } from '../slices/auth-slice'

export const loginUser = createAsyncThunk(
	'users/LoginUser',
	async ({ navigate, data }: LoginUserProps, { dispatch }) => {
		try {
			const response = await instance.post('users', data)
			dispatch(authActions.setCredentials(data))
			navigate('/blogs')
			return response
		} catch (error) {
			// throw new Error(error)j
		}
	},
)
