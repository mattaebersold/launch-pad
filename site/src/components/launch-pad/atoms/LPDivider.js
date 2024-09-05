import * as React from "react"

const LPDivider = React.forwardRef(({ className, inset, theme = 'dark' }, ref) => (
  <>
		{ theme === 'dark' ? (
			<hr className="border-none h-[2px] bg-black w-full my-1"/>
		) : (
			<hr className="border-none h-[1px] bg-white/40 w-full my-1"/>
		)}
	</>
))
 
export {
  LPDivider
}