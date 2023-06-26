import * as React from "react";
import LinkButton from "./link-button";
import ExperienceItem from "./experience-item";
import ProjectItem from "./project-item";
import Footer from "./footer";
import {useEffect, useRef, useState} from "react";
import Instagram from "./icons/instagram";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";

const Content = () => {
    const [gradient, setGradient] = useState('radial-gradient(at 0% 100%, rgba(51, 65, 85,  45%), transparent 80%)');

    useEffect(() => {
        const mouseMove = (evt: any):void => {
            const windowWidth:number = window.innerWidth;
            const windowHeight:number = window.innerHeight;

            const currentPositionX:number = evt.screenX
            const currentPositionY:number = evt.screenY

            const mouseXpercentage:number = Math.round(currentPositionX / windowWidth * 100);
            const mouseYpercentage:number = Math.round((currentPositionY-120) / windowHeight * 100);

            const radialGradient:string = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(51, 65, 85,  60%), transparent 60%)`
            setGradient(radialGradient)
        };
        // clean up code
        window.removeEventListener('mousemove', mouseMove);
        window.addEventListener('mousemove', mouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    return(
        <div className={`snap-align-none w-full flex items-center justify-center`} style={{'background': gradient}}>
            <section className={'w-full max-w-5xl relative grid grid-cols-2 gap-1'} >
                <aside className={'text-white box-border pt-20 pb-20 lg:top-0 lg:sticky lg:flex lg:max-h-screen lg:flex-col lg:justify-between '}>
                    <div className={'flex-col justify-start relative z-10'}>
                        <h1 className={'text-white text-5xl font-bold relative z-10'}>Nelkit Chavez</h1>
                        <h2 className={'mt-2 text-white text-3xl font-bold relative z-10'}>
                            <span className={`
                                relative 
                            `}>
                                Software Engineer
                            </span>
                        </h2>
                        <p className={'mt-2 text-gray-400 text-xl relative z-10'}>
                            iOS Engineer | Swift Developer | Tech Enthusiast.
                        </p>
                        <nav className={'mt-8'}>
                            <ul className={`
                            font-bold 
                            text-md 
                            [&>li]:mt-2
                            [&>li]:transition-all
                            [&>li]:duration-400
                            [&>li]:rounded-md
                            [&>li]:cursor-pointer
                            [&>li]:w-fit
                            [&>li]:py-1 
                            [&>li]:px-2 
                            [&>li]:border-t-[0.1px]
                            [&>li]:border-t-transparent
                            [&>li:hover]:backdrop-blur-md
                            [&>li:hover]:bg-white
                            [&>li:hover]:bg-opacity-10
                            [&>li:hover]:border-opacity-50
                            [&>li:hover]:border-t-gray-100
                            [&>li:hover]:shadow-gray-900/30
                            [&>li:hover]:hover:shadow-sm 
                        `}>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#experience">Experience</a>
                                </li>
                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={'w-full flex justify-start [&>a]:mr-6 [&>a]:text-gray-400 [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:text-white '}>
                        <a href="#">
                            <Instagram width={'w-6'} height={'h-6'}/>
                        </a>
                        <a href="#">
                            <Github width={'w-6'} height={'h-6'}/>
                        </a>
                        <a href="#">
                            <LinkedIn width={'w-6'} height={'h-6'}/>
                        </a>
                    </div>
                </aside>
                <main className={'container text-gray-400 pt-20'}>
                    <section id={'about'}>
                        <article className={'text-md'}>
                            <p>
                                I am an experienced Mobile Developer with over six years of expertise in creating mobile applications using native languages such as Swift and hybrid solutions such as Flutter and React Native.
                            </p>
                            <br/>
                            <p>
                                My proficiency extends to working with APIs and third-party libraries. I possess a skill set that enables me to design custom UI, utilising modern techniques such as Storyboards, UIKit, Auto Layout, and Swift UI, in accordance with design specifications. Additionally, I am well-versed in Unit Testing and UI Testing using XCTest framework, and have a thorough knowledge of integrating RESTful APIs and Reactive programming.
                            </p>
                            <br/>
                            <p>
                                I also possess expertise in Instruments and LLDB, profiling & optimisation. My passion for innovation and new technologies, and my eagerness to learn something new every day, drives me to be an invaluable part of a team that offers creative and innovative solutions.
                            </p>
                        </article>
                    </section>
                    <section id={'experience'} className={'mt-20'}>
                        <h3 className={'text-2xl font-bold text-white mb-4'}>Experience</h3>

                        <ExperienceItem
                            position={'Sr Mobile Apps Engineer'}
                            company={'Sumadi'}
                            jobType={'Full-time'}
                            period={'Sep 2021 - Sep 2022'}
                            description={'As a key member of the development team, I played an important role in designing and building the mobile app using the latest version of Flutter. This app represented a significant milestone for Sumadi, as it marked the company\'s debut in the mobile market, offering our customers a comprehensive and user-friendly solution.'}
                        />

                        <ExperienceItem
                            position={'Senior iOS Developer'}
                            company={'Ryte'}
                            jobType={'Full-time'}
                            period={'May 2019 - Oct 2021'}
                            description={'I played a key role in redesigning the entire application using the latest version of Swift. This led to a 90% improvement in the overall user experience, as we were able to significantly reduce the number of bugs reported by clients. Additionally, the performance of the application was boosted by 40%.'}
                        />

                        <ExperienceItem
                            position={'Mobile Developer'}
                            company={'Locstatt'}
                            jobType={'Full-time'}
                            period={'Apr 2017 - May 2019'}
                            description={'As a part of my responsibilities, I implemented various tools such as Crashlytics, improved the UI/UX, and integrated new modules into existing apps, which contributed to a significant 40% reduction in bugs and crashes reported by clients.'}
                        />

                        <ExperienceItem
                            position={'Mobile and Web Developer'}
                            company={'Crayon Star'}
                            jobType={'Full-time'}
                            period={'Jan 2016 - Apr 2017'}
                            description={'I have contributed to over 12 web and mobile development projects, utilising hybrid technologies such as Ionic to expedite app development by up to 50%.'}
                        />
                    </section>
                    <section id={'projects'} className={'mt-20'}>
                        <h3 className={'text-2xl font-bold text-white mb-4'}>Projects</h3>
                        <ProjectItem
                            title={'Mobile and Web Developer'}
                            description={'I have contributed to over 12 web and mobile development projects, utilising hybrid technologies such as Ionic to expedite app development by up to 50%.'}
                        />

                        <ProjectItem
                            title={'Mobile and Web Developer'}
                            description={'I have contributed to over 12 web and mobile development projects, utilising hybrid technologies such as Ionic to expedite app development by up to 50%.'}
                        />

                        <ProjectItem
                            title={'Mobile and Web Developer'}
                            description={'I have contributed to over 12 web and mobile development projects, utilising hybrid technologies such as Ionic to expedite app development by up to 50%.'}
                        />

                        <ProjectItem
                            title={'Mobile and Web Developer'}
                            description={'I have contributed to over 12 web and mobile development projects, utilising hybrid technologies such as Ionic to expedite app development by up to 50%.'}
                        />
                    </section>
                    <Footer />
                </main>
            </section>
        </div>
    )
}

export default Content