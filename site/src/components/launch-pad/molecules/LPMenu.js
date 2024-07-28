import * as React from "react"

const LPMenu = React.forwardRef(({ className, inset, children }, ref) => (
  <div className="my-3">
      {children}
  </div>
))
LPMenu.displayName = "LPMenu"
 
export {
  LPMenu,
}