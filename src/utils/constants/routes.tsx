import { RouteConfig } from '../../types/types'

export const ROUTES = {
	LOGIN: '/login',
	PRIVACY_POLICY: '/extension_privacy',
}
export const routesConfig: Record<string, RouteConfig[]> = {
	USER: [
		{
			path: '/blogs',
			component: <div>BLOGS</div>,
		},
		{
			path: '/blogs/:id/edit',
			component: <div>edit</div>,
		},
		{
			path: '/blogs/create',
			component: <div>create</div>,
		},
	],
}
