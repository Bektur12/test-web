import { styled } from '@mui/material/styles'
import { Card } from './Card/Card'
import { BLOGS } from '../../utils/constants/general'

export const BlogList = () => {
	return (
		<List>
			{BLOGS.map((item) => {
				return <Card {...item} />
			})}
		</List>
	)
}

const List = styled('div')({
	display: 'flex',
	gap: '10px',
	width: '100%',
	flexWrap: 'wrap',
})
