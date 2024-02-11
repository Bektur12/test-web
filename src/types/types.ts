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

export type Login = {
	email: string
	password: string
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

export type IsLoading = {
	isLoading: boolean
}

export type InitialState = IsLoading & {
	blogs: Data
	isError: boolean
}

type Navigate = {
	navigate: NavigateFunction
}
export type PostBlog = Navigate & {
	data: Omit<BlogItem, 'id'>
}

export type DeleteBlog = {
	id: string
}

export type LoginUserProps = Navigate & {
	data: Login
}

export type Params = {
	params?: string
}

export type PostItem = {
	userId: string
	id: string
	title: string
	body: string
}

export type Posts = { posts: PostItem[] }

export type InitialStatePosts = IsLoading & {
	posts: PostItem[]
	isError: boolean
}
