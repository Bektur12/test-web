import { styled } from '@mui/material/styles'
import { BlogList } from '../components/Blogs/BlogList'
import { Pagination } from '../components/UI/Pagination/Pagination'

export const BlogPage = () => {
	return (
		<BlogsWrapper>
			<BlogList />
			<Pagination />
		</BlogsWrapper>
	)
}

const BlogsWrapper = styled('div')({
	color: '#000',
	fontFamily: 'Inter',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: 'normal',
	display: 'flex',
	flexDirection: 'column',
	padding: '10px 0px 0px 0px',
	width: '100%',
	height: '100%',
	maxHeight: '100vh',
	flex: '1',
})
