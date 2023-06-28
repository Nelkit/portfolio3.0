import * as React from "react"

interface Props {
    children: any,
    href: string
}
const Tag = ({children, href}: Props) => {

    return(
        <span
            className={`
                text-sm bg-custom-cyan bg-opacity-10 text-custom-cyan backdrop-blur-xl text-center py-1 px-2 rounded-md mr-2
                transition-all duration-500 hover:shadow-md hover:bg-opacity-20 mt-2
            `}
        >
            {children}
        </span>
    )
}

export default Tag