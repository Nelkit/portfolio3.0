import * as react from 'react'
import * as React from "react";
import ArrowUpRight from "./icons/arrow-up-right";
import Tag from "./tag";

interface Props {
    period: string,
    position: string,
    company: string,
    jobType: string,
    description: string,
}




const ExperienceItem = ({period, position, company, jobType, description}: Props ) => {
    return (
        <a href="#">
            <article className={`
                group relative grid grid-cols-8 mb-4 px-5 py-2 backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                hover:border-opacity-20 rounded-lg hover:border-t-gray-100 hover:bg-white hover:bg-opacity-10 
                hover:shadow-gray-900/30  hover:shadow-sm
                transition-all duration-300 
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
                <div className={'col-span-2'}>
                    <span className={'text-sm text-gray-400 uppercase'}>{period}</span>
                </div>
                <div className={'col-span-6'}>
                    <h3 className={'text-lg text-white font-bold transition-all duration-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-bl group-hover:from-custom-blue group-hover:to-custom-cyan'}>
                        {position}
                    </h3>
                    <p className={'text-md font-bold'}>
                        {company} · {jobType}
                    </p>
                    <p className={'text-sm'}>{description}</p>
                </div>
                <div className={'col-span-8 py-4'}>
                    <Tag href={'#'}>
                        Flutter
                    </Tag>
                    <Tag href={'#'}>
                        NodeJS
                    </Tag>
                    <Tag href={'#'}>
                        Flutter
                    </Tag>
                </div>
            </article>
        </a>
    )
}

export default ExperienceItem