module.exports = {
  siteMetadata: {
    title: "Melanie R. Silbernagl",
    description: "Melanie R. Silbernagl - Mixed Media Artist / Art therapist",
    siteLanguage: "de-at",
    navigation: {
      nodes: [
        {
          title: "Home",
          slug: "/"
        },
        {
          title: "Blog",
          slug: "/blog"
        },
        {
          title: "About",
          slug: "/about"
        }
      ]
    }
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
};