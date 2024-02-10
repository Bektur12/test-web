import { styled } from '@mui/material/styles'
import RcPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

type PaginationProps = {
	handleNextPage: (event: number) => void
	page: number
	total: number
}
export const Pagination = ({
	handleNextPage,
	page,
	total,
}: PaginationProps) => {
	console.log(total, 'hello total')

	return (
		<ContainerPagination>
			<RcPagination
				pageSize={page}
				onChange={handleNextPage}
				current={total}
				total={total}
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
