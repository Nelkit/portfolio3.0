import * as React from "react";

interface Props {
    width?: string,
    height?: string,
    otherClasses?: string
}
const ArrowUpRight = ({width = 'w-6', height='h-6', otherClasses}: Props) =>{
    return (
        <svg  className={`${width} ${height} ${otherClasses}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
        </svg>
    )
}

export default ArrowUpRight