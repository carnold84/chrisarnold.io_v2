import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import CodeItem from '../components/CodeItem';
import Page from '../components/Page';

import breakpoint from '../utils/breakpoint';

const Content = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding: 0 0;

  @media ${breakpoint('md')} {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr;
    padding: 110px 0;
  }

  @media ${breakpoint('lg')} {
    padding: 10px 120px;
  }

  @media ${breakpoint('xl')} {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Code = ({ transitionState }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "code" } } }
        sort: { order: ASC, fields: [frontmatter___order] }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              demoLink
              order
              path
              repositoryLink
              tags
              title
              type
            }
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { siteUrl, title },
    },
  } = data;

  let breadcrumbs = [
    {
      link: '/code',
      text: 'Code',
    },
    {
      text: 'Experiments and Projects',
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>Experiments and Projects - {title}</title>
        <meta
          name={'description'}
          content={
            'Experiments and projects built using Javascript, React, Vue, Angular and much more.'
          }
        />
        <link rel={'canonical'} href={`${siteUrl}/code`} />
      </Helmet>
      <Page breadcrumbs={breadcrumbs} theme={3}>
        <Content>
          {edges.map((edge, i) => {
            const nodeData = {
              description: edge.node.html,
              id: edge.node.id,
              number: i + 1,
              ...edge.node.frontmatter,
            };
            return <CodeItem data={nodeData} key={nodeData.id} />;
          })}
        </Content>
      </Page>
    </>
  );
};

export default Code;
