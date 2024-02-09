import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from '../utils/constants/routes'
import { RouteConfig } from '../types/types'

export const DashboardRoutes = () => {
	return (
		<Routes>
			{routesConfig['USER'].map((route: RouteConfig) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Suspense fallback={<div>loading...</div>}>
							<>{route.component}</>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
