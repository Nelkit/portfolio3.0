import * as React from "react"
import {ColSpanVariant} from "../../utils/enums";

interface Props{
    children:any
    colSpan?:ColSpanVariant
}

const MainLayout = ({children, colSpan = 1}: Props) => {
    const COLSPAN_MAPS: Record<ColSpanVariant, string> = {
        [ColSpanVariant.COLSPAN1]: 'col-span-1',
        [ColSpanVariant.COLSPAN2]: 'col-span-2',
        [ColSpanVariant.COLSPAN3]: 'col-span-3',
        [ColSpanVariant.COLSPAN6]: 'col-span-6',
        [ColSpanVariant.COLSPAN12]: 'col-span-12',
    };

    return (
        <main className={`                    
            text-gray-400 
            min-h-screen
            lg:pt-20
            ${COLSPAN_MAPS[colSpan]}
            `}>
            {children}
        </main>
    )
}

export default MainLayout