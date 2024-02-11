import { styled } from '@mui/material/styles'
import RcPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

type PaginationProps = {
	handleNextPage: (page: number) => void
	handleSizeChange: (size: number) => void
	page: number
	total: number
	pageSize: number
}
export const Pagination = ({
	handleNextPage,
	handleSizeChange,
	page,
	total,
	pageSize,
}: PaginationProps) => {
	return (
		<ContainerPagination>
			<RcPagination
				pageSize={pageSize}
				onChange={handleNextPage}
				current={page}
				total={total}
				showSizeChanger
				onShowSizeChange={handleSizeChange}
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
