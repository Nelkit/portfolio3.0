import * as React from "react"

interface Props {
    children: any,
    href: string,
    target?: string
}
const Hyperlink = ({children, href, target='blank'}: Props) => {

    return(
        <a
            href={href}
            target={target}
            className={`
                text-white hover:underline hover:text-custom-cyan
            `}
        >
            {children}
        </a>
    )
}

export default Hyperlink