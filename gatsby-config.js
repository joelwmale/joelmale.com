module.exports = {
  siteMetadata: {
    title: `Joel Male: Backend Engineer + Leader | Brisbane`,
    description: `I'm a backend developer using Laravel to solve problems and create fun experiences. I sometimes write content to share my knowledge with others.`,
    keywords: ["laravel", "shopify", "web development"],
    siteUrl: `https://joelmale.com/`,
    social: {
      twitter: `joelwmale`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-218431868-1`,
        head: true,
        defer: true,
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 4.75L7.75 19.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.25 4.75L13.75 19.25"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 8.75H5.75"></path> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 15.25H4.75"></path></svg>`,
              className: `header-link`,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
            },
          },
          {
            resolve: 'gatsby-plugin-sitemap',
            options: {
              output: '/',
              createLinkInHead: true
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Joel Male Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joel Male`,
        short_name: `Joel Male`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
