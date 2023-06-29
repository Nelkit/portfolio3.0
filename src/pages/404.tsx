import * as React from "react"
import {Link, HeadFC, PageProps, graphql} from "gatsby"
import Layout from "../components/layout";
import BackLink from "../components/controls/back-link";
import {Trans} from "gatsby-plugin-react-i18next";

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
            <div className={`snap-align-none w-full flex items-center justify-center`} >
                <section className={'w-full flex py-24 items-center justify-center max-w-5xl relative gap-1 px-4 md:px-12 lg:px-4 xl:px-0 grid-cols-1 h-screen '} >
                    <main className={'text-white text-center h-fit'}>
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
                    </main>
                </section>
          </div>
        </Layout>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => (
    <>
      <html lang="en" />
      <title>Not found</title>
      <body className="bg-gray-900 font-lato" onScroll={this} />
    </>
)


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
