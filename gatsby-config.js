module.exports = {
  pathPrefix: '/chrisarnold.io_v2',
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald\:300,400,700`, `Open Sans\:400,700`],
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
