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
    headline1: string,
    headline2: string,
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


type AllContentfulObject = {
    edges: []
}

type PageData = {
    allContentfulAbout: AllContentfulObject
    allContentfulExperience: AllContentfulObject
    allContentfulProject: AllContentfulObject
}