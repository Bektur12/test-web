import { styled } from '@mui/material/styles'
import img from '../assets/images/XMLID_1207_.png'
import { Form } from '../components/Login/Form/Form'

export const Login = () => {
	return (
		<Container>
			<LeftContainer>
				<Image src={img} />
			</LeftContainer>
			<RightContainer>
				<Form />
			</RightContainer>
		</Container>
	)
}

const Image = styled('img')({
	height: '300px',
})

const LeftContainer = styled('div')({
	background: '#3772FF',
	width: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

const RightContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '50%',
})

const Container = styled('div')({
	display: 'flex',
	height: '100vh',
})
