declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

type About = {
    title: string,
    headline: string,
    email: string,
    description: {
        raw: string
    },
    resumeEn : {
        url: string
    },
    resumeEs : {
        url: string
    }
}

type Project = {
    node: {
        title: string,
        description: {
            raw: string
        },
        image: {
            url: string
        },
        tags: []
    }
}

type AllContentfulObject = {
    edges: []
}

type PageData = {
    allContentfulAbout: AllContentfulObject
    allContentfulExperience: AllContentfulObject
    allContentfulProject: AllContentfulObject
}