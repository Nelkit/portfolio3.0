import * as React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import { useEffect} from "react";
import TextLink from "./text-link";
import BorderedImage from "../commons/bordered-image";
import {RelatedAssets} from "../../custom";
import {ImageBlogVariant} from "../../utils/enums";

interface Props {
    contentRaw: string,
    references?: RelatedAssets[]
}

interface ElementProps {
    children: any,
}

const Bold = ({ children }:ElementProps) => (
    <strong className="font-bold text-gray-200">{children}</strong>
);

const Italic = ({ children }:ElementProps) => (
    <span className="italic">{children}</span>
);

const Underline = ({ children }:ElementProps) => (
    <span className="underline">{children}</span>
);

const Paragraph = ({ children }:ElementProps) => (
    <p className={'mb-3'}>{children}</p>
);

const Heading1 = ({ children }:ElementProps) => (
    <h1 className="text-5xl">{children}</h1>
);

const Heading2 = ({ children }:ElementProps) => (
    <h2 className="text-4xl">{children}</h2>
);

const Heading3 = ({ children }:ElementProps) => (
    <h3 className="text-3xl">{children}</h3>
);

const Heading4 = ({ children }:ElementProps) => (
    <h4 className="text-2xl">{children}</h4>
);

const Heading5 = ({ children }:ElementProps) => (
    <h5 className="text-xl">{children}</h5>
);

const Heading6 = ({ children }:ElementProps) => (
    <h6 className="text-lg">{children}</h6>
);

const Quote = ({ children }:ElementProps) => (
    <span className={`
        block ml-2 md:ml-5 pl-2 
        border-l-4 
        border-white/25 
        italic
    `}>{children}</span>
);

const UlList = ({ children }:ElementProps) => (
    <ul className={' ml-6 mb-3 list-disc'}>{children}</ul>
);

const OlList = ({ children }:ElementProps) => (
    <ul className={' ml-6 mb-3 list-decimal'}>{children}</ul>
);

const ListItem = ({ children }:ElementProps) => (
    <li className={'[&>*]:m-0 pt-1'}>{children}</li>
);

const Hr = ({ children }:ElementProps) => (
    <div className={'w-full my-6 flex justify-center items-center'}>
        <hr className={'w-44 md:w-80 border-white/20 border-1'} />
    </div>
);

const Table = ({ children }:ElementProps) => (
    <div className="relative rounded-xl overflow-auto bg-white/10 mb-3">
        <div className="shadow-sm overflow-hidden">
            <table className="border-collapse table-auto w-full text-sm">
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    </div>
);

const TableHeaderCell = ({ children }:ElementProps) => (
    <th className={'text-left pt-3 px-3 border-t border-white/10 bg-slate-100/10 text-white/90 font-bold text-md'}>
        {children}
    </th>
);

const TableCell = ({ children }:ElementProps) => (
    <td className={'text-left pt-3 px-3 border-t border-slate-100/10 '}>
        {children}
    </td>
);

