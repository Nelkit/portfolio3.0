import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import IconLink from "../controls/icon-link";
import BorderedImage from "../commons/bordered-image";

type BlogPost = {
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
        date: string,
        node_locale: string
    }
}
interface Props {
    post: BlogPost,
}
const LgProjectItem = ({post}: Props ) => {
    const {
        title,
        summary,
        slug,
        image,
        date,
        node_locale
    } = post.node
    const url = image !== null && image !== undefined ? image.url : ''
    const alt = image !== null && image !== undefined ? image.title : ''
    let resizeImage = url
    if (image !== null && image !== undefined){
        resizeImage = image.resize !== null && image.resize !== undefined ? image.resize.src : url
    }

    return (
        <a href={`/${node_locale==='es' ? 'es/' : ''}blog/${slug}`} >
            <article className={`
                    group relative grid grid-cols-8 mb-4 px-5 py-4
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
                <div className={'col-span-8 md:col-span-3 pt-2 pr-0 mb-2 md:pr-3'}>
                    <BorderedImage src={resizeImage} alt={alt} width={'345px'} height={'217px'}/>
                </div>
                <div className={'col-span-8 md:col-span-5 md:ml-8 flex items-center justify-start content-center h-full'}>
                    <div className={'w-full'}>
                        <h3 className={'text-lg font-bold p-0 mt-3 md:mt-0'}>{date}</h3>
                        <h2 className={'text-2xl text-white font-bold p-0 mt-0'}>{title}</h2>
                        <p
                            className={'text-md mb-4 md:mb-0'}
                        >
                            {summary}
                        </p>
                    </div>
                </div>
            </article>
        </a>
    )
}

export default LgProjectItem