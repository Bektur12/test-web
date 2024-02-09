import { styled } from '@mui/material/styles'
import RcPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

export const Pagination = () => {
	return (
		<ContainerPagination>
			<RcPagination

			// pageSize={countPerPage}
			// onChange={updatePage}
			// current={currentPage}
			// total={allData.length}
			/>
		</ContainerPagination>
	)
}

const ContainerPagination = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	background: '#FFF',
	padding: '5px',
	position: 'absolute',
	bottom: 0,
})
