import { ReactNode } from 'react'
import { NavigateFunction } from 'react-router-dom'

export type Authorized = {
	isAuthorized?: boolean
}

export type PrivateRouteProps = Authorized & {
	RouteComponent: ReactNode | JSX.Element
	fallbackPath?: string
}

export interface RouteConfig {
	path: string
	component: JSX.Element
}

export interface IUserInfo {
	email: string
	password: string
	id: string
}

export type BlogItem = {
	id: string
	title: string
	text: string
}

type Data = {
	data: BlogItem[]
	first: 1
	items: 25
	last: 3
	next: 2
	pages: 3
	prev: null
}

export type InitialState = {
	blogs: Data
	isLoading?: boolean
}

export type PostBlog = {
	navigate: NavigateFunction
	data: Omit<BlogItem, 'id'>
}

export type DeleteBlog = {
	navigate?: NavigateFunction
	id: string
}

export type Params = {
	params?: string
}
