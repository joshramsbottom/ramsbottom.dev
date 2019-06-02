module.exports = {
  siteMetadata: {
    title: `Hi, I'm Josh`,
    description: `I'm a full stack developer based in Cape Town.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
