/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles'
import { Button } from '../../UI/Button/Button'
import { Details } from '../Details/Details'
import { editBlogRequest } from '../../../redux/actions/blogActions'
import { BlogItem } from '../../../types/types'
import { useAppDispatch } from '../../../hooks'
import { UseFormReturn } from 'react-hook-form'

type Form = {
	methods: UseFormReturn<BlogItem, any, BlogItem>
	editId: string
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}
export const EditForm = ({ methods, editId, setIsEditing }: Form) => {
	const dispatch = useAppDispatch()

	const handleSaveClick = (data: Omit<BlogItem, 'id'>) => {
		dispatch(editBlogRequest({ id: editId, ...data }))
		setIsEditing(false)
	}

	return (
		<EditContainer onSubmit={methods.handleSubmit(handleSaveClick)}>
			<Details title='Edit Blog' />
			<ButtonContainer>
				<Button>Отменить</Button>
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
