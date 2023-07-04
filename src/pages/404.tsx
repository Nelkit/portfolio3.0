import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby"
import BackLink from "../components/controls/back-link";
import {Trans} from "gatsby-plugin-react-i18next";
import Layout from "../components/layouts/layout";
import ContentLayout from "../components/layouts/content-layout";
import MainLayout from "../components/layouts/main-layout";
import {ColSpanVariant, ColVariant} from "../utils/enums";

const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <ContentLayout cols={ColVariant.COLS1}>
                <MainLayout colSpan={ColSpanVariant.COLSPAN1}>
                    <div className={'text-white text-center m-auto mt-28'} >
                        <h1 className={'text-4xl md:text-5xl font-bold mb-10'}>
                            <Trans>Page not found</Trans>
                        </h1>
                        <p className={'text-lg'}>
                            <Trans>Sorry 😔, we couldn’t find what you were looking for.</Trans>
                            <br />
                            {process.env.NODE_ENV === "development" ? (
                                <>
                                    <br />
                                    Try creating a page in <code style={codeStyles}>src/pages/</code>.
                                    <br />
                                </>
                            ) : null}
                            <br />
                            <BackLink >
                                <Trans>Go home</Trans>
                            </BackLink>.
                        </p>
                    </div>
                </MainLayout>
            </ContentLayout>
        </Layout>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => {
    return(
        <>
            <html lang="en" />
            <title>Not found</title>
            <body className="bg-gray-900 font-lato" onScroll={this} />
        </>
    )
}




export const query = graphql`
query ($language: String!) {
  locales: allLocale(filter: { language: { eq: $language } }) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
}
`;
