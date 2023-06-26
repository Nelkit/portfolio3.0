import * as React from "react"
import LinkButton from "./link-button";
import {useEffect, useRef, useState} from "react";
import css from "../images/css.logo.png"
import python from "../images/python.logo.png"
import js from "../images/js.logo.png"
import html from "../images/html.logo.png"
import swift from "../images/swift.logo.png"
import xcode from "../images/xcode.logo.png"
import laptop from "../images/laptop.png"


const Hero =() => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.90
            }
        );

        // @ts-ignore
        observer.observe(ref.current);

        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 4000);
        return () => {
            observer.disconnect();
            clearInterval(interval);
        }
    }, []);

    return (
        <div className={'snap-align-none'} ref={ref}>
            <section className={`w-screen 
                h-screen 
                bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
                ${seconds % 2 == 0 ? 'from-violet-900' : 'from-cyan-900'}
                via-transparent to-transparent
                flex 
                justify-center 
                relative 
                transition-all
                duration-700
            `}>
                {/*Labels*/}
                <div className={'flex-col justify-center relative z-10 mt-48 text-center'}>
                    <h1 className={'text-white text-6xl font-bold relative z-10'}>Nelkit Chavez</h1>
                    <h2 className={'text-white text-3xl font-bold relative z-10'}>
                        <span className={`
                            relative 
                            before:transition-all before:duration-700 before:text-transparent before:bg-clip-text 
                            before:content-["Software"] before:absolute before:top-0 before:left-0 
                            before:bg-gradient-to-bl before:from-custom-blue before:to-custom-cyan
                            ${seconds % 2 == 0 ? 'before:opacity-0' : 'before:opacity-100'}
                            after:transition-all after:duration-700 after:text-transparent after:bg-clip-text 
                            after:content-["Engineer"] after:absolute after:top-0 after:right-0 
                            after:bg-gradient-to-bl after:from-custom-red after:to-custom-yellow
                            ${seconds % 2 == 0 ? 'after:opacity-100' : 'after:opacity-0'}
                        `}>
                            Software Engineer
                        </span>
                    </h2>
                    <p className={'text-gray-400 text-xl relative z-10'}>+7 years of experience</p>
                    <div className={'mt-8'}>
                        <LinkButton href={'#'}
                        >
                            Get In Touch
                        </LinkButton>
                    </div>
                </div>
                {/*Laptop Animation*/}
                <div className={'absolute left-1/2 transform -translate-x-1/2 -bottom-10'}>
                    <div className={`
                            p-4 absolute z-10 top-0 left-0
                            flex flex-col items-start
                            h-full w-1/2 
                           animate-floating`
                    }>
                        <img className={`transition-all duration-700 w-[60px] 
                            ${ isIntersecting ? 
                                'translate-y-0 translate-x-24' : 
                                'translate-y-0 translate-x-20' }
                            `}
                             src={css}
                             alt=""/>
                        <img className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                'translate-x-52 -translate-y-10 scale-150' : 
                                'translate-y-0 translate-x-40 scale-1'}
                            `}
                             src={python}
                             alt=""/>
                        <img className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                'translate-x-10' : 
                                'translate-x-20'}
                            `}
                             src={js}
                             alt=""/>
                    </div>
                    <img src={laptop} className={'max-w-none relative'} alt="" width={500} />
                    <div className={`
                            flex flex-col items-end
                            p-4 absolute z-10 top-0 right-0
                            h-full w-1/2 translate-y-10 
                            animate-floating`
                    }>
                        <img className={`transition-all duration-700  w-[60px]
                            ${ isIntersecting ? 
                                'translate-y-2 -translate-x-24' : 
                                'translate-y-0 -translate-x-20'}
                            `}
                             src={html}
                             alt=""/>
                        <img className={`transition-all duration-700 w-[60px] 
                            ${ isIntersecting ? 
                                'translate-y-16 -translate-x-52 scale-125' : 
                                'translate-y-0 -translate-x-40 scale-1'}
                            `}
                             src={swift}
                             alt=""/>
                        <img className={`transition-all duration-700 w-[60px]
                            ${ isIntersecting ? 
                                '-translate-x-10 scale-125': 
                                'translate-y-0 -translate-x-20 scale-1'}
                            `}
                             src={xcode}
                             alt=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero