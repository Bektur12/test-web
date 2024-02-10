import { BlogPage } from '../../pages/BlogPage'
import { BlogViewPage } from '../../pages/BlogViewPage'
import Counter from '../../pages/CounterPage'
import { CreateBlogPage } from '../../pages/CreateBlogPage'
import { RouteConfig } from '../../types/types'

export const ROUTES = {
	LOGIN: '/login',
	PRIVACY_POLICY: '/extension_privacy',
}
export const routesConfig: Record<string, RouteConfig[]> = {
	USER: [
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
			path: '/blogs/:id/edit',
			component: <div>edit</div>,
		},
		{
			path: '/blogs/create',
			component: <CreateBlogPage />,
		},
	],
}
