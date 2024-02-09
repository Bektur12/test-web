import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { getBlogById } from '../redux/actions/blogActions'
import { useParams } from 'react-router-dom'
import { BlogItem } from '../types/types'

export const BlogViewPage = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const [blog, setBlog] = useState<BlogItem>()

	useEffect(() => {
		dispatch(getBlogById(id as string))
			.unwrap()
			.then((result) => setBlog({ ...result.data }))
	}, [dispatch, id])

	return (
		<div>
			<h1> {blog?.title}</h1>
			<p>{blog?.text}</p>
		</div>
	)
}
