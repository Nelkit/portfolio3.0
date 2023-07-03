import * as React from "react"
import {useEffect} from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import RichTextRenderer from "../components/controls/rich-text-renderer";
import Tag from "../components/controls/tag";
import IconLink from "../components/controls/icon-link";
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

const ProjectTemplate: React.FC<PageProps> = (props) => {
    const { data } = props as CustomPageProps
    const dataUtils: DataUtils = new  DataUtils()
    const {contentfulProject, allContentfulAbout, allContentfulProject} = data
    const {
        title,
        description,
        image,
        tags,
        year,
        links,
        madeAt,
        relatedAssets
    } = contentfulProject;
    const url = image !== null && image !== undefined ? image.url : ''
    const {title: aboutTitle ,summary} = dataUtils.getAboutInfo(allContentfulAbout);


    useEffect(()=>{
        console.log(data)
    },[])

    return (
        <Layout>
            <ContentLayout cols={ColVariant.COLS3}>
                <AsideLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <div className={'mt-16 md:mt-0'}>
                        <BackLink>
                           <Trans>Go Back</Trans>
                        </BackLink>
                        <div className={'w-full hidden lg:block pr-10' }>
                            <h1 className={'text-white mt-6 text-2xl font-bold '}>Nelkit Chavez</h1>
                            <h2 className={'text-gray-400 text-xl'}>
                                {aboutTitle}
                            </h2>
                            <p className={'text-gray-400 mb-4 text-sm relative w-full'}>
                                {summary}
                            </p>
                            <ContactLinks/>
                        </div>
                        <div className={'w-full hidden lg:block mt-16 pr-10' }>
                            <h1 className={'text-white text-xl font-bold mb-2  '}>Otros Proyectos</h1>
                            {allContentfulProject.edges.map((project: any, index: number) =>(
                                <SmProjectItem
                                    key={index}
                                    project={project}
                                    titleParentProject={title}
                                />
                            ))}
                        </div>
                    </div>
                </AsideLayout>
                <MainLayout colSpan={ColSpanVariant.COLSPAN2}>
                    <BorderedImage src={url} />
                    <div className={'flex flex-wrap items-center mt-2 md:mt-4 content-center col-span-10 md:col-span-7 lg:col-span-7'}>
                        {tags.map((tag: any, key: number)=>(
                            <Tag href={'#'} key={key}>
                                {tag.title}
                            </Tag>
                        ))}
                    </div>
                    <div className={'flex w-full flex-wrap col-span-8 mt-2'}>
                        {links.map((link: any, key: number)=>(
                            <IconLink href={link.href} icon={link.icon} key={key}>
                                {link.title}
                            </IconLink>
                        ))}
                    </div>
                    <div className={'mt-3'}>
                        <h3 className={'text-lg font-bold p-0 mt-3 md:mt-0'}>{year}{madeAt && ` · ${madeAt}`}</h3>
                        <h1 className={'text-3xl font-bold text-white mb-4'}>{title}</h1>
                        {description !== null && description !== undefined &&
                            <RichTextRenderer
                                contentRaw={description.raw}
                                references={relatedAssets}
                            />
                        }
                    </div>
                    <Footer />
                </MainLayout>
            </ContentLayout>
        </Layout>
    )
}

export default ProjectTemplate

export const Head: HeadFC = (props) => {
    const {data, pageContext} = props as CustomPageProps
    const {contentfulProject} = data
    const {
        title,
        summary,
        image
    } = contentfulProject;
    const url = image !== null && image !== undefined ? image.url : ''


    return(
        <>
          <SEO
              title={`Nelkit Chavez | Project: ${title}`}
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
  contentfulProject(
    slug: {eq: $slug},
    node_locale: {eq: $language}
  ) {
    title
    summary
    slug
    description{
      raw
    }
    image {
      url
    }
    tags {
      title
    }
    links{
      title
      href
      icon
    }
    relatedAssets {
      url
      contentful_id
    }
    madeAt
    year
  }
  allContentfulProject(
    sort: {orderNumber: ASC}
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
