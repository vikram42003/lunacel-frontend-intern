import clsx from "clsx"
import React from "react"

const CardView = ({ children, className }: Readonly<{ children: React.ReactNode, className: string }>) => {
  // todo - add some hover text to the question mark
  return (
    <div className={clsx(className, "flex rounded-3xl overflow-hidden")}>
      <div className="flex-1/12 bg-green-300"></div>
      <div className="flex-11/12 bg-green-900">
        {children}
      </div>
    </div>
  )
}

export default CardView