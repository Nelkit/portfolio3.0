import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/hero'
import ContentIndex from "../components/content-index";
import {graphql} from "gatsby";
import {useEffect} from "react";

const IndexPage: React.FC<PageProps> = ({data}) => {
      useEffect(()=>{
            console.log(data)
      })

      return (
        <Layout >
            <Hero data={data as PageData} />
            <ContentIndex data={data as PageData} />
        </Layout>
      )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Nelkit Chavez | Software Engineer</title>
    <body className="bg-gray-900 font-lato" onScroll={this} />
  </>
)

export const query = graphql`
query ($language: String!) {
  allContentfulAbout(filter: { node_locale: { eq: $language } }) {
    edges {
      node {
        title
        headline
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
  allContentfulExperience(
    sort: {orderNumber: ASC}
    filter: { node_locale: { eq: $language } }  
  ) {
    edges {
      node {
        id
        title
        company
        employmentType
        startDate
        endDate
        description {
          raw
        }
        tags {
          title
        }
        hyperlink
      }
    }
  }
  allContentfulProject(
    sort: {orderNumber: ASC}
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

