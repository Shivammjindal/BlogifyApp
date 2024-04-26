import React from 'react'

function Button({
    children,
    bgColor = "bg-blue-300",
    textColor = 'text-black',
    className="",
    //there may be more properties given by user so for them we take them in props and spread here... like (some special specs to button)
    ...props
}) {
  return (
    <button className={`px-4 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button