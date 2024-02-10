import { IUserInfo } from '../../types/types'

export const userExists = (data: IUserInfo[], email: string) => {
	return data.some((item) => item.email === email)
}
