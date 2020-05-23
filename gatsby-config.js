module.exports = {
  siteMetadata: {
    title: `Gatsby/NetlifyCMS Default Starter`,
    description: `Kick off your next, great client project with this default starter with netlify cms`,
    author: `Andrew Trigg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      // This adds the images added through the cms
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img/`,
        name: "uploads",
      },
    },
    // Images in this folder will be added, and can only be changed by the developer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // This is where the markdown pages will be.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages",
      },
    },
    // This is where the markdown file for the global site data will be.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data/`,
        name: "site-data",
      },
    },

    // alias the custom component lib for easier importing
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { "@custom-lib": "src/component-lib" },
        extensions: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1500,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}
