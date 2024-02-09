import { useAppSelector } from './hooks'
import { selectUser } from './redux/slices/auth-slice'
import { AppRoutes } from './routes/AppRoutes'

function App() {
	const { isAuthorized } = useAppSelector(selectUser)

	return <AppRoutes isAuthorized={isAuthorized} />
}

export default App
