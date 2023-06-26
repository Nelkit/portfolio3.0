import * as React from "react"

interface Props {
    children: any,
    href: string
}
const LinkButton = ({children, href}: Props) => {

    return(
        <a
            href={href}
            className={`
                bg-white bg-opacity-10 backdrop-blur-xl text-white px-6 py-3
                border-t-[0.2px] border-opacity-20 border-t-gray-100
                rounded-md transition-all duration-300
                shadow-gray-900/30 shadow-sm
                hover:bg-white hover:text-black
            `}
        >
            {children}
        </a>
    )
}

export default LinkButton