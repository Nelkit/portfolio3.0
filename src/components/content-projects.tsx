import * as React from "react";
import Footer from "./footer";
import {Trans, useI18next} from "gatsby-plugin-react-i18next";
import ProjectRow from "./items/project-row";
import ViewMoreLink from "./controls/view-more-link";
import BackLink from "./controls/back-link";

interface Props {
    data:PageData
}

const ContentProjects = ({data}: Props) => {
    const { allContentfulProject} = data as PageData;

    return(
        <div className={`snap-align-none w-full flex items-center justify-center`} >
            <section className={'w-full max-w-5xl relative grid gap-1 px-4 md:px-12 lg:px-4 xl:px-0 grid-cols-1  '} >
                <main className={'text-gray-400 lg:pt-20'}>
                    <section className={'mt-16 lg:mt-10 scroll-mt-20 group/section'}>
                        <div className={`
                            sticky lg:relative top-14 z-20 -ml-4 md:-ml-12 lg:ml-0 mb-2 w-screen bg-gray-900/50 
                            px-6 py-2 backdrop-blur
                            lg:w-full lg:h-fit lg:top-0
                            lg:px-0 lg:py-0 md:mb-6 lg:mb-12  
                        `}>
                            <BackLink>
                                <Trans>Go Back</Trans>
                            </BackLink>
                            <h1 className={'text-2xl md:text-4xl font-bold text-white'}>
                                <Trans>Projects</Trans>
                            </h1>
                        </div>
                        {allContentfulProject.edges.map((project: any, index: number) =>(
                            <ProjectRow
                                key={index}
                                project={project}
                            />
                        ))}
                    </section>
                    <Footer />
                </main>
            </section>
        </div>
    )
}

export default ContentProjects