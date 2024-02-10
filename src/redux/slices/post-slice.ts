import { createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../actions/postActions'
import { InitialStatePosts } from '../../types/types'

const initialState: InitialStatePosts = {
	posts: [],
	isLoading: false,
}
const postsSlice = createSlice({
	name: 'postsSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPosts.fulfilled, (state, action) => {
				state.posts = action.payload
				state.isLoading = false
			})
			.addCase(getPosts.pending, (state) => {
				state.isLoading = true
			})
	},
})

export default postsSlice
