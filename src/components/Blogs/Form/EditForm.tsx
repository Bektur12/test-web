import { styled } from '@mui/material/styles'
import { Button } from '../../UI/Button/Button'
import { Details } from '../Details/Details'
import { editBlogRequest } from '../../../redux/actions/blogActions'
import { BlogItem } from '../../../types/types'
import { useAppDispatch } from '../../../hooks'
import { UseFormReturn } from 'react-hook-form'
import { useSnackBar } from '../../../hooks/useSnackBar'

type Form = {
	methods: UseFormReturn<BlogItem>
	editId: string
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
	setBlog: React.Dispatch<React.SetStateAction<BlogItem>>
}

export const EditForm = ({ methods, editId, setIsEditing, setBlog }: Form) => {
	const dispatch = useAppDispatch()
	const { notify } = useSnackBar()

	const handleCloseHandler = () => setIsEditing(false)

	const handleSaveClick = (data: Omit<BlogItem, 'id'>) => {
		dispatch(editBlogRequest({ id: editId, ...data }))
			.unwrap()
			.then((result) => {
				setBlog({ ...result.data })
				notify({ title: 'Успешно изменен', type: 'success' })
				handleCloseHandler()
			})
	}

	return (
		<EditContainer onSubmit={methods.handleSubmit(handleSaveClick)}>
			<Details title='Edit Blog' />
			<ButtonContainer>
				<Button onClick={handleCloseHandler}>Отменить</Button>
				<Button type='submit'>Сохранить</Button>
			</ButtonContainer>
		</EditContainer>
	)
}

const EditContainer = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	width: '80%',
	alignItems: 'center',
})

const ButtonContainer = styled('div')({
	display: 'flex',
	gap: '10px',
	justifyContent: 'end',
	width: '30%',
})
