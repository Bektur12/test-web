import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { SpinnerContainer } from '../components/UI/Spinner/SpinnerContainer'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { PostList } from '../components/Posts/PostList'
import { getPosts } from '../redux/actions/postActions'
import { styled } from '@mui/material/styles'
import { Error } from '../components/Error/Error'

export const PostPage = () => {
	const { posts, isLoading, isError } = useAppSelector((state) => state.posts)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	if (isError) {
		return <Error />
	}

	return (
		<Wrapper>
			{isLoading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : (
				<PostList posts={posts} />
			)}
		</Wrapper>
	)
}

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	maxHeight: '100vh',
	gap: '10px',
	marginTop: '10px',
})
