import { FormProvider, useForm } from 'react-hook-form'
import { Details } from '../components/Blogs/Details/Details'
import { styled } from '@mui/material'
import { Button } from '../components/UI/Button/Button'
import { useAppDispatch } from '../hooks'
import { postBlogRequest } from '../redux/actions/blogActions'

type Form = {
	title: string
	text: string
}
export const CreateBlogPage = () => {
	const methods = useForm<Form>()
	const dispatch = useAppDispatch()

	const handleSaveClick = (data: Form) => {
		dispatch(postBlogRequest(data))
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
