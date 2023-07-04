const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/project-template.tsx`)
    const blogTemplate = path.resolve(`src/templates/blog-template.tsx`)

    // GENERATE PROJECT PAGES
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
        reporter.panicOnBuild(`Error while running GraphQL query to create project pages.`)
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

    // GENERATE BLOG PAGES
    const blogPosts = await graphql(`
      {
        allContentfulBlogPost(
          sort: { date: DESC }
          limit: 1000
        ) {
          edges {
              node {
                title
                summary
                body{
                  raw
                }
                slug
                image {
                  url
                  title
                }
                relatedAssets {
                  url
                  contentful_id
                }
                date
                node_locale
             }
          }
        }
      }
    `)

    if (blogPosts.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query to create blog pages.`)
        return
    }

    blogPosts.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: `${node.node_locale==='es' ? node.node_locale : ''}/blog/${node.slug}`,
          component: blogTemplate,
          context: {
              slug: node.slug
          },
        })
    })

}