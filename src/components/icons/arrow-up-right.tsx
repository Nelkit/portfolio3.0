import * as React from "react";

interface Props {
    width?: string,
    height?: string,
    className?: string
}
const ArrowUpRight = ({width = 'w-4', height='h-4', className}: Props) =>{
    return (
        <svg className={`${width} ${height} ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.4238 14.4434" fill="currentColor">
            <path d="M14.4238 10.8008L14.4141 0.976562C14.4141 0.419922 14.0527 0.0292969 13.4668 0.0292969L3.64258 0.0292969C3.0957 0.0292969 2.72461 0.449219 2.72461 0.917969C2.72461 1.38672 3.14453 1.78711 3.60352 1.78711L7.00195 1.78711L11.7676 1.63086L9.95117 3.22266L0.273438 12.9199C0.0976562 13.0957 0 13.3203 0 13.5352C0 14.0039 0.419922 14.4434 0.908203 14.4434C1.13281 14.4434 1.34766 14.3652 1.52344 14.1797L11.2207 4.49219L12.832 2.66602L12.6562 7.22656L12.6562 10.8398C12.6562 11.2988 13.0566 11.7285 13.5352 11.7285C14.0039 11.7285 14.4238 11.3281 14.4238 10.8008Z" fill="currentColor"/>
        </svg>
    )
}

export default ArrowUpRight
