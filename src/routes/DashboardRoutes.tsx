import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from '../utils/constants/routes'
import { RouteConfig } from '../types/types'
import { SpinnerContainer } from '../components/UI/Spinner/SpinnerContainer'
import { Spinner } from '../components/UI/Spinner/Spinner'

export const DashboardRoutes = () => {
	return (
		<Routes>
			{routesConfig['USER'].map((route: RouteConfig) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Suspense
							fallback={
								<SpinnerContainer>
									<Spinner />
								</SpinnerContainer>
							}
						>
							<>{route.component}</>
						</Suspense>
					}
				/>
			))}
		</Routes>
	)
}
