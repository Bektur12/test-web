import { styled } from '@mui/material'
import { Header } from './Header'
import { DashboardRoutes } from '../routes/DashboardRoutes'

export const Layout = () => {
	return (
		<LayoutStyled>
			<Header />
			<Main>
				<DashboardRoutes />
			</Main>
		</LayoutStyled>
	)
}

const LayoutStyled = styled('div')({
	background: '#232830',
	width: '100%',
	height: '100vh',
	maxHeight: '100vh',
})

const Main = styled('main')({
	width: '100%',
	height: '100%',
	maxHeight: '100vh',
	padding: '80px 0px 60px 0px',
	overflow: 'scroll',
})
