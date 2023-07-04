import * as React from "react";
import ContactLinks from "./contact-links";

interface Props {
    title: string
    summary: string
}
const AboutCard = ({title, summary}:Props) => {
    return (
        <div className={'w-full hidden lg:block pr-10' }>
            <h1 className={'text-white mt-6 text-2xl font-bold '}>Nelkit Chavez</h1>
            <h2 className={'text-gray-400 text-xl'}>
                {title}
            </h2>
            <p className={'text-gray-400 mb-4 text-sm relative w-full'}>
                {summary}
            </p>
            <ContactLinks/>
        </div>
    )
}

export default AboutCard