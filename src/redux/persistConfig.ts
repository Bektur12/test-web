// src/persistConfig.js
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/auth-slice'

const persistConfig = { key: 'root', storage }

const rootReducer = combineReducers({
	auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
