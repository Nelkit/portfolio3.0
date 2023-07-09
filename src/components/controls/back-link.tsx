import * as React from "react"
import ArrowLeft from "../icons/arrow-left";
import {useI18next} from "gatsby-plugin-react-i18next";

interface Props {
    children: any,
    href?: string
}
const BackLink = ({children, href=''}: Props) => {
    const { language} = useI18next();

    const goToBack = ()=>{
        const {location} = window;
        const {pathname} = location
        let urlToRedirect:string = ''

        if (pathname.includes('es')){
            urlToRedirect = '/es/'
        }else{
            urlToRedirect = '/'
        }

        urlToRedirect += href

        location.href = urlToRedirect
    }

    return(
        <button
            onClick={goToBack}
            className={`
                group
                text-md
                font-bold text-custom-cyan 
                inline-flex justify-center items-center 
                px-3
                py-1
                rounded-md
                bg-gray-500/10
                hover:text-custom-cyan
                hover:bg-gray-500/60
                [&>svg]:transition-transform
                [&>svg]:duration-300
                [&>svg]:translate-y-0
                [&>svg]:translate-x-0
                [&>svg]:mr-1
            `}
        >
            <ArrowLeft width={'w-4'} height={'h-4'} />
            {children}
        </button>
    )
}

export default BackLink