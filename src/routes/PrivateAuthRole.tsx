import { Navigate } from 'react-router-dom'
import { PrivateRouteProps } from '../types/types'
import { ROUTES } from '../utils/constants/routes'

export const PrivateAuthRoute = ({
	RouteComponent,
	fallbackPath = ROUTES.LOGIN,
	isAuthorized,
}: PrivateRouteProps) => {
	if (!isAuthorized) {
		return <Navigate to={fallbackPath} replace />
	}
	return <>{RouteComponent}</>
}
