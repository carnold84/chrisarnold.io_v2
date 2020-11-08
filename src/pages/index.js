import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Page from '../components/Page';

import breakpoint from '../utils/breakpoint';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 0 40px;
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

const Home = () => {
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
    <>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>{title} - Front-end Developer and Designer</title>
        <meta name={'description'} content={description} />
        <link rel={'canonical'} href={siteUrl} />
      </Helmet>
      <Page maxWidth={'1000px'} theme={3}>
        <Content>
          <Heading>Hello,</Heading>
          <Paragraph>
            I'm Chris Arnold, a front-end developer and designer in
            Christchurch, New Zealand. I like to write clean, elegant,
            functional code and partner it with clean, beautiful design and well
            thought out, user-friendly interfaces.
          </Paragraph>
        </Content>
      </Page>
    </>
  );
};

export default Home;
