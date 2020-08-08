require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `DVLPER`,
    siteTitleAlt: `DVLPER - iOS Developer Portfolio`,
    siteHeadline: `DVLPER - iOS Developer Portfolio`,
    author: `@Waseem Akram`,
    siteImage: `/banner.png`,
    banner: `/banner.png`,
    siteUrl: `https://dvlper.in`,
    siteLanguage: `en`,
    siteDescription: `Waseem Akram - iOS Developer Portfolio`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/devwaseem`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/iamwaseem99`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/dvlp.er/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/devwaseem/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dvlper - iOS Developer Portfolio`,
        short_name: `Dvlper`,
        description: `Waseem Akram - iOS Developer Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images-medium-zoom`,
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/blog" }],
        excludePaths: [],
        height: 6,
        prependToBody: false,
        color: `#323646`,
        footerHeight: 500,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
