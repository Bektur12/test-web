import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { deleteBlogRequest, getBlogById } from '../redux/actions/blogActions'
import { useNavigate, useParams } from 'react-router-dom'
import { BlogItem } from '../types/types'
import { styled } from '@mui/material/styles'
import { Button } from '../components/UI/Button/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { EditForm } from '../components/Blogs/Form/EditForm'
import { useSnackBar } from '../hooks/useSnackBar'
import { BLOGS_DEFAULT_VALUES } from '../utils/constants/general'

export const BlogViewPage = () => {
	const methods = useForm<BlogItem>()
	const { id } = useParams()

	const dispatch = useAppDispatch()
	const { notify } = useSnackBar()
	const navigate = useNavigate()

	const [blog, setBlog] = useState<BlogItem>(BLOGS_DEFAULT_VALUES)
	const [isEditing, setIsEditing] = useState(false)

	const handleEditButtonClick = () => {
		setIsEditing(true)
		methods.setValue('text', blog.text)
		methods.setValue('title', blog.title)
	}

	const handleDeleteClick = async () => {
		await dispatch(deleteBlogRequest({ id: id as string })).then(() => {
			navigate('/blogs')
			notify({ title: 'Успешно удален', type: 'success' })
		})
	}

	useEffect(() => {
		dispatch(getBlogById(id as string))
			.unwrap()
			.then((result) => setBlog({ ...result.data }))
	}, [dispatch, id])

	return (
		<FormProvider {...methods}>
			<Container>
				{isEditing ? (
					<EditForm
						methods={methods}
						editId={id as string}
						setIsEditing={setIsEditing}
						setBlog={setBlog}
					/>
				) : (
					<>
						<TopPart>
							<h3>Title: {blog?.title}</h3>
							<p> Description: {blog?.text}</p>
						</TopPart>
						<BottomPart>
							<Button onClick={handleEditButtonClick}>
								Редактировать
							</Button>
							<Button onClick={handleDeleteClick}>Удалить</Button>
						</BottomPart>
					</>
				)}
			</Container>
		</FormProvider>
	)
}

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	color: '#FFFF',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
	gap: '20px',
})

const BottomPart = styled('div')({
	display: 'flex',
	gap: '10px',
	justifyContent: 'end',
})

const TopPart = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	fontFamily: 'Inter',
})
