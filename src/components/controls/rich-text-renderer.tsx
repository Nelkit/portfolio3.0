import * as React from "react"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import { useEffect} from "react";
import TextLink from "./text-link";
import BorderedImage from "../commons/bordered-image";
import {RelatedAssets} from "../../custom";

interface Props {
    contentRaw: string,
    references?: RelatedAssets[]
}

interface ElementProps {
    children: any,
}

const Bold = ({ children }:ElementProps) => (
    <strong className="font-bold">{children}</strong>
);

const Italic = ({ children }:ElementProps) => (
    <span className="italic">{children}</span>
);

const Underline = ({ children }:ElementProps) => (
    <span className="underline">{children}</span>
);

const Paragraph = ({ children }:ElementProps) => (
    <p className="mb-3">{children}</p>
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
const RichTextRenderer = ({contentRaw, references}: Props) => {
    useEffect(()=>{
        //console.log(references)
    },[])

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
            [INLINES.HYPERLINK]: (node:any, children:any)=>{

                if (node.data.uri.includes("youtube.com")) {
                    // Extract videoId from the URL
                    const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
                        node.data.uri
                    )
                    const videoId =
                        match && match[7].length === 11 ? match[7] : null
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

                    if (url !== null && url !== undefined && url !== ''){
                        console.log(url)
                        return (<BorderedImage src={url} alt={title} />)
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