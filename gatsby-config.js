/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "source",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 900,
    //           linkImagesToOriginal: false,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
  siteMetadata: {
    title: "Santhosh - Portfolio",
    author: "Santhosh J",
  },
  pathPrefix: "/portfolio",
}
