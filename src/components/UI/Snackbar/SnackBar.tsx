import { styled } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Snackbar = () => {
	return (
		<Toastify
			position='top-right'
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	)
}

const Toastify = styled(ToastContainer)(() => ({
	'& .Toastify__toast': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '8px',
		background: '#FFFF',
		boxShadow: '4px 4px 13px 0px rgba(52, 52, 52, 0.08)',
		padding: '20px',
		position: 'relative',
		border: '1px solid #F3F3F3',
		maxHeight: '100px',
		overflow: 'scroll',
	},
	'& .Toastify__close-button': {
		alignSelf: 'center',
		position: 'absolute',
		top: '10px',
		left: '10px',
	},
	'&.custom-toast-body': {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	'& .Toastify__progress-bar': {
		top: '0',
		bottom: 'auto',
		left: '0',
		width: '4px',
		height: '100%',
		borderRadius: '0',
		zIndex: '9999',
	},
}))
