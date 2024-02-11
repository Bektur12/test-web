import { IUserInfo } from '../../types/types'

export const userExists = (data: IUserInfo[], user: Omit<IUserInfo, 'id'>) => {
	return data.some(
		(item) => item.email === user.email && item.password == user.password,
	)
}
