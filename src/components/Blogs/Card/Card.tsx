import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

export type CardProps = {
	id: string
	title: string
	text: string
}

export const Card = (props: CardProps) => {
	const { id, title, text } = props
	const navigate = useNavigate()
	return (
		<CardWrapper>
			<div>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<span onClick={() => navigate(`/blogs/${id}/view`)}>
				Подробнее просмотреть
			</span>
		</CardWrapper>
	)
}

const CardWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	background: '#F7F7F7',
	width: '25%',
	height: '23vh',
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
