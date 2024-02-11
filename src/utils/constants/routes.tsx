import { Navigate } from 'react-router'
import { BlogPage } from '../../pages/BlogPage'
import { BlogViewPage } from '../../pages/BlogViewPage'
import Counter from '../../pages/CounterPage'
import { CreateBlogPage } from '../../pages/CreateBlogPage'
import { PostPage } from '../../pages/PostPage'
import { RouteConfig } from '../../types/types'

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
			component: <Counter />,
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
