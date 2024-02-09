import { styled } from '@mui/material/styles'
import { Card } from './Card/Card'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBlogs } from '../../redux/actions/blogActions'
import { useEffect } from 'react'

export const BlogList = () => {
	const { blogs = [] } = useAppSelector((state) => state.blogs)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])

	return (
		<List>
			{blogs.map((item) => {
				return <Card {...item} />
			})}
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
