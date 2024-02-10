import { createSlice } from '@reduxjs/toolkit'
import { getBlogs } from '../actions/blogActions'
import { InitialState } from '../../types/types'

const initialState: InitialState = {
	blogs: {
		data: [],
		first: 1,
		items: 25,
		last: 3,
		next: 2,
		pages: 3,
		prev: null,
	},
	isLoading: false,
}
const blogsSlice = createSlice({
	name: 'blogsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBlogs.fulfilled, (state, action) => {
				state.blogs = action.payload
				state.isLoading = false
			})
			.addCase(getBlogs.pending, (state) => {
				state.isLoading = true
			})
	},
})

export default blogsSlice
