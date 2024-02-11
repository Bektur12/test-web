import { styled } from '@mui/material/styles'
import { BlogList } from '../components/Blogs/BlogList'
import { Pagination } from '../components/UI/Pagination/Pagination'
import { Button } from '../components/UI/Button/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { getBlogs } from '../redux/actions/blogActions'
import { SpinnerContainer } from '../components/UI/Spinner/SpinnerContainer'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { queryParamsFormat } from '../utils/helpers/queryParams.helper'
import { Error } from '../components/Error/Error'

const BlogPage = () => {
	const { blogs, isLoading, isError } = useAppSelector((state) => state.blogs)
	const [params, setParams] = useSearchParams()

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const currentPage = parseInt(params.get('page') || '1')
	const size = parseInt(params.get('size') || '10')

	const handleClickNavigate = () => navigate('/blogs/create')

	const query = { page: currentPage.toString(), per_page: size.toString() }

	const handleNextPage = (newPage: number) => {
		setParams({ page: String(newPage) })
	}

	const handleSizeChange = (newSize: number) => {
		setParams({ size: String(newSize) })
	}

	useEffect(() => {
		dispatch(getBlogs({ params: queryParamsFormat(query) }))
	}, [dispatch, currentPage])

	if (isError) {
		return <Error />
	}

	return (
		<BlogsWrapper>
			<TopPart>
				<Button onClick={handleClickNavigate}>Создать</Button>
			</TopPart>
			<InnerContainer>
				{isLoading ? (
					<SpinnerContainer>
						<Spinner />
					</SpinnerContainer>
				) : (
					<BlogList blogs={blogs.data || []} />
				)}
			</InnerContainer>
			<Pagination
				handleSizeChange={handleSizeChange}
				pageSize={size}
				handleNextPage={handleNextPage}
				page={currentPage}
				total={blogs.items}
			/>
		</BlogsWrapper>
	)
}

export default BlogPage

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
