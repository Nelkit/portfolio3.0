import * as React from "react"
import {MutableRefObject, useEffect, useRef, useState} from "react"
import type {HeadFC, PageProps} from "gatsby"
import {graphql} from "gatsby";
import {SEO} from "../components/seo";
import Layout from "../components/layouts/layout";
import ContentLayout from "../components/layouts/content-layout";
import MenuItem from "../components/controls/menu-item";
import {Trans, useI18next} from "gatsby-plugin-react-i18next";
import ContactLinks from "../components/commons/contact-links";
import RichTextRenderer from "../components/controls/rich-text-renderer";
import ExperienceItem from "../components/items/experience-item";
import ViewMoreLink from "../components/controls/view-more-link";
import MdProjectItem from "../components/items/md-project-item";
import Footer from "../components/footer";
import DataUtils from "../utils/data-utils";
import AsideLayout from "../components/layouts/aside-layout";
import MainLayout from "../components/layouts/main-layout";
import Hero from "../components/commons/hero";
import {ColSpanVariant, ColVariant, IndexSection} from "../utils/enums";
import {PageData, CustomPageProps} from "../custom";
import MdBlogItem from "../components/items/md-blog-item";

const IndexPage: React.FC<PageProps> = (props) => {
    const {data, pageContext} = props as CustomPageProps
    const [currentIntersecting, setCurrentIntersecting] = useState("");
    const { language} = useI18next();
    const dataUtils: DataUtils = new  DataUtils()
    const showBlog:boolean = process.env.SHOW_BLOG === 'true'

    const aboutRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>
    const experienceRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>
    const projectsRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>
    const blogRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>

    const {ABOUT,EXPERIENCE,PROJECTS, BLOG} = IndexSection

    const {
        allContentfulAbout,
        allContentfulExperience,
        allContentfulProject,
        allContentfulBlogPost
    } = data;
    const {title, headline2,description, resumeEn, resumeEs} = dataUtils.getAboutInfo(allContentfulAbout);
    const descriptionRaw = description !== null ? description.raw : ''
    const resumeEsUrl = resumeEs !== null && resumeEs !== undefined ? resumeEs.url : ''
    const resumeEnUrl = resumeEn !== null && resumeEn !== undefined ? resumeEn.url : ''

    useEffect(()=>{

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        const sections:Array<MutableRefObject<HTMLElement>> = [aboutRef, experienceRef, projectsRef, blogRef]

        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.target.id===ABOUT){
                    setCurrentIntersecting(entry.target.id)
                }else if (entry.isIntersecting && entry.target.id===EXPERIENCE){
                    setCurrentIntersecting(entry.target.id)
                }else if (entry.isIntersecting && entry.target.id===PROJECTS){
                    setCurrentIntersecting(entry.target.id)
                }else if (entry.isIntersecting && entry.target.id===BLOG){
                    setCurrentIntersecting(entry.target.id)
                }
            },
            observerOptions
        );

        sections.forEach((section:MutableRefObject<HTMLElement>)=>{
            observer.observe(section.current)
        })

        // clean up code
        return () => {
             observer.disconnect()
        };
    },[])

    const goToSection = (name:string)=>{
        if (name===ABOUT){
            aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }else if(name===EXPERIENCE){
            experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }else if(name===PROJECTS){
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }else if(name===BLOG){
            blogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <Layout >
            <Hero data={data as PageData} />
            <ContentLayout cols={ColVariant.COLS2}>
                <AsideLayout colSpan={ColSpanVariant.COLSPAN1} >
                    <div className={'flex-col justify-start relative z-10 mb-4'}>
                        <h1 className={'text-white text-5xl font-bold relative z-10 hidden md:block'}>Nelkit Chavez</h1>
                        <h2 className={'mt-2 text-white text-3xl font-bold relative z-10 hidden md:block'}>
                            <span className={`
                                relative 
                            `}>
                                {title}
                            </span>
                        </h2>
                        <p className={'mt-2 text-gray-400 text-xl relative z-10'}>
                            {headline2}
                        </p>
                        <nav className={'mt-8'}>
                            <ul className={`
                                text-gray-400
                                text-md 
                                hidden
                                lg:block
                            `}>
                                <li>
                                    <MenuItem handleClick={() => goToSection(ABOUT)} isActive={currentIntersecting===ABOUT}>
                                        <Trans>About</Trans>
                                    </MenuItem>
                                </li>
                                <li>
                                    <MenuItem handleClick={() => goToSection(EXPERIENCE)} isActive={currentIntersecting===EXPERIENCE}>
                                        <Trans>Experience</Trans>
                                    </MenuItem>
                                </li>
                                <li>
                                    <MenuItem handleClick={() => goToSection(PROJECTS)} isActive={currentIntersecting===PROJECTS}>
                                        <Trans>Projects</Trans>
                                    </MenuItem>
                                </li>
                                <li className={`${showBlog ? '' : 'hidden'}`}>
                                    <MenuItem handleClick={() => goToSection(BLOG)} isActive={currentIntersecting===BLOG}>
                                        <Trans>Blog</Trans>
                                    </MenuItem>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ContactLinks />
                </AsideLayout>
                <MainLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <section id={ABOUT} ref={aboutRef} >
                        <RichTextRenderer contentRaw={descriptionRaw} />
                    </section>
                    <section id={EXPERIENCE} ref={experienceRef} className={'mt-10 lg:mt-20 scroll-mt-20 group/section'}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -ml-4 mb-2 w-screen bg-gray-900/0 
                            px-4 py-2 backdrop-blur lg:sr-only 
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 lg:mb-4  md:-ml-8
                        `}>
                            <h3 className={'text-2xl font-bold text-white'}>
                                <Trans>Experience</Trans>
                            </h3>
                        </div>
                        {allContentfulExperience.edges.map((experience: any, index: number) =>(
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                        <ViewMoreLink href={language === 'en' ? resumeEnUrl : resumeEsUrl}>
                            <Trans>View Full Resumé</Trans>
                        </ViewMoreLink>
                    </section>
                    <section id={PROJECTS} ref={projectsRef} className={'mt-10 lg:mt-20 scroll-mt-20 group/section'}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -ml-4 mb-2 w-screen bg-gray-900/0 
                            px-4 py-2 backdrop-blur lg:sr-only 
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 lg:mb-4  md:-ml-8
                        `}>
                            <h3 className={'text-2xl font-bold text-white'}>
                                <Trans>Projects</Trans>
                            </h3>
                        </div>
                        {allContentfulProject.edges.map((project: any, index: number) =>(
                            <MdProjectItem
                                key={index}
                                project={project}
                            />
                        ))}
                        <ViewMoreLink href={'projects'} target={'_self'}>
                            <Trans>View More Projects</Trans>
                        </ViewMoreLink>
                    </section>
                    <section id={BLOG} ref={blogRef} className={`${showBlog ? '' :'hidden'} mt-10 lg:mt-20 scroll-mt-20 group/section`}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -ml-4 mb-2 w-screen bg-gray-900/0 
                            px-4 py-2 backdrop-blur lg:sr-only 
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 lg:mb-4  md:-mx-8
                        `}>
                            <h3 className={'text-2xl font-bold text-white'}>
                                <Trans>Personal Blog</Trans>
                            </h3>
                        </div>
                        <div className={'mb-10'}>
                            {allContentfulBlogPost.edges.map((post: any, index: number) =>(
                                <MdBlogItem
                                    key={index}
                                    post={post}
                                />
                            ))}
                        </div>
                        <ViewMoreLink href={'blog'} target={'_self'}>
                            <Trans>View More Posts</Trans>
                        </ViewMoreLink>
                    </section>
                    <Footer />
                </MainLayout>
            </ContentLayout>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = (props) => {
    const dataUtils: DataUtils = new  DataUtils()
    const {pageContext, data} = props as CustomPageProps
    const {
        allContentfulAbout
    } = data;
    const {title,summary} = dataUtils.getAboutInfo(allContentfulAbout);

    return(
        <>
            <SEO title={`Nelkit Chavez | ${title}`} description={summary} locale={pageContext.language}></SEO>
            <body className="bg-gray-900 font-lato" onScroll={this} />
        </>
    )
}


export const query = graphql`
query ($language: String!) {
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
  allContentfulExperience(
    sort: {orderNumber: ASC}
    filter: { node_locale: { eq: $language } }  
    limit: 5
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
        links{
          title
          href
          icon
        }
      }
    }
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
          resize(width: 1000, format: WEBP) {
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
      }
    }
  }
  allContentfulBlogPost(limit: 2, filter: {node_locale: {eq: $language}}) {
    edges {
      node {
        title
        summary
        slug
        image {
          url
          title
          resize(width: 512, format: WEBP) {
            src
          }
        }
        date(locale: $language, fromNow: true)
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

