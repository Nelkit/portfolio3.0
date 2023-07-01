import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import IconLink from "../controls/icon-link";

type Project = {
    node: {
        id:number,
        title: string,
        description: {
            raw: string
        },
        image: {
            url: string
        },
        tags: [],
        year:number,
        hyperlink: string,
        links: [],
    }
}
interface Props {
    project: Project,
}
const ProjectRow = ({project}: Props ) => {
    const {title, description, image, tags, hyperlink, id, links, year} = project.node
    const url = image !== null && image !== undefined ? image.url : ''
    const descriptionRaw = description !== null ? description.raw : ''

    return (
        <a href={`${hyperlink!==null ? hyperlink : `projects/${id}`}`} >
            <article className={`
                    group relative grid grid-cols-10 mb-4 px-5 py-4
                    rounded-lg bg-gray-600 bg-opacity-10 transition-all 
                    duration-300 backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                    md:hover:border-opacity-20 md:hover:border-t-gray-100 md:hover:bg-white 
                    md:hover:bg-opacity-10 md:hover:shadow-gray-900/30  md:hover:shadow-sm
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
                <div className={'col-span-10 pt-2 pr-0 mb-2 md:pr-3 md:col-span-3'}>
                    <img src={url} alt="" className={'w-full rounded border-2 border-gray-600'}/>
                </div>
                <div className={'col-span-10 md:ml-8 md:col-span-7 flex items-center justify-center content-center h-full'}>
                    <div>
                        <h3 className={'text-md font-bold p-0 mt-3 md:mt-0'}>{year}</h3>
                        <h3 className={'text-lg text-white font-bold p-0 mt-3 md:mt-0'}>{title}</h3>
                        <p
                            className={'text-sm mb-4 md:mb-0'}
                            dangerouslySetInnerHTML={{__html: documentToHtmlString(JSON.parse(descriptionRaw))}}
                        ></p>
                    </div>
                </div>
                <div className={'flex flex-wrap items-center mb-2 mt-0 md:mt-4 content-center col-span-10 md:col-span-7 lg:col-span-7'}>
                    {tags.map((tag: any, key: number)=>(
                        <Tag href={'#'} key={key}>
                            {tag.title}
                        </Tag>
                    ))}
                </div>
                <div className={'flex flex-wrap items-center content-center justify-start md:justify-end col-span-10 mb-2 md:col-span-3 lg:col-span-3'}>
                    {links.map((link: any, key: number)=>(
                        <IconLink href={link.href} icon={link.icon} key={key}>
                            {link.title}
                        </IconLink>
                    ))}
                </div>
            </article>
        </a>
    )
}

export default ProjectRow