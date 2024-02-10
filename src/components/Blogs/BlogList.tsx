import { styled } from '@mui/material/styles'
import { Card } from './Card/Card'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBlogs } from '../../redux/actions/blogActions'
import { useEffect } from 'react'
import { SpinnerContainer } from '../UI/Spinner/SpinnerContainer'
import { Spinner } from '../UI/Spinner/Spinner'

export const BlogList = () => {
	const { blogs = [], isLoading } = useAppSelector((state) => state.blogs)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])

	return (
		<List>
			{isLoading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : (
				blogs?.map((item) => <Card {...item} />)
			)}
		</List>
	)
}

const List = styled('div')({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '10px',
	width: '100%',
	justifyContent: 'center',
	overflow: 'scroll',
})
