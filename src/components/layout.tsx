import * as React from "react"
import Header from "./header";
import {useEffect, useRef, useState} from "react";

interface Props{
    children:any
}

const Layout = ({children}: Props) => {
     const [showBgHeader, setShowBgHeader] = useState(false);

     useEffect(() => {
        const onScroll = ():void => {
            const {scrollY: number} = window

            setShowBgHeader(scrollY>100)
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Header showBg={showBgHeader}/>
            <main className={'snap-y snap-align-none relative w-full h-screen z-0'}>
                {children}
            </main>
        </>
    )
}

export default Layout