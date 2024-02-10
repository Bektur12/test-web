import { BlogPage } from '../../pages/BlogPage'
import { BlogViewPage } from '../../pages/BlogViewPage'
import { CreateBlogPage } from '../../pages/CreateBlogPage'
import { RouteConfig } from '../../types/types'

export const ROUTES = {
	LOGIN: '/login',
	PRIVACY_POLICY: '/extension_privacy',
}
export const routesConfig: Record<string, RouteConfig[]> = {
	USER: [
		{
			path: '/main-page',
			component: <div>MAIN</div>,
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
