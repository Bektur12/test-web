import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { SpinnerContainer } from '../components/UI/Spinner/SpinnerContainer'
import { Spinner } from '../components/UI/Spinner/Spinner'
import { PostList } from '../components/Posts/PostList'
import { getPosts } from '../redux/actions/postActions'

export const PostPage = () => {
	const { posts, isLoading } = useAppSelector((state) => state.posts)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return (
		<div>
			{isLoading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : (
				<PostList posts={posts} />
			)}
		</div>
	)
}
