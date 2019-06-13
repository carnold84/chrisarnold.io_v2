import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TagItem from './TagItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  align-self: start;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  color: var(--text-color1);
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-column-gap: 10px;
  margin: 0;
  width: 100%;
`;

const Cell = styled.div`
  align-items: center;
  color: var(--text-color1);
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  padding: 24px 20px 20px;
`;

const TitleCell = styled(Cell)`
  font-family: var(--title-font);
  font-size: 1.1rem;
  font-weight: 400;
`;

const UrlLink = styled.a.attrs({
  rel: 'noopener',
  target: '_blank',
})`
  background-color: transparent;
  border: none;
  border-bottom: 1px dotted var(--text-color2);
  color: var(--text-color2);
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  padding: 0 0 4px;
  text-decoration: none;

  &:hover {
    border-bottom-color: var(--color1);
    color: var(--color1);
  }
`;

const ResourceItem = ({ data }) => {
  const { link, tags, title } = data;

  return (
    <Wrapper>
      <TitleCell>{title}</TitleCell>
      <Cell>
        <UrlLink href={link}>{link}</UrlLink>
      </Cell>
      <Cell>
        {tags.map(tag => {
          return <TagItem key={tag.id} data={tag} />;
        })}
      </Cell>
    </Wrapper>
  );
};

const { array, shape, string } = propTypes;

ResourceItem.propTypes = {
  data: shape({
    link: string,
    tags: array,
    title: string,
  }),
};

export default ResourceItem;
