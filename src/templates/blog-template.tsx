import * as React from "react"
import {useEffect} from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import RichTextRenderer from "../components/controls/rich-text-renderer";
import {SEO} from "../components/seo";
import BorderedImage from "../components/commons/bordered-image";
import Layout from "../components/layouts/layout";
import ContentLayout from "../components/layouts/content-layout";
import BackLink from "../components/controls/back-link";
import {Trans} from "gatsby-plugin-react-i18next";
import ContactLinks from "../components/commons/contact-links";
import Footer from "../components/footer";
import AsideLayout from "../components/layouts/aside-layout";
import MainLayout from "../components/layouts/main-layout";
import DataUtils from "../utils/data-utils";
import SmProjectItem from "../components/items/sm-project-item";
import {ColSpanVariant, ColVariant} from "../utils/enums";
import {CustomPageProps} from "../custom";
import Prism from 'prismjs'
import SmBlogItem from "../components/items/sm-blog-item";
import AboutCard from "../components/commons/about-card";

const BlogTemplate: React.FC<PageProps> = (props) => {
    const { data } = props as CustomPageProps
    const dataUtils: DataUtils = new  DataUtils()
    const {contentfulBlogPost, allContentfulAbout, allContentfulBlogPost} = data
    const {
        title,
        body,
        date,
        image,
        tags,
        relatedAssets
    } = contentfulBlogPost;
    const url = image !== null && image !== undefined ? image.url : ''
    const alt = image !== null && image !== undefined ? image.title : ''
    const {title: aboutTitle ,summary} = dataUtils.getAboutInfo(allContentfulAbout);


    useEffect(()=>{
        Prism.highlightAll()
    },[])

    return (
        <Layout>
            <ContentLayout cols={ColVariant.COLS3}>
                <AsideLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <div className={'mt-16 md:mt-0'}>
                        <BackLink href={'blog/'}>
                           <Trans>Go to Blog</Trans>
                        </BackLink>
                        <AboutCard title={aboutTitle} summary={summary} />
                        <div className={'w-full hidden lg:block mt-16 pr-10' }>
                            <h1 className={'text-white text-xl font-bold mb-2  '}>
                                <Trans>More posts</Trans>
                            </h1>
                            {allContentfulBlogPost.edges.map((post: any, index: number) =>(
                                <SmBlogItem
                                    key={index}
                                    post={post}
                                    titleParentPost={title}
                                />
                            ))}
                        </div>
                    </div>
                </AsideLayout>
                <MainLayout colSpan={ColSpanVariant.COLSPAN2}>
                    <div className={'w-full px-2 md:px-0'}>
                        <h3 className={'text-lg font-bold p-0 mt-3 md:mt-0 text-center w-full'}>
                            {date}
                        </h3>
                        <h1 className={'text-3xl font-bold text-white mb-2 text-center w-full'}>
                            {title}
                        </h1>
                        <div className={'-mx-6 lg:-mx-6'}>
                            <BorderedImage src={url} isFeaturedImage={true} alt={alt}/>
                        </div>
                        <div className={'mt-3'}>
                            {body !== null && body !== undefined &&
                                <RichTextRenderer
                                    contentRaw={body.raw}
                                    references={relatedAssets}
                                />
                            }
                        </div>
                        <Footer />
                    </div>
                </MainLayout>
            </ContentLayout>
        </Layout>
    )
}

export default BlogTemplate

export const Head: HeadFC = (props) => {
    const {data, pageContext} = props as CustomPageProps
    const {contentfulBlogPost} = data
    const {
        title,
        summary,
        image
    } = contentfulBlogPost;
    const url = image !== null && image !== undefined ? image.url : ''


    return(
        <>
          <SEO
              title={`${title} | Nelkit Chavez Blog`}
              description={summary}
              image={url}
              locale={pageContext.language}
          ></SEO>
          <body className="bg-gray-900 font-lato" onScroll={this} />
        </>
    )
}


export const query = graphql`
query ($language: String!, $slug: String!) {
   allContentfulAbout(filter: { node_locale: { eq: $language } }) {
    edges {
      node {
        title
        summary
        headline1
        headline2
        email
        description {
          raw      
        }
        resumeEn {
          url
        }
        resumeEs {
          url
        }
      }
    }
  }
  contentfulBlogPost(
    slug: {eq: $slug},
    node_locale: {eq: $language}
  ) {
    title
    summary
    body{
      raw
    }
    slug
    image {
      url
      title
    }
    relatedAssets {
      title
      description
      url
      contentful_id
    }
    date(locale: $language, fromNow: true)
  }
  allContentfulBlogPost(
    sort: {date: DESC}
    filter: { node_locale: { eq: $language } }
    limit: 4
  ) {
    edges {
      node {
        title
        summary
        slug
        image {
          url
          title
          resize(width: 300, format: JPG) {
            src
          }
        }
        date(locale: $language, fromNow: true)
        node_locale
      }
    }
  }
  locales: allLocale(filter: { language: { eq: $language } }) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
}
`;
