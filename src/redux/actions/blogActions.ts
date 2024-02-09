/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
	try {
		const response = await instance.get('blogs')
		return response
	} catch (error: any) {
		throw new Error(error)
	}
})

export const getBlogById = createAsyncThunk(
	'blogs/getBlogById',
	async (id: string) => {
		try {
			const response = await instance.get(`blogs/${id}`)
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)

export const postBlogRequest = createAsyncThunk(
	'blogs/postBlog',
	async (data: any, { dispatch }) => {
		try {
			const response = await instance.post('blogs', data)
			dispatch(getBlogs())
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)
