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
			<h2>Arta.software</h2>
			<nav>
				<List>
					<NavLink to={'/blogs'}>Blogs</NavLink>
					<NavLink to={'/counter'}>Counter</NavLink>
					<NavLink to={'/about'}>about</NavLink>
				</List>
			</nav>
			<button onClick={handleClickLogout}>logout</button>
		</Container>
	)
}

const Container = styled('header')({
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
