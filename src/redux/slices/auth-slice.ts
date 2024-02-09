import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LOGIN_INFO_KEY } from '../../utils/constants/general'
import { localStorageHelper } from '../../utils/helpers/general'
import { RootState } from '../store'

type initialStateProps = {
	isAuthorized: boolean
	id: string
	email: string
}
const initialState: initialStateProps = {
	isAuthorized: false,
	id: '',
	email: '',
}
export const logout = createAsyncThunk(
	'auth/logout',
	async (_, { dispatch }) => {
		localStorageHelper.remove(LOGIN_INFO_KEY)
		dispatch(authActions.logout())
	},
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state, { payload }) {
			state.email = payload.email
			state.isAuthorized = true
			state.id = payload.id
		},
		logout: (state) => {
			state.isAuthorized = false
		},
	},
})

export const authActions = authSlice.actions

export const selectUser = (state: RootState) => state.auth

export default authSlice.reducer
