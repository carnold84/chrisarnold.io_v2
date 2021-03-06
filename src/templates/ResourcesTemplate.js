import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import ResourceItem from '../components/ResourceItem';

import CloseIcon from '../assets/icon/close.svg';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  background-color: var(--theme-color-alt1);
  display: flex;
  flex-direction: column;
  opacity: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;

  &.showing,
  &.shown {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  &.showing,
  &.hiding {
    overflow: hidden;
  }

  &.hiding {
    opacity: 0;
    transition: opacity 250ms ease-out;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  grid-gap: 40px;
  min-height: 100vh;
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
`;

const Tags = styled.div`
  align-self: start;
  background-color: var(--theme-color-alt2);
  border: 1px solid var(--theme-color-alt3);
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  transform: translate3d(-100%, 0, 0);
  transition: transform 200ms ease-out;
  width: 100%;
  z-index: 1000;

  &.is-open {
    transform: translate3d(0, 0, 0);
  }

  @media ${breakpoint('lg')} {
    height: auto;
    transform: translate3d(0, 0, 0);
    width: 220px;
    z-index: 0;
  }
`;

const TagsHeader = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 20px;
`;

const TagsTitle = styled.h3`
  color: var(--text-color-alt1);
  font-family: var(--title-font);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
  margin: 0;
`;

const TagsContent = styled.ul`
  display: flex;
  height: calc(100% - 60px);
  flex-direction: column;
  margin: 0;
  overflow: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--theme-color-alt2);
    border-left: 1px solid var(--theme-color-alt3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--theme-color-alt3);
    border-radius: 5px;
  }
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

  @media ${breakpoint('lg')} {
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
  color: var(--text-color-alt2);
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
    background-color: var(--theme-color-alt3);
    color: var(--text-color-alt1);
  }

  &.is-active {
    background-color: var(--theme-color-alt3);
    border-color: var(--color1);
    color: var(--text-color-alt1);
  }
`;

const TagCount = styled.span`
  align-items: center;
  background-color: var(--theme-color-alt2);
  border: 1px solid var(--theme-color-alt3);
  border-radius: 15px;
  color: var(--text-color-alt3);
  display: inline-flex;
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  height: 30px;
  line-height: 1.1rem;
  margin: 1px 0 0;
  padding: 0 15px;

  .is-active &,
  :hover & {
    border-color: var(--theme-color-alt4);
  }
`;

const Resources = styled.div`
  align-self: start;
  display: grid;
  grid-row-gap: 10px;
  margin: 0;
`;

export default props => {
  const {
    pageContext: { currentTag, nodes, slug, tags, totalNodes },
    transitionState,
  } = props;

  const [filtersOpen, setFiltersOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `);

  let breadcrumbs = [
    {
      link: slug,
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
      siteMetadata: { siteUrl, title },
    },
  } = data;

  return (
    <>
      <Helmet>
        <meta charSet={'utf-8'} />
        <title>Resources - {title}</title>
        <meta
          name={'description'}
          content={
            'Resources, useful links, libraries, frameworks and articles.'
          }
        />
        <link rel={'canonical'} href={`${siteUrl}${slug}`} />
      </Helmet>
      <Wrapper className={transitionState}>
        <AppHeader breadcrumbs={breadcrumbs} hasClose={true} theme={3} />
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
            <TagsContent>
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
            </TagsContent>
          </Tags>
          <Resources>
            {nodes.map(node => {
              return <ResourceItem data={node} key={node.id} />;
            })}
          </Resources>
        </Content>
      </Wrapper>
    </>
  );
};
