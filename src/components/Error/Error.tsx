import { styled } from '@mui/material'

type ErrorProps = {
	message?: string
}
export const Error = ({ message = 'Что-то пошло не так' }: ErrorProps) => {
	return <ErrorContainer>{message}</ErrorContainer>
}

const ErrorContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'red',
	height: '100%',
})
