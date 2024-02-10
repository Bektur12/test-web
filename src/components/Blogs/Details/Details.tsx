import { styled } from '@mui/material/styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../UI/Input'

type DetailsProps = {
	title: string
}
export const Details = ({ title }: DetailsProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<Wrapper>
			<Title>{title}</Title>
			<InputStyled
				label='Заголовок'
				textError={errors.title?.message as string}
				error={!!errors.title}
				{...register('title', { required: 'Title is required' })}
			/>
			<InputStyled
				multiline
				label='Описание'
				textError={errors.text?.message as string}
				error={!!errors.text}
				{...register('text', { required: 'Text is required' })}
			/>
		</Wrapper>
	)
}

const Title = styled('h1')({
	color: '#FFFF',
	fontFamily: 'Inter',
	fontSize: '23px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: 'normal',
})

const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	width: '30%',
	gap: '20px',
})

const InputStyled = styled(Input)({
	'&.MuiInputBase-root': {
		background: '#FFFF',
	},
})
