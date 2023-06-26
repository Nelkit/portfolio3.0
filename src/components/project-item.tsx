import * as react from 'react'
import * as React from "react";
// @ts-ignore
import preview from '../images/preview.jpg'
import ArrowUpRight from "./icons/arrow-up-right";

interface Props {
    title: string,
    description: string,
}
const ProjectItem = ({title, description}: Props ) => {
    return (
        <a href="#">
            <article className={`
                    group relative grid grid-cols-8 mb-4 px-5 py-4
                    backdrop-blur-xl border-t-transparent border-t-[0.1px] 
                    hover:border-opacity-20 rounded-lg hover:border-t-gray-100 hover:bg-white hover:bg-opacity-10 
                    hover:shadow-gray-900/30  hover:shadow-sm
                    transition-all duration-300 
            `}>
                <div className={'col-span-2 pt-2 pr-3'}>
                    <img src={preview} alt="" className={'w-full rounded border-2 border-gray-600'}/>
                </div>
                <div className={'col-span-6'}>
                    <h3 className={'text-lg text-white font-bold p-0'}>{title}</h3>
                    <p className={'text-sm'}>{description}</p>
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