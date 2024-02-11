import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { ROUTES } from '../utils/constants/routes'
import { PrivateAuthRoute } from './PrivateAuthRole'
import { Layout } from '../layout/Layout'
import { Authorized } from '../types/types'
import { Login } from '../pages/Login'
import { SpinnerContainer } from '../components/UI/Spinner/SpinnerContainer'
import { Spinner } from '../components/UI/Spinner/Spinner'

const Fallback = (
	<SpinnerContainer>
		<Spinner />
	</SpinnerContainer>
)

export const AppRoutes = ({ isAuthorized }: Authorized) => {
	return (
		<Routes>
			<Route
				index
				path={ROUTES.LOGIN}
				element={
					<Suspense fallback={Fallback}>
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
					<Suspense fallback={Fallback}>
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
