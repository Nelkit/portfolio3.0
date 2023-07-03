import * as react from 'react'
import * as React from "react";

interface Props {
    src: string,
    alt?: string
}
const BorderedImage = ({src, alt}: Props) => {
    return (
        <img src={src} alt={alt} className={'w-full rounded border-2 border-gray-600'}/>
    )
}

export default BorderedImage