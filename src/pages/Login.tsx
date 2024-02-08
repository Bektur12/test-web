import { styled } from '@mui/material/styles'
import img from '../assets/images/XMLID_1207_.png'
import { TextField } from '@mui/material'

export const Login = () => {
	return (
		<Container>
			<LeftContainer>
				<Image src={img} />
			</LeftContainer>
			<RightContainer>
				<form>
					<h3>
						Добро пожаловать <br /> в ARTA SOFWARE !
					</h3>
					<TextField />
					<TextField />
				</form>
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
	fontFamily: 'Inter',
	fontSize: '24px',
	fontWeight: 600,
})

const Container = styled('div')({
	display: 'flex',
	height: '100vh',
})
