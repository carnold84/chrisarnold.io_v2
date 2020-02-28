import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import breakpoint from '../utils/breakpoint';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 100px 40px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  @media ${breakpoint('sm')} {
    padding: 0 40px 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const Heading = styled.h1`
  font-family: var(--title-font);
  font-size: 5rem;
  font-weight: 700;
  line-height: 5rem;
  margin: 0 0 15px;

  @media ${breakpoint('md')} {
    font-size: 6rem;
    line-height: 6rem;
    margin: 0 0 25px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7rem;
  margin: 0 0 0 3px;
  text-align: justify;

  @media ${breakpoint('md')} {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const { description, siteUrl, title } = data.site.siteMetadata;

  return (
    <Layout theme={1}>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>{title} - Front-end Developer and Designer</title>
        <meta name={'description'} content={description} />
        <link rel={'canonical'} href={siteUrl} />
      </Helmet>
      <Wrapper>
        <Content>
          <Heading>Hello,</Heading>
          <Paragraph>
            I'm Chris Arnold, a front-end developer and designer in
            Christchurch, New Zealand. I like to write clean, elegant,
            functional code and partner it with clean, beautiful design and well
            thought out, user-friendly interfaces.
          </Paragraph>
        </Content>
      </Wrapper>
    </Layout>
  );
};
