import { styled } from '@mui/material/styles'
import { PostItem } from '../../types/types'

export const PostCard = (props: PostItem) => {
	const { userId, title, body } = props
	return (
		<CardWrapper>
			<h3>
				Title: {title}
				<br />
				UserId: {userId}
			</h3>
			<p> Description: {body}</p>
		</CardWrapper>
	)
}

const CardWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	background: '#F7F7F7',
	width: '25%',
	height: '23vh',
	gap: '30px',
	padding: '10px',
	borderRadius: '10px',
	color: '#000',
	fontFamily: 'Inter',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: 'normal',
	p: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	span: {
		color: 'blue',
		cursor: 'pointer',
		textAlign: 'end',
		fontSize: '11px',
	},
})
