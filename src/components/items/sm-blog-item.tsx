import * as React from "react";
import ArrowUpRight from "../icons/arrow-up-right";
import Tag from "../controls/tag";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import IconLink from "../controls/icon-link";
import BorderedImage from "../commons/bordered-image";

type BlogPost = {
    node: {
        title: string,
        slug: string,
        image: {
            url: string,
            title: string,
            resize: {
                src: string
            }
        },
        node_locale: string
    }
}
interface Props {
    post: BlogPost,
    titleParentPost?: string
}
const SmBlogItem = ({post, titleParentPost = ''}: Props ) => {
    const {
        title,
        slug,
        image,
        node_locale
    } = post.node
    const url = image !== null && image !== undefined ? image.url : ''
    const alt = image !== null && image !== undefined ? image.title : ''
    let resizeImage = url
    if (image !== null && image !== undefined){
        resizeImage = image.resize !== null && image.resize !== undefined ? image.resize.src : url
    }

    // if (titleParentPost === title){
    //     return (<></>)
    // }

    return (
        <a href={`${node_locale==='es' ? '/es/' : '/'}blog/${slug}`} >
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
                    <BorderedImage src={resizeImage} alt={alt} />
                </div>
                <div className={'col-span-8 md:col-span-6 flex justify-start items-center'}>
                    <h3 className={'text-sm text-gray-400 p-0 mt-3 md:mt-0 line-clamp-2'}>
                        {title}
                    </h3>
                </div>
            </article>
        </a>
    )
}

export default SmBlogItem