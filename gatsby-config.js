module.exports = {
  siteMetadata: {
    title: 'Ömer Mindivanli Blog',
    author: 'Ömer Mindivanli',
    description: "A starter blog demonstrating what Ömer's ideas are",
    siteUrl: 'https://omermindivanli.com',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9hpsdmv8k6ai`,
        accessToken: `7bcbd5845a1bca13186821a39f73bdd91b0fbee13ed54f7fb27810330ed78130`,
        host: `ab539f3e41705d2a168781cc8f8187191e4dd2a0c85e750ac33bdbd1a0c730f1`,
      },
    },
  ],
}
