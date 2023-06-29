import * as react from 'react'
import * as React from "react";
import TextLink from "./controls/text-link";
import {Trans} from "gatsby-plugin-react-i18next";
const Footer = () => {
    return (
        <footer>
            <div className={'pt-6 pb-20 mt-20 w-full text-center'}>
                <Trans>Built with</Trans>
                <TextLink href={'https://www.gatsbyjs.com/'}> Gatsby.js</TextLink>,
                <TextLink href={'https://react.dev/'}> React JS </TextLink>
                <Trans>and</Trans>
                <TextLink href={'https://tailwindcss.com/'}> Tailwind CSS</TextLink>
                , <Trans>deployed with</Trans>
                <span><TextLink href={'https://www.netlify.com/'}> Netlify.</TextLink> </span>
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