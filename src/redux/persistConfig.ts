import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/auth-slice'
import blogsSlice from './slices/blog-slice'
import counterSlice from './slices/counter-slice'
import postsSlice from './slices/post-slice'

const persistConfig = { key: 'root', storage }

const rootReducer = combineReducers({
	auth: authReducer,
	blogs: blogsSlice.reducer,
	counter: counterSlice.reducer,
	posts: postsSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
