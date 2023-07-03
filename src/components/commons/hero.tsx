import * as React from "react"
import {MutableRefObject, useEffect, useRef, useState} from "react";
// @ts-ignore
import laptop from "../../images/laptop.svg"
import {Trans} from 'gatsby-plugin-react-i18next';
import {StaticImage} from "gatsby-plugin-image";
import DataUtils from "../../utils/data-utils";
import ButtonLink from "../controls/button-link";
import {PageData} from "../../custom";

interface Props {
    data:PageData
}

const Hero =({data}: Props) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const containerRef: MutableRefObject<HTMLDivElement> = useRef() as MutableRefObject<HTMLDivElement>;
    const {allContentfulAbout} = data;

    const dataUtils: DataUtils = new  DataUtils()

    const term:string = "../../images/term.logo.png"
    const python:string = "../../images/python.logo.png"
    const js:string = "../../images/js.logo.png"
    const reactjs:string = "../../images/reactjs.logo.png"
    const swift:string = "../../images/swift.logo.png"
    const xcode:string = "../../images/xcode.logo.png"
    //const laptop:string = "../images/laptop.png"

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.90
            }
        );

        observer.observe(containerRef.current);

        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 4000);
        return () => {
            observer.disconnect();
            clearInterval(interval);
        }
    }, []);

    const {email, headline1} = dataUtils.getAboutInfo(allContentfulAbout);

    return (
        <div className={'snap-align-none'} ref={containerRef}>
            <section className={`w-screen 
                h-fit md:h-screen 
                bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
                ${seconds % 2 == 0 ? 'from-violet-900' : 'from-cyan-900'}
                via-transparent to-transparent
                flex 
                justify-center 
                relative 
                transition-all
                duration-700
                overflow-hidden
                md:overflow-visible
                lg:overflow-visible
            `}>
                {/*Labels*/}
                <div className={`
                    flex-col justify-center relative z-10 h-full 
                    pt-32 md:pt-44 lg:pt-48 pb-20 md:pb-10 
                    text-center lg:h-fit bg-gray-900/90
                    md:bg-gray-900/0 w-full
                `}>
                    <h1 className={'text-white text-4xl md:text-6xl font-bold relative z-10'}>Nelkit Chavez</h1>
                    <h2 className={'text-white text-2xl md:text-3xl  font-bold relative z-10'}>
                        <span className={`
                            relative 
                        `}>
                            <span className={`
                                transition-all duration-700 text-transparent 
                                bg-clip-text absolute top-0 left-0 bg-gradient-to-bl 
                                from-custom-blue to-custom-cyan
                                ${seconds % 2 == 0 ? 'opacity-0' : 'opacity-100'}
                            `}>
                                <Trans>Software</Trans>
                            </span>
                            <span className={`
                                transition-all duration-700 text-transparent bg-clip-text 
                                content-["Engineer"] absolute top-0 right-0 
                                bg-gradient-to-bl from-custom-red to-custom-yellow
                                ${seconds % 2 == 0 ? 'opacity-100' : 'opacity-0'}
                            `}>
                                <Trans>Engineer</Trans>
                            </span>
                            <Trans>Software Engineer</Trans>
                        </span>
                    </h2>
                    <p className={'text-gray-400 text-md md:text-xl  relative z-10'}>
                        {headline1}
                    </p>
                    <div className={'mt-8'}>
                        <ButtonLink href={`mailto:${email}`}
                        >
                            <Trans>Get In Touch</Trans>
                        </ButtonLink>
                    </div>
                </div>
                {/*Laptop Animation*/}
                <div className={'absolute left-1/2 transform -translate-x-1/2 -bottom-[10rem] md:-bottom-10 lg:-bottom-10 '}>
                    <div className={`
                            p-4 absolute z-10 top-0 left-0
                            flex flex-col items-start
                            h-full w-1/2 
                            md:animate-floating
                    `}>
                        <StaticImage className={`transition-all duration-700 w-[60px] 
                            ${ isIntersecting ? 
                                'translate-y-2 translate-x-24' : 
                                'translate-y-2 translate-x-24 md:translate-y-0 md:translate-x-20' }
                            `}
                             src={reactjs}
                             alt="reactjs"/>
                        <StaticImage className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                'translate-x-52 -translate-y-10 scale-150' : 
                                'translate-x-52 -translate-y-10 scale-150 md:translate-y-0 md:translate-x-40 md:scale-1'}
                            `}
                             src={python}
                             alt="python"/>
                        <StaticImage className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                'translate-x-10' : 
                                'translate-x-10 md:translate-x-20'}
                            `}
                             src={js}
                             alt="js"/>
                    </div>
                    <img src={laptop} className={'max-w-none relative w-[512px] invisible md:visible'}    alt="Laptop"/>
                    <div className={`
                            flex flex-col items-end
                            p-4 absolute z-10 top-0 right-0
                            h-full w-1/2
                            md:animate-floating
                    `}>
                        <StaticImage className={`transition-all duration-700  w-[60px]
                            ${ isIntersecting ? 
                                'translate-y-2 -translate-x-24' : 
                                'translate-y-2 -translate-x-24 md:translate-y-0 md:-translate-x-20'}
                            `}
                             src={term}
                             alt="term"/>
                        <StaticImage className={`transition-all duration-700 w-[60px] 
                            ${ isIntersecting ? 
                                'translate-y-16 -translate-x-52 scale-125' : 
                                'translate-y-16 -translate-x-52 scale-125 md:translate-y-0 md:-translate-x-40 md:scale-1'}
                            `}
                             src={swift}
                             alt="swift"/>
                        <StaticImage className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                '-translate-x-10 scale-125': 
                                '-translate-x-10 scale-125 md:translate-y-0 md:-translate-x-20 md:scale-1'}
                            `}
                             src={xcode}
                             alt="xcode"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero

