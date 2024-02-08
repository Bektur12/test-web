import MuiButton, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Spinner } from '../Spinner/Spinner'

type BtnProps = ButtonProps & {
	backgroundColor?: string
	isLoading?: boolean
	isDisabled?: boolean
}

export const Button = ({
	onClick,
	children,
	isLoading,
	isDisabled,
	...props
}: BtnProps) => {
	return (
		<ButtonStyled
			disabled={isLoading || isDisabled}
			onClick={onClick}
			{...props}
		>
			{isLoading ? <Spinner color='warning' size={25} /> : children}
		</ButtonStyled>
	)
}

const ButtonStyled = styled(MuiButton)(() => ({
	'&.MuiButton-root': {
		fontFamily: 'Inter',
		fontWeight: 500,
		color: 'white',
		backgroundColor: '#157cb6',
		textTransform: 'none',
		border: '1px solid #157cb6',
		borderRadius: '8px',
		cursor: 'pointer',
	},
}))
