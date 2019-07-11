import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import CodeItem from '../components/CodeItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  background-color: var(--theme-color-alt1);
  clip-path: circle(0% at 89% 3%);
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;

  &.showing,
  &.shown {
    transition: clip-path 500ms ease-in;
    clip-path: circle(250% at 89% 3%);
  }

  &.showing,
  &.hiding {
    overflow: hidden;
  }

  &.hiding {
    transition: clip-path 500ms ease-out;
  }
`;

const Content = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding: 90px 20px;

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

export default ({ transitionState }) => {
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
  console.log(transitionState);

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
      <Wrapper className={transitionState}>
        <AppHeader breadcrumbs={breadcrumbs} hasClose={true} theme={3} />
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
    </>
  );
};
