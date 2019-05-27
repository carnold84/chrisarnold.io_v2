module.exports = {
  pathPrefix: '/chrisarnold.io_v2',
  plugins: [
    {
      resolve: `gatsby-plugin-page-transitions`,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Oswald`,
            variants: [`400`, `700`],
          },
        ],
      },
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
    title: `Chris Arnold - Front-end Developer and Designer`,
    siteUrl: `https://chrisarnold.io`,
    description: `Chris Arnold - Front-end developer and designer working in Javascript, HTML, CSS, React, Vue, Node and much more.`,
  },
};
