import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
    },ref
)
{
    const id = useId()
    return (
        <div className={`w-full`}>
            {   
                label && 
                <label 
                    className={`block mb-1 pl-1`} 
                    // html for becoz we have id's here.
                    htmlFor={id}>
                        {label}
                </label>
            }
            <input
                type={type} 
                className={`${className}`}
                //giveref of parent component isi k lie React forword ko use kia hai..
                ref={ref}
                {...props}
                id={id}
            ></input>
        </div>
    )
})

export default Input