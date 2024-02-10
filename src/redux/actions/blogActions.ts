/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'
import { BlogItem, DeleteBlog, PostBlog } from '../../types/types'

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
	async ({ data, navigate }: PostBlog, { dispatch }) => {
		try {
			const response = await instance.post('blogs', data)
			dispatch(getBlogs())
			navigate(-1)
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)

export const editBlogRequest = createAsyncThunk(
	'blogs/editBlogRequest',
	async (data: BlogItem, { dispatch }) => {
		try {
			const response = await instance.put(`blogs/${data.id}`, data)
			dispatch(getBlogById(data.id))
			dispatch(getBlogs())
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)

export const deleteBlogRequest = createAsyncThunk(
	'blogs/deleteBlogRequest',
	async (data: DeleteBlog, { dispatch }) => {
		try {
			const response = await instance.delete(`blogs/${data.id}`)
			dispatch(getBlogs())
			data.navigate('/blogs')
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)
