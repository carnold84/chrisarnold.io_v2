import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import CodeItem from '../components/CodeItem';
import Layout from '../components/Layout';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  padding: 80px 20px;

  @media ${breakpoint('md')} {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr;
    padding: 110px 40px;
  }

  @media ${breakpoint('lg')} {
    padding: 110px 120px;
  }

  @media ${breakpoint('xl')} {
    grid-column-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default () => {
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
          title
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
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
    <Layout theme={3}>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>Experiments and Projects - {title}</title>
        <meta
          name={'description'}
          content={
            'Experiments and projects built using Javascript, React, Vue, Angular and much more.'
          }
        />
        <link rel={'canonical'} href={'http://mysite.com/example'} />
      </Helmet>
      <Wrapper>
        <AppHeader breadcrumbs={breadcrumbs} hasClose={true} />
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
      </Wrapper>
    </Layout>
  );
};
