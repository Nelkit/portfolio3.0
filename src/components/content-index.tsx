import * as React from "react";
import Footer from "./footer";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import Instagram from "./icons/instagram";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import {Trans, useI18next} from "gatsby-plugin-react-i18next";
import ExperienceItem from "./items/experience-item";
import ProjectItem from "./items/project-item";
import MenuItem from "./controls/menu-item";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
import DataUtils from './../utils/data-utils';
import TextLink from "./controls/text-link";
import ViewMoreLink from "./controls/view-more-link";

interface Props {
    data:PageData
}

const ContentIndex = ({data}: Props) => {
    const [currentIntersecting, setCurrentIntersecting] = useState("");
    const [gradient, setGradient] = useState('radial-gradient(at 0% 100%, rgba(51, 65, 85,  45%), transparent 80%)');
    const { language} = useI18next();

    const aboutRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>
    const experienceRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>
    const projectsRef:MutableRefObject<HTMLElement> = useRef() as MutableRefObject<HTMLElement>

    const ABOUT_NAME:string = 'about'
    const EXPERIENCE_NAME:string = 'experience'
    const PROJECTS_NAME:string = 'projects'
    const dataUtils: DataUtils = new  DataUtils()

    useEffect(() => {
        const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.5
        }
        const sections:Array<MutableRefObject<HTMLElement>> = [aboutRef, experienceRef, projectsRef]

        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.target.id===ABOUT_NAME){
                    setCurrentIntersecting(entry.target.id)
                }else if (entry.isIntersecting && entry.target.id===EXPERIENCE_NAME){
                    setCurrentIntersecting(entry.target.id)
                }else if (entry.isIntersecting && entry.target.id===PROJECTS_NAME){
                    setCurrentIntersecting(entry.target.id)
                }
            },
            observerOptions
        );

        sections.forEach((section:MutableRefObject<HTMLElement>)=>{
            observer.observe(section.current)
        })

        // clean up code
        window.removeEventListener('mousemove', mouseMove);
        window.addEventListener('mousemove', mouseMove, { passive: true });
        return () => {
             window.removeEventListener('mousemove', mouseMove)
             observer.disconnect()
        };
    }, []);

    const mouseMove = (evt: any):void => {
        const {innerWidth, innerHeight} = window
        const {screenX, screenY} = evt

        const mouseXpercentage:number = Math.round(screenX / innerWidth * 100);
        const mouseYpercentage:number = Math.round((screenY-120) / innerHeight * 100);

        const radialGradient:string = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(51, 65, 85,  60%), transparent 60%)`
        setGradient(radialGradient)
    };

    const goToSection = (name:string)=>{
        if (name===ABOUT_NAME){
            aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }else if(name===EXPERIENCE_NAME){
            experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }else if(name===PROJECTS_NAME){
            projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }


    const {allContentfulAbout, allContentfulExperience, allContentfulProject} = data as PageData;
    const {title, headline2,description, resumeEn, resumeEs} = dataUtils.getAboutInfo(allContentfulAbout);
    const descriptionRaw = description !== null ? description.raw : ''
    const resumeEsUrl = resumeEs !== null && resumeEs !== undefined ? resumeEs.url : ''
    const resumeEnUrl = resumeEn !== null && resumeEn !== undefined ? resumeEn.url : ''

    return(
        <div className={`snap-align-none w-full flex items-center justify-center`} style={{'background': gradient}}>
            <section className={'w-full max-w-5xl relative grid gap-1 px-4 md:px-12 lg:px-4 xl:px-0 sm:grid-cols-1 lg:grid-cols-2  '} >
                <aside className={'text-white box-border pt-6  md:pt-20  pb-5 lg:pb-20 lg:top-0 lg:sticky lg:flex lg:max-h-screen lg:flex-col lg:justify-between '}>
                    <div className={'flex-col justify-start relative z-10'}>
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
                                    <MenuItem handleClick={() => goToSection(ABOUT_NAME)} isActive={currentIntersecting===ABOUT_NAME}>
                                        <Trans>About</Trans>
                                    </MenuItem>
                                </li>
                                <li>
                                    <MenuItem handleClick={() => goToSection(EXPERIENCE_NAME)} isActive={currentIntersecting===EXPERIENCE_NAME}>
                                        <Trans>Experience</Trans>
                                    </MenuItem>
                                </li>
                                <li>
                                    <MenuItem handleClick={() => goToSection(PROJECTS_NAME)} isActive={currentIntersecting===PROJECTS_NAME}>
                                        <Trans>Projects</Trans>
                                    </MenuItem>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`
                        w-full flex justify-start [&>a]:mr-6 [&>a]:text-gray-400 
                        [&>a]:transition-all [&>a]:duration-500 [&>a:hover]:text-white
                        [&>a:hover]:shadow-md [&>a:hover]:bg-opacity-20
                    `}>
                        <a href="https://www.instagram.com/nelkit792/" target="_blank">
                            <Instagram width={'w-6'} height={'h-6'}/>
                        </a>
                        <a href="https://github.com/nelkit" target="_blank">
                            <Github width={'w-6'} height={'h-6'}/>
                        </a>
                        <a href="https://www.linkedin.com/in/nelkit/" target="_blank">
                            <LinkedIn width={'w-6'} height={'h-6'}/>
                        </a>
                    </div>
                </aside>
                <main className={'text-gray-400 lg:pt-20'}>
                    <section id={ABOUT_NAME} ref={aboutRef} >
                        <article
                            className={'text-md [&>p>a]:text-white [&>p>a:hover]:text-custom-cyan [&>p>a:hover]:underline'}
                            dangerouslySetInnerHTML={{__html: documentToHtmlString(JSON.parse(descriptionRaw))}}
                        >
                        </article>
                    </section>
                    <section id={EXPERIENCE_NAME} ref={experienceRef} className={'mt-10 lg:mt-20 scroll-mt-20 group/section'}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -mx-6 mb-2 w-screen bg-gray-900/0 
                            px-6 py-2 backdrop-blur lg:sr-only 
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 lg:mb-4  md:-mx-12
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
                    <section id={PROJECTS_NAME} ref={projectsRef} className={'mt-10 lg:mt-20 scroll-mt-20 group/section'}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -mx-6 mb-2 w-screen bg-gray-900/0 
                            px-6 py-2 backdrop-blur lg:sr-only 
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 lg:mb-4  md:-mx-12
                        `}>
                            <h3 className={'text-2xl font-bold text-white'}>
                                <Trans>Projects</Trans>
                            </h3>
                        </div>
                        {allContentfulProject.edges.map((project: any, index: number) =>(
                            <ProjectItem
                                key={index}
                                project={project}
                            />
                        ))}
                        <ViewMoreLink href={'projects'}>
                            <Trans>View More Projects</Trans>
                        </ViewMoreLink>
                    </section>
                    <Footer />
                </main>
            </section>
        </div>
    )
}

export default ContentIndex