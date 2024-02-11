import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { wait } from '../../utils/helpers/wait.helper'
import { FAKE_URL } from '../../utils/constants/general'

export const getPosts = createAsyncThunk('blogs/getPosts', async () => {
	try {
		const response = await axios.get(`${FAKE_URL}/posts`)
		const newResponse = await wait(500, response)
		return newResponse.data
	} catch (err) {
		const error = err as AxiosError<Error>
		throw new Error(error.response?.data.message)
	}
})
