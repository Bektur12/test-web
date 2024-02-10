/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles'
import { toast, ToastOptions } from 'react-toastify'
import CloseIcon from '../assets/icons/close-modal.svg'
import SuccessIcon from '../assets/icons/success.svg'
import ErrorIcon from '../assets/icons/error.svg'
import InfoIcon from '../assets/icons/info.svg'

interface SnackbarOptions extends ToastOptions {
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

interface SnackbarProps {
	type: 'success' | 'error' | 'info' | 'warn'
	title: string
	options?: SnackbarOptions
}

export const useSnackbar = () => {
	const notify = ({ type, title, options }: SnackbarProps) => {
		let iconComponent: JSX.Element | null = null
		switch (type) {
			case 'success':
				iconComponent = <SuccessIcon />
				break
			case 'error':
				iconComponent = <ErrorIcon />
				break
			case 'warn':
				iconComponent = <InfoIcon />
				break
			default:
				break
		}

		toast[type](<Title>{title}</Title>, {
			hideProgressBar: false,
			autoClose: 3000,
			icon: iconComponent as any,
			isLoading: false,
			toastId: 'custom-toast',
			closeButton: <CloseIcon />,
			style: {
				overflow: 'scroll',
			},
			...options,
		})
	}
	return { notify }
}

export const Title = styled('h4')(() => ({
	fontFamily: 'Inter',
	fontSize: '14px',
	lineHeight: '18.75px',
	color: '#4C4859',
	fontWeight: '400',
}))
