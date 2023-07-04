import {Page} from "gatsby";

declare module "*.png" {
 export default "" as string
}

declare module "*.svg" {
 export default "" as string
}

type About = {
    title: string,
    summary: string,
    headline1: string,
    headline2: string,
    email: string,
    description: {
        raw: string
        references: {
            contentful_id: string,
            url: string,
        }
    },
    resumeEn : {
        url: string
    },
    resumeEs : {
        url: string
    }
}

type RelatedAssets = {
    url: string
    title: string
    description: string
    contentful_id: string
}


type AllContentfulObject = {
    edges: []
}

type ContentfulProject = {
    title: string,
    summary:string,
    description: {
        raw: string
    }
    image: {
        url: string
    }
    tags: []
    links: []
    year: number
    relatedAssets: [RelatedAssets],
    madeAt: string
}

type ContentfulBlogPost = {
    title: string,
    summary:string,
    body: {
        raw: string
    }
    image: {
        url: string,
        title: string
    }
    tags: []
    relatedAssets: [RelatedAssets],
    date: string
}

type PageData = {
    allContentfulAbout: AllContentfulObject
    allContentfulExperience: AllContentfulObject
    allContentfulProject: AllContentfulObject
    allContentfulBlogPost: AllContentfulObject
    contentfulProject: ContentfulProject
    contentfulBlogPost: ContentfulBlogPost
}

type CustomPageProps = {
    data: PageData,
    pageContext: {
        language: string
    }
}
