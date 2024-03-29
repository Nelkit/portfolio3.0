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
        hyperlink: string,
        links: [],
    }
}
interface Props {
    project: Project,
}
const ProjectItem = ({project}: Props ) => {
    const {title, description, image, tags, hyperlink, id, links} = project.node
    const url = image !== null && image !== undefined ? image.url : ''
    const descriptionRaw = description !== null ? description.raw : ''

    return (
        <a href={`${hyperlink!==null ? hyperlink : `projects/${id}`}`} >
            <article className={`
                    group relative grid grid-cols-8 mb-4 px-5 py-6
                    backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                    hover:border-opacity-20 rounded-lg hover:border-t-gray-100 hover:bg-white hover:bg-opacity-10 
                    hover:shadow-gray-900/30  hover:shadow-sm
                    transition-all duration-300 
                    hover:!opacity-100 group-hover/section:opacity-50 
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
                <div className={'col-span-8 pt-0 md:pt-2 pr-0 md:pr-3 md:col-span-2'}>
                    <img src={url} alt="" className={'w-full rounded border-2 border-gray-600'}/>
                </div>
                <div className={'col-span-8 md:col-span-6'}>
                    <h3 className={'text-lg text-white font-bold p-0 mt-3 md:mt-0'}>{title}</h3>
                    <p
                        className={'text-sm mb-3'}
                        dangerouslySetInnerHTML={{__html: documentToHtmlString(JSON.parse(descriptionRaw))}}
                    ></p>
                    <div className={'flex w-full flex-wrap col-span-8'}>
                        {links.map((link: any, key: number)=>(
                            <IconLink href={link.href} icon={link.icon} key={key}>
                                {link.title}
                            </IconLink>
                        ))}
                    </div>
                    <div className={'flex w-full flex-wrap col-span-8'}>
                        {tags.map((tag: any, key: number)=>(
                            <Tag href={'#'} key={key}>
                                {tag.title}
                            </Tag>
                        ))}
                    </div>
                </div>
            </article>
        </a>
    )
}

export default ProjectItem