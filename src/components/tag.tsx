import * as React from "react"

interface Props {
    children: any,
    href: string
}
const Tag = ({children, href}: Props) => {

    return(
        <a
            href={href}
            className={`
                bg-custom-cyan bg-opacity-10 text-custom-cyan backdrop-blur-xl text-center py-1 px-2 rounded-md mr-2
                hover:shadow-sm hover:shadow-custom-cyan
            `}
        >
            {children}
        </a>
    )
}

export default Tag