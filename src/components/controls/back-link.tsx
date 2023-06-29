import * as React from "react"
import ArrowLeft from "../icons/arrow-left";
import {useI18next} from "gatsby-plugin-react-i18next";

interface Props {
    children: any,
}
const BackLink = ({children}: Props) => {
    const { language} = useI18next();

    return(
        <a
            href={`/${language=='en'? '' : language}`}
            className={`
                group
                text-md
                font-bold text-custom-cyan hover:text-custom-cyan
                inline-flex justify-center items-center 
                [&>svg]:transition-transform
                [&>svg]:duration-300
                [&>svg]:translate-y-0
                [&>svg]:translate-x-0
                [&>svg]:mr-1
            `}
        >
            <ArrowLeft width={'w-4'} height={'h-4'} otherClasses={'group-hover:-translate-x-1'} />
            {children}
        </a>
    )
}

export default BackLink