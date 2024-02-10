export const queryParamsFormat = (queryParamss: Record<string, string>) => {
	return Object.keys(queryParamss)
		.filter(
			(key) =>
				queryParamss[key] !== undefined && queryParamss[key] !== null,
		)
		.map((key) => `_${key}=${queryParamss[key]}`)
		.join('&')
}
