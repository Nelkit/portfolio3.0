import * as react from 'react'
import * as React from "react";

interface Props {
    src: string,
    alt?: string,
    isFeaturedImage?: boolean,
}
const BorderedImage = ({src, alt, isFeaturedImage = false}: Props) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={"lazy"}
            className={`
                w-full 
                ${isFeaturedImage ? 'rounded-none md:rounded-md border-0 md:border-2' : 'rounded-md border-2'}
                border-gray-600    
            `}
        />
    )
}

export default BorderedImage