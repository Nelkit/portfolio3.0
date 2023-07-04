import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// @ts-ignore
import preview from './../images/preview.png'


interface Props{
    title?: string,
    image?: string,
    description?: string,
    pathname?: string,
    locale?: string,
    children?: any,
}
export const SEO = ({ title, image, description, pathname, locale, children }:Props) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, twitterUsername, locale: defaultLocale } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || `${siteUrl}${preview}`,
        url: `${siteUrl}${pathname || ``}`,
        locale: locale || defaultLocale,
        siteName: defaultTitle,
        twitterUsername,
    }

    return (
        <>
            <html lang={seo.locale} />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:locale" content={seo.locale} />
            <meta property="og:site_name" content={seo.siteName} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <meta property="twitter:site" content={seo.twitterUsername} />
            {children}
        </>
    )
}