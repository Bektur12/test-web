/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'
import { BlogItem, DeleteBlog, Params, PostBlog } from '../../types/types'

export const getBlogs = createAsyncThunk(
	'blogs/getBlogs',
	async ({ params }: Params) => {
		try {
			const response = await instance.get(`blogs?${params}`)
			return response.data
		} catch (error: any) {
			throw new Error(error)
		}
	},
)

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
	async (
		{ data, navigate, notify }: PostBlog & { notify: any },
		{ dispatch },
	) => {
		try {
			const response = await instance.post('blogs', data)
			dispatch(getBlogs({}))
			navigate(-1)
			notify({ title: 'Успешно создан', type: 'success' })
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)

export const editBlogRequest = createAsyncThunk(
	'blogs/editBlogRequest',
	async (data: BlogItem) => {
		try {
			const response = await instance.put(`blogs/${data.id}`, data)
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
			dispatch(getBlogs({}))
			return response
		} catch (error: any) {
			throw new Error(error)
		}
	},
)
