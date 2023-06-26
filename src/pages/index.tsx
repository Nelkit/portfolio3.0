import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from '../components/layout'
import Hero from '../components/hero'
import Content from "../components/content";
import {useState} from "react";


const IndexPage: React.FC<PageProps> = () => {

      return (
        <Layout >
            <Hero />
            <Content />
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
