const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
const gdeStamps = require("./timestamps.json")

const posixSlash = (input = "") => {
  return input.split(path.sep).join(path.posix.sep)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`./src/templates/categories.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
              created
              modified
            }
            frontmatter {
              categories
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Extract tag data from query
  const categories = result.data.categoriesGroup.group

  if (categories.length > 0) {
    // Make category pages
    categories.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category.fieldValue)}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
        },
      })
    })
  }
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent);

    createNodeField({
      name: `slug`,
      node,
      value,
    });

    let stamps = {
			created: fileNode.birthtimeMs,
			modified: fileNode.mtimeMs,
		};

    const filePathRelativeToRoot = posixSlash(fileNode.absolutePath).replace(
      `${posixSlash(__dirname)}/`,
      ""
    )

    const stampEntry = gdeStamps[filePathRelativeToRoot]

    if (stampEntry && stampEntry.created) {
      stamps = {
        created: stampEntry.created * 1000,
        modified: stampEntry.modified * 1000,
      }
    }

    for (const key in stamps) {
      actions.createNodeField({
        node,
        name: key,
        value: stamps[key],
      })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
      social: Social
    }
    
    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      created: String
      modified: String
    }
  `)
}
