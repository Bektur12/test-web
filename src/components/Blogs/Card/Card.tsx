import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

type CardProps = {
	id: string
	title: string
	text: string
}

export const Card = (props: CardProps) => {
	const { id, title, text } = props
	const navigate = useNavigate()
	return (
		<CardWrapper onClick={() => navigate(`/${id}`)}>
			<h3>{title}</h3>
			<p>{text}</p>
		</CardWrapper>
	)
}

const CardWrapper = styled('div')({
	background: '#F7F7F7',
	width: '15%',
	height: '30vh',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
})
