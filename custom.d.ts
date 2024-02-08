declare module '*.svg?react' {
	import React = require('react')
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>
	const src: string
	export default src
}

declare module '*.png' {
	import React = require('react')
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>
	const src: string
	export default src
}
