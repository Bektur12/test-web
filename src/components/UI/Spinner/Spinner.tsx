import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress'
import { Box } from '@mui/material'

type Spin = CircularProgressProps

export const Spinner = ({ size, color, ...otherProps }: Spin) => {
	return (
		<Box sx={{ display: 'flex' }} {...otherProps}>
			<CircularProgress color={color} size={size} />
		</Box>
	)
}
