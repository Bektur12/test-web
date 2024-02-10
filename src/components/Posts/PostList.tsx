import { Posts } from '../../types/types'
import { PostCard } from './PostCard'
import { List } from '.'

export const PostList = ({ posts }: Posts) => {
	return (
		<List>
			{posts?.map((post) => {
				return <PostCard {...post} />
			})}
		</List>
	)
}
