import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import IconLink from "../controls/icon-link";
import BorderedImage from "../commons/bordered-image";

type Project = {
    node: {
        title: string,
        summary: string,
        slug: string,
        image: {
            url: string
            title: string
        },
        tags: [],
        hyperlink: string,
        links: [],
        node_locale: string
    }
}
interface Props {
    project: Project,
    titleParentProject?: string
}
const MdProjectItem = ({project, titleParentProject = ''}: Props ) => {
    const {
        title,
        summary,
        slug,
        image,
        tags,
        hyperlink,
        links,
        node_locale
    } = project.node
    const url = image !== null && image !== undefined ? image.url : ''
    const alt = image !== null && image !== undefined ? image.title : ''

    if (titleParentProject === title){
        return (<></>)
    }

    return (
        <a href={`${node_locale==='es' ? '/es/' : '/'}projects/${slug}`} >
            <article className={`
                    group relative grid grid-cols-8 px-2 mb-0 py-2
                    backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                    rounded-lg transition-all duration-300 
                    md:hover:border-opacity-20  md:hover:border-t-gray-100 
                    md:hover:bg-white md:hover:bg-opacity-10 
                    md:hover:shadow-gray-900/30  md:hover:shadow-sm
                    md:hover:!opacity-100 md:group-hover/section:opacity-50 
            `}>
                <div className={`
                    absolute opacity-0 right-3 top-3 
                    group-hover:opacity-100 
                    -translate-x-5
                    translate-y-5
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:translate-y-0  
                    hidden md:block
                `}>
                    <ArrowUpRight />
                </div>
                <div className={'col-span-8 pt-0 pr-0 md:pr-2 md:col-span-2'}>
                    <BorderedImage src={url} alt={alt} />
                </div>
                <div className={'col-span-8 md:col-span-6 flex justify-start items-center'}>
                    <h3 className={'text-base text-white font-bold p-0 mt-3 md:mt-0'}>{title}</h3>
                </div>
            </article>
        </a>
    )
}

export default MdProjectItem