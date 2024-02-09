import { ReactNode } from 'react'

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

export type Blogs = {
	blogs: BlogItem[]
}
