import { styled } from '@mui/material/styles'
import { Card } from './Card/Card'
import { BlogItem } from '../../types/types'

type Blog = { blogs: BlogItem[] }

export const BlogList = ({ blogs = [] }: Blog) => {
	return (
		<List>
			{blogs?.map((item) => (
				<Card {...item} />
			))}
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
