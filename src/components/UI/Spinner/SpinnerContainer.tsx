import { styled } from '@mui/material/styles'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

interface SpinnerContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
}

export const SpinnerContainer = forwardRef<
	HTMLDivElement,
	SpinnerContainerProps
>(({ children, ...otherProps }, ref) => {
	return (
		<Container ref={ref} {...otherProps}>
			{children}
		</Container>
	)
})

const Container = styled('div')(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(255, 255, 255, 0.3)',
	zIndex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))
