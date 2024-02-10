import { createSlice } from '@reduxjs/toolkit'
import { getBlogs } from '../actions/blogActions'
import { Blogs } from '../../types/types'

const initialState: Blogs = {
	blogs: [],
	isLoading: false,
}
const blogsSlice = createSlice({
	name: 'blogsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBlogs.fulfilled, (state, action) => {
				state.blogs = action.payload.data
				state.isLoading = false
			})
			.addCase(getBlogs.pending, (state) => {
				state.isLoading = true
			})
	},
})

export default blogsSlice
