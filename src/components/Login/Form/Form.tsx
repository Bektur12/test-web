import { styled } from '@mui/material/styles'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/Button/Button'
import { useForm } from 'react-hook-form'
import {
	EMAIL_FORMAT,
	VALIDATION_MESSAGE,
} from '../../../utils/constants/general'

type FormProps = {
	email: string
	password: string
}
export const Form = () => {
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm<FormProps>()

	const onSubmit = (data: FormProps) => {
		console.log(data)
	}

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Title>
				Добро пожаловать <p> в ARTA SOFTWARE !</p>
			</Title>
			<InnerContainer>
				<InputContainer>
					<Input
						label='Логин:'
						placeholder='example@hello.com'
						textError={errors.email?.message as string}
						error={!!errors.email}
						{...register('email', {
							required: 'Емайл обязателен',
							pattern: {
								value: EMAIL_FORMAT,
								message: VALIDATION_MESSAGE.EMAIL,
							},
						})}
					/>
					<Input
						label='Пароль:'
						textError={errors.password?.message as string}
						error={!!errors.password}
						{...register('password', {
							required: 'Пароль обязателен',
							minLength: {
								value: 6,
								message: VALIDATION_MESSAGE.PASSWORD,
							},
						})}
					/>
				</InputContainer>
				<ButtonStyled isLoading={isSubmitting} type='submit'>
					Войти
				</ButtonStyled>
			</InnerContainer>
		</FormStyled>
	)
}

const FormStyled = styled('form')({
	fontFamily: 'Inter',
	fontSize: '24px',
	fontWeight: 600,
	width: '60%',
})

const InnerContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	marginTop: '20px',
	alignItems: 'center',
})

const InputContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	width: '100%',
})

const Title = styled('h3')({
	textAlign: 'center',
	p: {
		color: 'red',
	},
})

const ButtonStyled = styled(Button)(() => ({
	'&.MuiButton-root': {
		width: '40%',
		marginTop: '35px',
	},
}))
