import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { authActions } from '../redux/slices/auth-slice'
import { useAppDispatch } from '../hooks'

export const Header = () => {
	const dispatch = useAppDispatch()

	const handleClickLogout = () => {
		dispatch(authActions.logout())
	}

	return (
		<Container>
			<NavWrapper>
				<h2>Arta.software</h2>
				<List>
					<NavLink to={'/blogs'}>Blogs</NavLink>
					<NavLink to={'/counter'}>Counter</NavLink>
					<NavLink to={'/about'}>about</NavLink>
				</List>
				<button
					style={{ background: 'red' }}
					onClick={handleClickLogout}
				>
					logout
				</button>
			</NavWrapper>
		</Container>
	)
}

const Container = styled('header')({
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	width: '100%',
	padding: '30px 100px',
	background: 'blue',
})

const NavWrapper = styled('nav')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	fontFamily: 'Inter',
	color: '#FFFFFF',
})
const List = styled('ul')({
	display: 'flex',
	listStyle: 'none',
	justifyContent: 'space-between',
	gap: '36px',
	li: {
		cursor: 'pointer',
	},
})
