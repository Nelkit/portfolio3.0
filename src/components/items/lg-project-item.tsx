import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import IconLink from "../controls/icon-link";
import BorderedImage from "../commons/bordered-image";

type Project = {
    node: {
        title: string,
        summary: string,
        slug: string,
        image: {
            url: string,
            title: string,
            resize: {
                src: string
            }
        },
        tags: [],
        hyperlink: string,
        links: [],
        year:number,
        node_locale: string,
        madeAt: string
    }
}
interface Props {
    project: Project,
}
const LgProjectItem = ({project}: Props ) => {
    const {
        title,
        summary,
        slug,
        image,
        tags,
        hyperlink,
        links,
        year,
        node_locale,
        madeAt
    } = project.node
    const url = image !== null && image !== undefined ? image.url : ''
    const alt = image !== null && image !== undefined ? image.title : ''
    let resizeImage = url
    if (image !== null && image !== undefined){
        resizeImage = image.resize !== null && image.resize !== undefined ? image.resize.src : url
    }

    return (
        <a href={`${hyperlink!==null && hyperlink!=='none' ? hyperlink : `/${node_locale==='es' ? 'es/' : ''}projects/${slug}`}`} >
            <article className={`
                    group relative grid grid-cols-10 mb-4 px-5 py-4
                    rounded-lg bg-gray-600 bg-opacity-10 transition-all 
                    duration-300 border-t-transparent border-t-[0.1px] 
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
                    <BorderedImage src={resizeImage} alt={alt} width={'273px'} height={'164px'} />
                </div>
                <div className={'col-span-10 md:ml-8 md:col-span-7 flex items-center justify-center content-center h-full'}>
                    <section className={'h-fit'}>
                        <h3 className={'text-md p-0 mt-3 md:mt-0'}>{year}{madeAt && ` · ${madeAt}`}</h3>
                        <h2 className={'text-xl text-white font-bold p-0 mt-3 md:mt-0'}>{title}</h2>
                        <p
                            className={'text-sm mb-4 md:mb-0'}
                        >
                            {summary}
                        </p>
                        <div className={'flex flex-wrap items-center mt-2 content-center col-span-10 md:col-span-7 lg:col-span-7'}>
                            {tags.map((tag: any, key: number)=>(
                                <Tag href={'#'} key={key}>
                                    {tag.title}
                                </Tag>
                            ))}
                        </div>
                        <div className={'flex flex-wrap items-center  mt-2 content-center justify-start md:justify-start col-span-10 md:col-span-3 lg:col-span-3'}>
                            {links.map((link: any, key: number)=>(
                                <IconLink href={link.href} icon={link.icon} key={key}>
                                    {link.title}
                                </IconLink>
                            ))}
                        </div>
                    </section>
                </div>
            </article>
        </a>
    )
}

export default LgProjectItem