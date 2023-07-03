import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nelkit Chavez`,
    description: `Nelkit Chavez is an experienced Software Engineer specialized in mobile and web app development.`,
    twitterUsername: `@nelkitchavez`,
    siteUrl: process.env.NODE_ENV == 'development' ? `http://localhost:8000` : `https://www.nelkit.dev`,
    locale: 'en'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  //plugins: ["gatsby-plugin-postcss", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'es'],
        defaultLanguage: 'en',
        siteUrl: `https://nelkit.dev/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:slug',
            getLanguageFromPath: true,
          },
          {
            matchPath: '/:lang?/projects/:slug',
            getLanguageFromPath: true,
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        forceFullSync: true,
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.TRACKING_ID,
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};

export default config;
