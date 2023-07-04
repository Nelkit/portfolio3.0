import * as react from 'react'
import * as React from "react";
import Instagram from "../icons/instagram";
import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";
const ContactLinks = () => {
    return (
        <div className={`
            w-full flex justify-start [&>a]:mr-6 [&>a]:text-gray-400 
            [&>a]:transition-all [&>a]:duration-500 [&>a:hover]:text-white
            [&>a:hover]:shadow-md [&>a:hover]:bg-opacity-20
        `}>
            <a href="https://www.instagram.com/nelkit792/" target="_blank">
                <Instagram width={'w-6'} height={'h-6'}/>
            </a>
            <a href="https://github.com/nelkit" target="_blank">
                <Github width={'w-6'} height={'h-6'}/>
            </a>
            <a href="https://www.linkedin.com/in/nelkit/" target="_blank">
                <LinkedIn width={'w-6'} height={'h-6'}/>
            </a>
        </div>
    )
}

export default ContactLinks