const TableTailwind = ({ children }:ElementProps) => (
    <div className="relative rounded-xl overflow-auto">
        <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-auto w-full text-sm">
                <thead>
                <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Song</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Artist</th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Year</th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">The
                        Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">Malcolm
                        Lockyer
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">1961</td>
                </tr>
                <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">Witchy
                        Woman
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">The
                        Eagles
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">1972</td>
                </tr>
                <tr>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">Shining
                        Star
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">Earth,
                        Wind, and Fire
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">1975</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const RichTextRenderer = ({contentRaw, references}: Props) => {
    const options : any  = {
      renderMark: {
            [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
            [MARKS.ITALIC]: (text: string) => <Italic>{text}</Italic>,
            [MARKS.UNDERLINE]: (text: string) => <Underline>{text}</Underline>,
            [MARKS.CODE]: (text:string) => {
                  const regex = /^lang:(\w+)/;
                  if (!regex.test(text)) {
                    return <code>{text}</code>;
                  }
                  // @ts-ignore
                  const language = regex.exec(text)[1];

                  return (
                    <pre>
                      <code className={`language-${language} line-numbers`}>
                        {text.split("\n").slice(1).join("\n")}
                      </code>
                    </pre>
                  );
            },
      },
      renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Paragraph>{children}</Paragraph>,
            [BLOCKS.HEADING_1]: (node: any, children: any) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node: any, children: any) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node: any, children: any) => <Heading3>{children}</Heading3>,
            [BLOCKS.HEADING_4]: (node: any, children: any) => <Heading4>{children}</Heading4>,
            [BLOCKS.HEADING_5]: (node: any, children: any) => <Heading5>{children}</Heading5>,
            [BLOCKS.HEADING_6]: (node: any, children: any) => <Heading6>{children}</Heading6>,
            [BLOCKS.QUOTE]: (node: any, children: any) => <Quote>{children}</Quote>,
            [BLOCKS.LIST_ITEM]: (node:any, children:any)=><ListItem>{children}</ListItem>,
            [BLOCKS.UL_LIST]: (node:any, children:any)=><UlList>{children}</UlList>,
            [BLOCKS.OL_LIST]: (node:any, children:any)=><OlList>{children}</OlList>,
            [BLOCKS.HR]: (node:any, children:any)=><Hr>{children}</Hr>,
            [BLOCKS.TABLE]: (node:any, children:any)=><Table>{children}</Table>,
            [BLOCKS.TABLE_HEADER_CELL]: (node:any, children:any)=><TableHeaderCell>{children}</TableHeaderCell>,
            [BLOCKS.TABLE_CELL]: (node:any, children:any)=><TableCell>{children}</TableCell>,
            [INLINES.HYPERLINK]: (node:any, children:any)=>{
                if (node.data.uri.includes("youtube.com")) {
                    const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
                        node.data.uri
                    )
                    const videoId = match && match[7].length === 11 ? match[7] : null
                    return (
                        videoId && (
                            <span className="relative w-full h-0 pb-[56.25%] block">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    title={`https://youtube.com/embed/${videoId}`}
                                    src={`https://youtube.com/embed/${videoId}`}
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </span>
                        )
                    )
                }else{
                    return (
                        <TextLink href={node.data.uri}>{children}</TextLink>
                    )
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node:any, children:any)=>{
                const id = node.data.target.sys.id

                if (references !== null && references !== undefined){
                    const asset = references.find((reference: any) => reference.contentful_id === id);
                    const url = asset !== undefined ? asset.url : ''
                    const title = asset !== undefined ? asset.title : ''
                    const imageVariant = asset !== undefined ? asset.description : 'full'

                    if (url !== null && url !== undefined && url !== ''){
                        const IMAGE_STYLES: Record<ImageBlogVariant, string> = {
                            [ImageBlogVariant.LEFT]: 'mb-3 md:mb-0 mr-3 w-full md:max-w-[300px] float-left',
                            [ImageBlogVariant.RIGHT]: 'mb-3 md:mb-0 ml-3 w-full md:max-w-[300px] float-right',
                            [ImageBlogVariant.CENTER]: 'mb-3 px-0 sm:px-8 md:px-16',
                            [ImageBlogVariant.FULL]: 'mb-3',
                        };

                        if (imageVariant !== null && imageVariant !== undefined && imageVariant !== ''){
                            // @ts-ignore
                            const imageStyle = IMAGE_STYLES[imageVariant]

                            return (
                                <div className={imageStyle}>
                                    <BorderedImage src={url} alt={title} />
                                </div>
                            )
                        }else {
                            return (
                                <div className={'mb-3'}>
                                    <BorderedImage src={url} alt={title} />
                                </div>
                            )
                        }
                    }
                }

                return (<></>)
            }
      },
      renderText: (text: string) => text.replace('!', '?'),
    };

    return(
        <article
            className={'text-md'}
        >
            {documentToReactComponents(JSON.parse(contentRaw), options)}
        </article>
    )
}

export default RichTextRenderer