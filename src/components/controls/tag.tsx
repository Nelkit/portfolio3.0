import * as React from "react"

interface Props {
    children: any,
    href: string
}
const Tag = ({children, href}: Props) => {

    return(
        <span
            className={`
                text-sm bg-custom-cyan bg-opacity-10 text-custom-cyan text-center py-1 px-2 rounded-md 
                transition-all duration-500 hover:shadow-md hover:bg-opacity-20 mb-2 mr-2
            `}
        >
            {children}
        </span>
    )
}

export default Tag