import * as React from "react"

const LPSidebar = React.forwardRef(({ className, inset, children }, ref) => (
  <div className="w-[200px] mr-6 rounded-[10px] shrink-0 sticky top-[30px] bg-black/50 border-2 border-black">
    {children}
  </div>
))
 
export {
  LPSidebar,
}