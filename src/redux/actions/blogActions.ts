/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../axiosInstanse'
import { BlogItem, DeleteBlog, Params, PostBlog } from '../../types/types'
import { wait } from '../../utils/helpers/wait.helper'
import { AxiosError } from 'axios'

export const getBlogs = createAsyncThunk(
	'blogs/getBlogs',
	async ({ params }: Params) => {
		try {
			const response = await instance.get(`blogs?${params}`)
			const newResponse = await wait(500, response)
			return newResponse.data
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
		}
	},
)

export const getBlogById = createAsyncThunk(
	'blogs/getBlogById',
	async (id: string) => {
		try {
			const response = await instance.get(`blogs/${id}`)
			return response
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
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
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
		}
	},
)

export const editBlogRequest = createAsyncThunk(
	'blogs/editBlogRequest',
	async (data: BlogItem) => {
		try {
			const response = await instance.put(`blogs/${data.id}`, data)
			return response
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
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
		} catch (err) {
			const error = err as AxiosError<Error>
			throw new Error(error.response?.data.message)
		}
	},
)
