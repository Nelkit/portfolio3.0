import * as React from "react"
import {ColSpanVariant} from '../../utils/enums'

interface Props{
    children:any
    colSpan?:ColSpanVariant
}

const AsideLayout = ({children, colSpan = 1}: Props) => {
    const COLSPAN_MAPS: Record<ColSpanVariant, string> = {
        [ColSpanVariant.COLSPAN1]: 'col-span-1',
        [ColSpanVariant.COLSPAN2]: 'col-span-2',
        [ColSpanVariant.COLSPAN3]: 'col-span-3',
        [ColSpanVariant.COLSPAN6]: 'col-span-6',
        [ColSpanVariant.COLSPAN12]: 'col-span-12',
    };

    return (
        <aside className={`    
            pt-6 
            md:pt-20                
            text-white
            box-border 
            pb-5 
            overflow-x-visible
            lg:pb-20 
            lg:top-0 
            lg:sticky 
            lg:flex 
            lg:max-h-screen 
            lg:overflow-y-scroll
            lg:flex-col 
            lg:justify-between
            ${COLSPAN_MAPS[colSpan]}
            `
        }>
            {children}
        </aside>
    )
}

export default AsideLayout