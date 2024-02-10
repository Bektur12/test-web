import { FormProvider, useForm } from 'react-hook-form'
import { Details } from '../components/Blogs/Details/Details'
import { styled } from '@mui/material'
import { Button } from '../components/UI/Button/Button'
import { useAppDispatch } from '../hooks'
import { postBlogRequest } from '../redux/actions/blogActions'
import { useNavigate } from 'react-router-dom'
import { useSnackBar } from '../hooks/useSnackBar'

type Form = {
	title: string
	text: string
}
export const CreateBlogPage = () => {
	const methods = useForm<Form>()

	const { notify } = useSnackBar()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSaveClick = (data: Form) => {
		dispatch(postBlogRequest({ data, navigate, notify }))
	}

	return (
		<FormProvider {...methods}>
			<Wrapper onSubmit={methods.handleSubmit(handleSaveClick)}>
				<Details title='Create Blog' />
				<ButtonStyled type='submit'>Создать</ButtonStyled>
			</Wrapper>
		</FormProvider>
	)
}

const Wrapper = styled('form')({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '100%',
	justifyContent: 'center',
	flexDirection: 'column',
	gap: '15px',
})

const ButtonStyled = styled(Button)(() => ({
	'&.MuiButton-root': {
		width: '15%',
	},
}))
