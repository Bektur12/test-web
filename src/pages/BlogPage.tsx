/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const BlogPage = () => {
	const { blogs, isLoading } = useAppSelector((state) => state.blogs)
	const [params, setParams] = useSearchParams()

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const newPages = parseInt(params.get('page') || '1')

	const handleClickNavigate = () => navigate('/blogs/create')
	const query = {
		page: newPages,
		per_page: '10',
	}
	useEffect(() => {
		dispatch(getBlogs({ params: queryParamsFormat(query as any) }))
	}, [dispatch, newPages])

	const handleNextPage = (newPage: number) => {
		if (newPage !== newPages) {
			setParams({ page: String(newPage) })
		}
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
				handleNextPage={handleNextPage}
				page={newPages}
				total={blogs.pages}
			/>
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
