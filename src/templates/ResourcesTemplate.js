import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import Layout from '../components/Layout';
import ResourceItem from '../components/ResourceItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr;
  padding: 140px 40px;

  @media ${breakpoint('md')} {
    grid-column-gap: 20px;
    grid-template-columns: 1fr 9fr;
    padding: 110px 120px;
  }

  @media ${breakpoint('lg')} {
    grid-column-gap: 20px;
    grid-template-columns: 1fr 9fr;
  }
`;

const Tags = styled.ul`
  align-self: start;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  flex-shrink: 0;
  list-style: none;
  margin: 0;
  padding: 20px 0;
  width: 220px;
`;

const TagsHeader = styled.h3`
  color: var(--text-color1);
  font-family: var(--title-font);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
  margin: 0 20px 15px;
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
  padding: 0 20px;
  text-decoration: none;
  text-transform: capitalize;
  width: 100%;

  &.is-active {
    border-color: var(--color1);
    color: var(--text-color1);
  }
`;

const TagCount = styled.span`
  align-items: center;
  border: 1px solid var(--theme-color2);
  border-radius: 15px;
  color: var(--text-color2);
  display: inline-flex;
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  height: 30px;
  line-height: 1.1rem;
  padding: 0 15px;
`;

const Resources = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 100%;
`;

export default props => {
  const {
    pageContext: { currentTag, nodes, tags },
  } = props;

  const tagsTotal = tags.reduce((acc, current) => {
    return acc + current.count;
  }, tags[0].count);

  console.log(nodes, tags);

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

  return (
    <Layout isCompact={true}>
      <Wrapper>
        <AppHeader breadcrumbs={breadcrumbs} hasClose={true} />
        <Content>
          <Tags>
            <TagsHeader>Tags</TagsHeader>
            <TagItemContainer>
              <TagItem
                className={!currentTag ? 'is-active' : null}
                to={'/resources'}
              >
                All
                <TagCount>{tagsTotal}</TagCount>
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
