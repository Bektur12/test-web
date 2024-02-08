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
	padding: '44px 200px 44px 128px',
	background: '#232830',
	height: '100vh',
	width: '100%',
})

const Main = styled('main')({
	width: '100%',
})
