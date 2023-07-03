import * as React from "react"
import {useEffect} from "react"
import type {HeadFC, PageProps} from "gatsby"
import {graphql} from "gatsby";
import {SEO} from "../components/seo";
import Layout from "../components/layouts/layout";
import BackLink from "../components/controls/back-link";
import {Trans} from "gatsby-plugin-react-i18next";
import LgProjectItem from "../components/items/lg-project-item";
import Footer from "../components/footer";
import ContentLayout from "../components/layouts/content-layout";
import MainLayout from "../components/layouts/main-layout";
import {ColSpanVariant, ColVariant} from "../utils/enums";
import {CustomPageProps} from "../custom";
import {t} from "i18next";
import LgBlogItem from "../components/items/lg-blog-item";

const BlogPage: React.FC<PageProps> = (props) => {
    const {data } = props as CustomPageProps
    const { allContentfulBlogPost} = data;

      useEffect(()=>{
            //console.log(data)
      })

      return (
        <Layout >
            <ContentLayout cols={ColVariant.COLS1}>
                <MainLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <section className={'mt-16 lg:mt-10 scroll-mt-20 group/section'}>
                        <div className={`
                                sticky lg:relative top-14 z-20 -mx-6 mb-2 w-screen bg-gray-900/0 
                                px-5 py-2 backdrop-blur !overflow-visible lg:sr-only 
                                lg:w-full lg:h-fit lg:top-0
                                lg:px-0 lg:py-0 lg:mb-4  md:-mx-12
                        `}>
                            <BackLink>
                                <Trans>Go Back</Trans>
                            </BackLink>
                            <h1 className={'text-2xl md:text-4xl font-bold text-white'}>
                                <Trans>Personal Blog</Trans>
                            </h1>
                        </div>
                        {allContentfulBlogPost.edges.map((post: any, index: number) =>(
                            <LgBlogItem
                                key={index}
                                post={post}
                            />
                        ))}
                    </section>
                    <Footer />
                </MainLayout>
            </ContentLayout>
        </Layout>
      )
}

export default BlogPage

export const Head: HeadFC = (props) => {
    const {pageContext} = props as CustomPageProps
    useEffect(()=>{
           // console.log(data)
    }, [])

    return(
        <>
            <SEO title={`Nelkit Chavez | Blog`} locale={pageContext.language}></SEO>
            <body className="bg-gray-900 font-lato" />
        </>
    )
}


export const query = graphql`
query ($language: String!) {
  locales: allLocale(filter: { language: { eq: $language } }) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulBlogPost(
    sort: {date: DESC}
    filter: { node_locale: { eq: $language } }
    limit: 1000
  ) {
    edges {
      node {
        title
        summary
        slug
        image {
          url
          title
        }
        date(locale: $language, fromNow: true)
      }
    }
  }
}
`;