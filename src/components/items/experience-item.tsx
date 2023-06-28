import * as react from 'react'
import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

type Experience = {
    node: {
        title: string,
        company: string,
        employmentType: string,
        startDate: string,
        endDate: string,
        description: {
            raw: string
        },
        tags: []
        hyperlink: string
    }
}

interface Props {
    experience: Experience
}

const ExperienceItem = ({experience}: Props ) => {
    const {
        title,
        company,
        employmentType,
        startDate,
        endDate,
        description,
        tags,
        hyperlink
    } = experience.node
    const descriptionRaw = description !== null ? description.raw : ''

    return (
        <a href={hyperlink} target="_blank" >
            <article className={`
                group relative grid grid-cols-8 mb-4 px-5 py-2 backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                hover:border-opacity-20 rounded-lg hover:border-t-gray-100 hover:bg-white hover:bg-opacity-10 
                hover:shadow-gray-900/30  hover:shadow-sm
                transition-all duration-300 overflow-hidden
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
                `}>
                    <ArrowUpRight />
                </div>
                <div className={'col-span-8 md:col-span-2'}>
                    <span className={'text-sm text-gray-400 uppercase'}>
                        {startDate} - {endDate}
                    </span>
                </div>
                <div className={'col-span-8 md:col-span-6'}>
                    <h3 className={'text-lg text-white font-bold transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-bl group-hover:from-custom-blue group-hover:to-custom-cyan'}>
                        {title}
                    </h3>
                    <p className={'text-md font-bold'}>
                        {company} · {employmentType}
                    </p>
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
            </article>
        </a>
    )
}

export default ExperienceItem