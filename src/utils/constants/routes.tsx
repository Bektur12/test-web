/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { RouteConfig } from '../../types/types'
import { Navigate } from 'react-router'
export const BlogViewPage = lazy(() => import('../../pages/BlogViewPage'))
export const CounterPage = lazy(() => import('../../pages/CounterPage'))
export const CreateBlogPage = lazy(() => import('../../pages/CreateBlogPage'))
export const BlogPage = lazy(() => import('../../pages/BlogPage'))
export const PostPage = lazy(() => import('../../pages/PostPage'))

export const ROUTES = {
	LOGIN: '/login',
	PRIVACY_POLICY: '/extension_privacy',
}

export const routesConfig: Record<string, RouteConfig[]> = {
	USER: [
		{
			path: '/',
			component: <Navigate to={'/blogs'} />,
		},
		{
			path: '/posts',
			component: <PostPage />,
		},
		{
			path: '/counter',
			component: <CounterPage />,
		},
		{
			path: '/blogs',
			component: <BlogPage />,
		},
		{
			path: '/blogs/:id/view',
			component: <BlogViewPage />,
		},
		{
			path: '/blogs/create',
			component: <CreateBlogPage />,
		},
	],
}
