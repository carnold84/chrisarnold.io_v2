import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ResourceItem from '../components/ResourceItem';
import TagItem from '../components/TagItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
`;

const Header = styled.header`
  display: flex;
`;

const Tags = styled.ul`
  flex-shrink: 0;
  list-style: none;
  padding: 0 10px;
  width: 140px;
`;

const TagItemContainer = styled.li`
  margin: 0 0 20px;
`;

const Title = styled.h1`
  font-family: var(--title-font);
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Resources = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export default props => {
  const {
    pageContext: { currentTag, nodes, tags },
  } = props;

  return (
    <Layout isCompact={true}>
      <Wrapper>
        {!currentTag && (
          <Header>
            <Title>Resources</Title>
          </Header>
        )}
        {currentTag && (
          <Header>
            <Title>
              <Link to={'/resources'}>Resources</Link> / {currentTag}
            </Title>
          </Header>
        )}
        <Content>
          <Tags>
            {tags.map(tag => {
              return (
                <TagItemContainer key={tag.id}>
                  <TagItem data={tag} />
                </TagItemContainer>
              );
            })}
          </Tags>
          <Resources>
            <tbody>
              {nodes.map(node => {
                return <ResourceItem data={node} key={node.id} />;
              })}
            </tbody>
          </Resources>
        </Content>
      </Wrapper>
    </Layout>
  );
};
