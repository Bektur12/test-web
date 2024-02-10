import { Card } from './Card/Card'
import { BlogItem } from '../../types/types'
import { List } from '../Posts'

type Blog = { blogs: BlogItem[] }

export const BlogList = ({ blogs = [] }: Blog) => {
	return (
		<List>
			{blogs?.map((item) => (
				<Card {...item} />
			))}
		</List>
	)
}
