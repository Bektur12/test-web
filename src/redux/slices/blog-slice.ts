import { createSlice } from '@reduxjs/toolkit'
import { getBlogs } from '../actions/blogActions'
import { Blogs } from '../../types/types'

const initialState: Blogs = {
	blogs: [],
}
const blogsSlice = createSlice({
	name: 'blogsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBlogs.fulfilled, (state, action) => {
			state.blogs = action.payload.data
		})
		// .addCase(getBlogs.rejected, (state, action) => {})
	},
})

export default blogsSlice
