import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'
import { LoginUserProps } from '../../types/types'
import { authActions } from '../slices/auth-slice'
import { AxiosError } from 'axios'

export const loginUser = createAsyncThunk(
	'users/LoginUser',
	async ({ navigate, data }: LoginUserProps, { dispatch }) => {
		try {
			const response = await instance.post('users', data)
			dispatch(authActions.setCredentials())
			navigate('/blogs')
			return response
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
		}
	},
)
