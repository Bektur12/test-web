import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { wait } from '../../utils/helpers/wait.helper'
import { FAKE_URL } from '../../utils/constants/general'

export const getPosts = createAsyncThunk('blogs/getPosts', async () => {
	try {
		const response = await axios.get(`${FAKE_URL}/posts`)
		const newResponse = await wait(500, response)
		return newResponse.data
	} catch (error) {
		return error
	}
})
