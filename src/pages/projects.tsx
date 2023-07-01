import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/hero'
import ContentIndex from "../components/content-index";
import {graphql} from "gatsby";
import {useEffect} from "react";
import ContentProjects from "../components/content-projects";
import {SEO} from "../components/seo";

const ProjectsPage: React.FC<PageProps> = ({data}) => {
      useEffect(()=>{
            //console.log(data)
      })

      return (
        <Layout >
            <ContentProjects data={data as PageData} />
        </Layout>
      )
}

export default ProjectsPage

export const Head: HeadFC = () => {
      useEffect(()=>{
           // console.log(data)
      })

    return(
        <>
            <SEO title={'Nelkit Chavez | Projects'} ></SEO>
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
  allContentfulProject(
    sort: {year: DESC}
    filter: { node_locale: { eq: $language } }
  ) {
    edges {
      node {
        id
        title
        description {
          raw
        }
        image {
          url
        }
        tags {
          title
        }
        hyperlink
        year
        links{
          title
          href
          icon
        }
      }
    }
  }
}
`;