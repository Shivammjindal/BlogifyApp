import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'

//creating dropdown

const Select = forwardRef( function Select({
    options,
    label,
    className = "",
    ...props
},ref) {

    const id = useId();

  return (
    <>
        <div className="w-full">Select</div>
        {
            label && <label 
                className={`${className}`}
                htmlFor={id}
            >
                
            </label>
        }
        <select
            id={id}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
        >
            {
                options 
                && 
                options.map((option) => (
                    // we can pass option as key because all are different .. (SOCHO) ..
                    <option 
                        value={`${option}`} 
                        key={option}
                    >
                        {option}
                    </option>
                ))
            }
        </select>
    </>
  )
})

export default Select