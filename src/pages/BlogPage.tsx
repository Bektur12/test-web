import { styled } from '@mui/material/styles'
import { BlogList } from '../components/Blogs/BlogList'
import { Pagination } from '../components/UI/Pagination/Pagination'
import { Button } from '../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'

export const BlogPage = () => {
	const navigate = useNavigate()

	const handleClickNavigate = () => {
		navigate('/blogs/create')
	}

	return (
		<BlogsWrapper>
			<TopPart>
				<Button onClick={handleClickNavigate}>Создать</Button>
			</TopPart>
			<InnerContainer>
				<BlogList />
			</InnerContainer>
			<Pagination />
		</BlogsWrapper>
	)
}

const BlogsWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	padding: '10px 0px 0px 0px',
	width: '100%',
	maxHeight: '100vh',
	gap: '10px',
})

const InnerContainer = styled('div')({
	display: 'flex',
	width: '100%',
	flexDirection: 'column',
	alignItems: 'end',
})

const TopPart = styled('div')({
	textAlign: 'end',
	marginRight: '30px',
	position: 'fixed',
	left: '0',
	right: '0',
})
