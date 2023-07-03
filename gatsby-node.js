const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/project-template.tsx`)

    const projects = await graphql(`
      {
        allContentfulProject(
          sort: { orderNumber: DESC }
          limit: 1000
        ) {
          edges {
              node {
                id
                title
                description {
                  raw
                }
                image {
                  url
                }
                tags {
                  title
                }
                hyperlink
                links{
                  title
                  href
                  icon
                }
                slug
                node_locale
              }
          }
        }
      }
    `)

    if (projects.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    projects.data.allContentfulProject.edges.forEach(({ node }) => {
        createPage({
          path: `${node.node_locale==='es' ? node.node_locale : ''}/projects/${node.slug}`,
          component: projectTemplate,
          context: {
              slug: node.slug
          },
        })
    })

}