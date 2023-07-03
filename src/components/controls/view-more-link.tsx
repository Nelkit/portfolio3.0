import * as React from "react"
import ArrowUpRight from "../icons/arrow-up-right";

interface Props {
    children: any,
    href: string,
    target?: string
}
const ViewMoreLink = ({children, href, target='blank'}: Props) => {

    return(
        <a
            href={href}
            target={target}
            className={`
                group
                font-bold text-white hover:underline hover:text-custom-cyan
                inline-flex justify-center items-center 
                [&>svg]:transition-transform
                [&>svg]:duration-300
                [&>svg]:translate-y-0
                [&>svg]:translate-x-0
                [&>svg]:ml-1
            `}
        >
            {children}
            <ArrowUpRight width={'w-3'} height={'h-3'} className={'group-hover:-translate-y-1 group-hover:translate-x-1'} />
        </a>
    )
}

export default ViewMoreLink