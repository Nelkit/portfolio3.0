import * as React from "react"

interface Props {
    children: any,
    handleClick: any,
    isActive?: boolean
}
const MenuItem = ({children, handleClick, isActive = false}: Props) => {

    return(
        <button
            onClick={handleClick}
            className={`
                mt-2
                rounded-md
                cursor-pointer
                w-fit
                py-1 
                px-2 
                border-t-[0.1px]
                hover:backdrop-blur-md
                hover:bg-white/10
                hover:border-t-gray-100/50
                hover:shadow-gray-900/30
                hover:shadow-sm 
                transition-all duration-400 ml-0
                ${isActive ? 'backdrop-blur-md bg-white/10 border-t-gray-100 border-opacity-50 shadow-sm shadow-gray-900/30 ml-1.5 font-bold text-white' : 'border-t-transparent'}
            `}
        >
            {children}
        </button>
    )
}

export default MenuItem