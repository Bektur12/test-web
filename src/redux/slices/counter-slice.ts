import { createSlice } from '@reduxjs/toolkit'

type CounterStateType = {
	count: number
}

const initialState: CounterStateType = {
	count: 0,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.count = state.count + 1
		},
		decrement: (state) => {
			if (state.count > 0) {
				state.count = state.count - 1
			}
		},
		reset: (state) => {
			state.count = 0
		},
	},
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice
