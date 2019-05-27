import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TagIcon from '../assets/icon/tag.svg';

import TagItem from './TagItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.tr`
  border-bottom: 1px solid #eeeeee;
  color: var(--text-color1);
  margin: 0;
  width: 100%;
`;

const Cell = styled.td`
  color: var(--text-color1);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  margin: 0 0 10px;
  padding: 20px;
`;

const TitleCell = styled(Cell)`
  font-weight: 700;
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

const TagLink = styled(Link)`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color3);
  display: flex;
  fill: #cccccc;
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;
  line-height: 1rem;
  text-decoration: none;

  svg {
    margin: 0 5px 0 0;
  }

  &:hover {
    color: var(--text-color1);
    fill: #aaaaaa;
  }
`;

const ResourceItem = ({ data }) => {
  console.log(data);
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
