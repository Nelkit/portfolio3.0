import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import {useEffect} from "react";

type Project = {
    node: {
        title: string,
        description: {
            raw: string
        },
        image: {
            url: string
        },
        tags: []
    }
}
interface Props {
    project: Project,
}
const ProjectItem = ({project}: Props ) => {
    const {title, description, image, tags} = project.node
    const url = image !== null && image !== undefined ? image.url : ''
    const descriptionRaw = description !== null ? description.raw : ''

    return (
        <a href="#" >
            <article className={`
                    group relative grid grid-cols-8 mb-4 px-5 py-4
                    backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                    hover:border-opacity-20 rounded-lg hover:border-t-gray-100 hover:bg-white hover:bg-opacity-10 
                    hover:shadow-gray-900/30  hover:shadow-sm
                    transition-all duration-300 
                    hover:!opacity-100 group-hover/section:opacity-50 
            `}>
                <div className={'col-span-8 pt-2 pr-3 md:col-span-2'}>
                    <img src={url} alt="" className={'w-full rounded border-2 border-gray-600'}/>
                </div>
                <div className={'col-span-8 md:col-span-6'}>
                    <h3 className={'text-lg text-white font-bold p-0 mt-3 md:mt-0'}>{title}</h3>
                    <p
                        className={'text-sm'}
                        dangerouslySetInnerHTML={{__html: documentToHtmlString(JSON.parse(descriptionRaw))}}
                    ></p>

                    <div className={'flex w-full flex-wrap col-span-8 py-4'}>
                        {tags.map((tag: any, key: number)=>(
                            <Tag href={'#'} key={key}>
                                {tag.title}
                            </Tag>
                        ))}
                    </div>
                </div>
                <div className={`
                    absolute opacity-0 right-3 top-3 
                    group-hover:opacity-100 
                    -translate-x-5
                    translate-y-5
                    transition-all
                    duration-500
                    group-hover:translate-x-0
                    group-hover:translate-y-0  
                `}>
                    <ArrowUpRight />
                </div>
            </article>
        </a>
    )
}

export default ProjectItem