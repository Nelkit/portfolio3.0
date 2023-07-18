import * as react from 'react'
import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import IconLink from "../controls/icon-link";

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
        hyperlink: string,
        links: []
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
        hyperlink,
        links
    } = experience.node
    const descriptionRaw = description !== null ? description.raw : ''

    return (
        <a href={hyperlink} target="_blank" suppressHydrationWarning>
            <article className={`
                group transition-all duration-300 overflow-hidden
                relative grid grid-cols-8 mb-4 px-0 py-3
                border-t-transparent border-t-[0.1px] 
                hover:!opacity-100  
                md:px-5 md:py-6 md:backdrop-blur-xl  
                md:rounded-lg md:hover:border-opacity-20
                md:hover:border-t-gray-100  md:hover:bg-white 
                md:hover:bg-opacity-10 
                md:hover:shadow-gray-900/30 
                md:hover:shadow-sm
                md:group-hover/section:opacity-50
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
                <div className={'text-sm text-gray-400 uppercase col-span-8 md:col-span-2 flex md:flex-col'}>
                    <span>
                        {startDate}
                    </span>
                    <span className={'mx-2 '}> - </span>
                    <span>
                        {endDate}
                    </span>
                </div>
                <div className={'col-span-8 md:col-span-6'}>
                    <h3 className={'text-lg text-white font-bold transition-all duration-700 md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-bl md:group-hover:from-custom-blue md:group-hover:to-custom-cyan'}>
                        {title}
                    </h3>
                    <p className={'text-md font-bold'}>
                        {company} · {employmentType}
                    </p>
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

export default ExperienceItem