import * as react from 'react'
import * as React from "react";
import Hyperlink from "./controls/hyperlink";
import {Trans} from "gatsby-plugin-react-i18next";
const Footer = () => {
    return (
        <footer>
            <div className={'pt-6 pb-20 mt-20'}>
                <Trans>Built with</Trans>
                <Hyperlink href={'https://www.gatsbyjs.com/'}> Gatsby.js</Hyperlink>,
                <Hyperlink href={'https://react.dev/'}> React JS </Hyperlink>
                <Trans>and</Trans>
                <Hyperlink href={'https://tailwindcss.com/'}> Tailwind CSS</Hyperlink>
                , <Trans>deployed with</Trans>
                <span> Vercel. </span>
                <Trans>Coded with</Trans>
                <span> ❤️ </span>
                <Trans>by </Trans>
                <span>Nelkit Chavez </span>
                <Trans>from</Trans>
                <span> 🇭🇳 Honduras {new Date().getFullYear()}</span>.
            </div>
        </footer>
    )
}

export default Footer