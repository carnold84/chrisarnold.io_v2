import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import Layout from '../components/Layout';
import ResourceItem from '../components/ResourceItem';

import CloseIcon from '../assets/icon/close.svg';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  background-color: var(--theme-color2);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  padding: 80px 20px;

  @media ${breakpoint('md')} {
    padding: 110px 120px;
  }
`;

const Options = styled.div`
  display: flex;
  margin: 0 0 10px;

  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const TagsBtn = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color2);
  cursor: pointer;
  display: flex;
  font-family: var(--title-font);
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: center;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: var(--color1);
  }

  @media ${breakpoint('md')} {
    display: none;
  }
`;

const Tags = styled.ul`
  align-self: start;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  flex-shrink: 0;
  height: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 7px 0;
  position: fixed;
  top: 0;
  transform: translate3d(-100%, 0, 0);
  transition: transform 200ms ease-out;
  width: 100%;
  z-index: 1000;

  &.is-open {
    transform: translate3d(0, 0, 0);
  }

  @media ${breakpoint('lg')} {
    left: auto;
    padding: 20px 0;
    top: auto;
    transform: translate3d(0, 0, 0);
    width: 220px;
    z-index: 0;
  }
`;

const TagsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 15px;
`;

const TagsTitle = styled.h3`
  color: var(--text-color1);
  font-family: var(--title-font);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
`;

const TagsCloseBtn = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  fill: var(--text-color-alt2);
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;

  @media ${breakpoint('md')} {
    display: none;
  }
`;

const TagItemContainer = styled.li`
  display: flex;
  width: 100%;
`;

const TagItem = styled(Link)`
  align-items: center;
  border-left: 2px solid transparent;
  color: var(--text-color2);
  display: flex;
  font-family: var(--title-font);
  font-size: 1.1rem;
  font-weight: 400;
  height: 40px;
  justify-content: space-between;
  margin: 0 0 5px;
  padding: 0 20px 2px;
  text-decoration: none;
  text-transform: capitalize;
  width: 100%;

  &:hover {
    background-color: var(--color3);
    color: var(--text-color1);
  }

  &.is-active {
    background-color: var(--color3);
    border-color: var(--color1);
    color: var(--text-color1);
  }
`;

const TagCount = styled.span`
  align-items: center;
  border: 1px solid var(--theme-color3);
  border-radius: 15px;
  color: var(--text-color3);
  display: inline-flex;
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  height: 30px;
  line-height: 1.1rem;
  margin: 1px 0 0;
  padding: 0 15px;

  .is-active & {
    border-color: var(--color2);
  }
`;

const Resources = styled.div`
  align-self: start;
  display: grid;
  grid-row-gap: 10px;
  margin: 0;

  @media ${breakpoint('lg')} {
    margin: 0 0 0 260px;
  }
`;

export default props => {
  const {
    pageContext: { currentTag, nodes, tags, totalNodes },
  } = props;

  const [filtersOpen, setFiltersOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  let breadcrumbs = [
    {
      link: '/resources',
      text: 'Resources',
    },
  ];

  if (currentTag) {
    breadcrumbs.push({
      text: currentTag.label,
    });
  } else {
    breadcrumbs.push({
      text: 'Useful Links',
    });
  }

  const {
    site: {
      siteMetadata: { title },
    },
  } = data;

  return (
    <Layout theme={2}>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>Resources - {title}</title>
        <meta
          name={'description'}
          content={
            'Resources, useful links, libraries, frameworks and articles.'
          }
        />
        <link rel={'canonical'} href={'http://mysite.com/example'} />
      </Helmet>
      <Wrapper>
        <AppHeader breadcrumbs={breadcrumbs} hasClose={true} />
        <Content>
          <Options>
            <TagsBtn onClick={() => setFiltersOpen(!filtersOpen)}>
              Show Filters
            </TagsBtn>
          </Options>
          <Tags className={filtersOpen ? 'is-open' : null}>
            <TagsHeader>
              <TagsTitle>Tags</TagsTitle>
              <TagsCloseBtn onClick={() => setFiltersOpen(false)}>
                <CloseIcon />
              </TagsCloseBtn>
            </TagsHeader>
            <TagItemContainer>
              <TagItem
                className={!currentTag ? 'is-active' : null}
                to={'/resources'}
              >
                All
                <TagCount>{totalNodes}</TagCount>
              </TagItem>
            </TagItemContainer>
            {tags.map(tag => {
              const isActive = currentTag && tag.id === currentTag.id;
              return (
                <TagItemContainer key={tag.id}>
                  <TagItem
                    className={isActive ? 'is-active' : null}
                    to={tag.path}
                  >
                    {tag.label}
                    <TagCount>{tag.count}</TagCount>
                  </TagItem>
                </TagItemContainer>
              );
            })}
          </Tags>
          <Resources>
            {nodes.map(node => {
              return <ResourceItem data={node} key={node.id} />;
            })}
          </Resources>
        </Content>
      </Wrapper>
    </Layout>
  );
};
