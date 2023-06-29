import * as React from "react"
import Instagram from "../icons/instagram";
import Hyperlink from "../icons/hyperlink";
import Download from "../icons/download";
import Github from "../icons/github";
import Appstore from "../icons/appstore";
import Playstore from "../icons/playstore";

interface Props {
    children: any,
    href: string,
    target?: string
    icon?: string
}
const IconLink = ({children, href, target='blank', icon='link'}: Props) => {

    const openLink = (e:any)=> {
        e.stopPropagation();
        e.preventDefault();
        window.open(href,target)
    }

    return(
        <button
            onClick={openLink}
            className={`
                currentColor hover:text-custom-cyan 
                inline-flex [&>*]:mr-1
                text-white text-sm
                items-center
                mr-2
                mb-4
            `}
        >
            {icon==='link' && (
                <Hyperlink height={'w-4'} width={'w-4'}></Hyperlink>
            )}
            {icon==='download' && (
                <Download height={'w-4'} width={'w-4'}></Download>
            )}
            {icon==='github' && (
                <Github height={'w-4'} width={'w-4'}></Github>
            )}
            {icon==='appstore' && (
                <Appstore height={'w-4'} width={'w-4'}></Appstore>
            )}
            {icon==='playstore' && (
                <Playstore height={'w-5'} width={'w-5'}></Playstore>
            )}
            {children}
        </button>
    )
}

export default IconLink