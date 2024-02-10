import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/counter-slice'
import { styled } from '@mui/material'
import { useAppSelector } from '../hooks'

const Counter = () => {
	const count = useAppSelector((state) => state.counter.count)

	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(increment())
	}

	const handleReset = () => {
		dispatch(reset())
	}
	const handleDecrement = () => {
		dispatch(decrement())
	}

	return (
		<Container>
			<Card>
				<h2>Count : {count}</h2>
				<Row>
					<Button onClick={handleIncrement}>+</Button>
					<Button onClick={handleReset}>reset</Button>
					<Button onClick={handleDecrement}>-</Button>
				</Row>
			</Card>
		</Container>
	)
}

export default Counter

const Container = styled('div')`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	font-family: Inter;
`

const Row = styled('div')`
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const Card = styled('div')`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 20%;
	height: 200px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 1em;
	background: #ffff;
	justify-content: space-between;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`

const Button = styled('button')`
	width: 50px;
	height: 30px;
	background: #6495ed;
	box-shadow: rgba(0, 0, 0, 0.15) 0 2px 5px;
	display: flex;
	justify-content: center;
	padding: 8px;
	color: white;
	margin: 0 10px;
	cursor: pointer;
	border-radius: 7px;
	outline: none;
	border: none;
	&:hover {
		background: #6495edcc;
	}
`
