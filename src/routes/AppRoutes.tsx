import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { ROUTES } from '../utils/constants/routes'
import { PrivateAuthRoute } from './PrivateAuthRole'
import { Layout } from '../layout/Layout'
import { Authorized } from '../types/types'
import { Login } from '../pages/Login'

const Loading = 'Loading...'

export const AppRoutes = ({ isAuthorized }: Authorized) => {
	return (
		<Routes>
			<Route
				index
				path={ROUTES.LOGIN}
				element={
					<Suspense fallback={<div>{Loading}</div>}>
						<PrivateAuthRoute
							isAuthorized={!isAuthorized}
							RouteComponent={<Login />}
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
