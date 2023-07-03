import * as React from "react"
import {useEffect, useRef, useState} from "react";
import {ColVariant} from "../../utils/enums";

interface Props{
    children:any,
    cols?: ColVariant
}

const ContentLayout = ({children, cols = 1}: Props) => {
    const [gradient, setGradient] = useState('radial-gradient(at 0% 100%, rgba(51, 65, 85,  45%), transparent 80%)');
    const GRID_COLS_MAPS: Record<ColVariant, string> = {
        [ColVariant.COLS1]: 'grid-cols-1 lg:grid-cols-1',
        [ColVariant.COLS2]: 'grid-cols-1 lg:grid-cols-2',
        [ColVariant.COLS3]: 'grid-cols-1 lg:grid-cols-3',
        [ColVariant.COLS6]: 'grid-cols-1 lg:grid-cols-6',
        [ColVariant.COLS12]: 'grid-cols-1 lg:grid-cols-12',
    };

    useEffect(() => {

        window.removeEventListener('mousemove', mouseMove);
        window.addEventListener('mousemove', mouseMove, { passive: true });
        return () => {
             window.removeEventListener('mousemove', mouseMove)
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

    return (
        <div className={`snap-align-none w-full flex items-center justify-center`} style={{'background': gradient}}>
            <section className={`w-full max-w-5xl relative grid gap-1 px-4 md:px-12 lg:px-4 xl:px-0 ${GRID_COLS_MAPS[cols]}`} >
                {children}
            </section>
        </div>
    )
}

export default ContentLayout