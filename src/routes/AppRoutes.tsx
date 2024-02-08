import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { ROUTES } from '../utils/constants/routes'
import { PrivateAuthRoute } from './PrivateAuthRole'
import { Layout } from '../layout/Layout'
import { Authorized } from '../types/types'

const Loading = 'Loading...'

export const AppRoutes = ({ isAuthorized = true }: Authorized) => {
	return (
		<Routes>
			<Route
				index
				path={ROUTES.LOGIN}
				element={
					<Suspense fallback={<div>{Loading}</div>}>
						<PrivateAuthRoute
							isAuthorized={!isAuthorized}
							RouteComponent={<div>LOGIN</div>}
							fallbackPath={'/'}
						/>
					</Suspense>
				}
			/>
			<Route
				path={'/*'}
				element={
					<Suspense fallback={<div>{Loading}</div>}>
						<PrivateAuthRoute
							isAuthorized={isAuthorized}
							RouteComponent={<Layout />}
							fallbackPath={ROUTES.LOGIN}
						/>{' '}
					</Suspense>
				}
			/>
		</Routes>
	)
}
