import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type initialStateProps = {
	isAuthorized: boolean
}

const initialState: initialStateProps = {
	isAuthorized: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state) {
			state.isAuthorized = true
		},
		logout: (state) => {
			state.isAuthorized = false
		},
	},
})

export const authActions = authSlice.actions

export const selectUser = (state: RootState) => state.auth

export default authSlice.reducer
