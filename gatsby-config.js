module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald:300,400,700`, `Open Sans:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-react-svg`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
  siteMetadata: {
    title: `ChrisArnold.io`,
    siteUrl: `https://chrisarnold.io`,
    description: `Chris Arnold - Front-end developer and designer working in Javascript, HTML, CSS, React, Vue, Node and much more.`,
  },
};
