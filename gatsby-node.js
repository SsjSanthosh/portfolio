const { create } = require("domain")
const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const projectTemplate = path.resolve("./src/templates/Project/index.js")
  const projects = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  projects.data.allContentfulProject.edges.map(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // const blogs = await graphql(`
  //   query {
  //     allContentfulBlogs {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)
  // blogs.data.allContentfulBlogs.edges.map(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.slug}`,
  //     context: {
  //       slug: edge.node.slug,
  //     },
  //   })
  // })
}
