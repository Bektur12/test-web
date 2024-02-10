import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { authActions } from '../redux/slices/auth-slice'
import { useAppDispatch } from '../hooks'
import { Button } from '../components/UI/Button/Button'

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
					<NavLink to={'/blogs'}>blogs</NavLink>
					<NavLink to={'/counter'}>counter</NavLink>
					<NavLink to={'/list'}>List</NavLink>
				</List>
				<Button onClick={handleClickLogout}>logout</Button>
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
	padding: '20px 100px',
	background: '#b4bbb5',
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
	textDecoration: 'none',
	li: {
		cursor: 'pointer',
	},
	a: {
		// textDecoration: 'none',
		fontWight: 500,
		color: '#FFFFFF',
	},
})
