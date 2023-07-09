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
import DataUtils from "../utils/data-utils";

const ProjectsPage: React.FC<PageProps> = (props) => {
    const {data } = props as CustomPageProps
    const { allContentfulProject} = data;


    return (
        <Layout >
            <ContentLayout cols={ColVariant.COLS1}>
                <MainLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <section className={'mt-16 lg:mt-10 scroll-mt-20 group/section'}>
                        <div className={`
                                sticky lg:relative top-14 z-20 -ml-4 mb-2 w-screen bg-gray-900/0 
                                px-4 py-2 backdrop-blur !overflow-visible lg:sr-only 
                                lg:w-full lg:h-fit lg:top-0
                                lg:px-0 lg:py-0 lg:mb-4  md:-ml-8
                                flex md:flex-col items-end md:items-start justify-start
                        `}>
                            <BackLink>
                                <Trans>Go Back</Trans>
                            </BackLink>
                            <h1 className={'text-2xl ml-2 md:ml-0 mt-0 md:mt-4 md:text-4xl font-bold text-white'}>
                                <Trans>Projects</Trans>
                            </h1>
                        </div>
                        {allContentfulProject.edges.map((project: any, index: number) =>(
                            <LgProjectItem
                                key={index}
                                project={project}
                            />
                        ))}
                    </section>
                    <Footer />
                </MainLayout>
            </ContentLayout>
        </Layout>
    )
}

export default ProjectsPage

export const Head: HeadFC = (props) => {
    const dataUtils: DataUtils = new  DataUtils()
    const {pageContext, data} = props as CustomPageProps
    const {
        allContentfulAbout
    } = data;
    const {summary} = dataUtils.getAboutInfo(allContentfulAbout);

    return(
        <>
            <SEO title={'Nelkit Chavez | Projects'} locale={pageContext.language} description={summary} ></SEO>
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
  allContentfulAbout(filter: { node_locale: { eq: $language } }) {
    edges {
      node {
        title
        summary
      }
    }
  }
  allContentfulProject(
    sort: {year: DESC}
    filter: { node_locale: { eq: $language } }
    limit: 1000
  ) {
    edges {
      node {
        title
        summary
        slug
        madeAt
        image {
          url
          title
          resize(width: 800, format: JPG) {
            src
          }
        }
        tags {
          title
        }
        hyperlink
        links{
          title
          href
          icon
        }
        year
        node_locale
      }
    }
  }
}
`;