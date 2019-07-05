import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TagItem from './TagItem';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  align-self: start;
  background-color: var(--theme-color-alt2);
  border: 1px solid var(--theme-color-alt3);
  color: var(--text-color-alt1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  margin: 0;
  width: 100%;

  @media ${breakpoint('sm')} {
    grid-column-gap: 10px;
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const Cell = styled.div`
  align-items: center;
  color: var(--text-color-alt1);
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 10px 20px;

  @media ${breakpoint('sm')} {
    padding: 10px 20px;
  }
`;

const TitleCell = styled(Cell)`
  font-family: var(--title-font);
  font-size: 1.1rem;
  padding: 20px 20px 0;

  @media ${breakpoint('sm')} {
    padding: 10px 20px;
  }
`;

const TagsCell = styled(Cell)`
  padding: 10px 20px 20px;

  @media ${breakpoint('sm')} {
    padding: 10px 20px;
  }
`;

const UrlLink = styled.a.attrs({
  rel: 'noopener',
  target: '_blank',
})`
  background-color: transparent;
  border: none;
  border-bottom: 1px dotted var(--text-color-alt2);
  color: var(--text-color2);
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 4px 0 0;
  padding: 0 0 1px;
  text-decoration: none;

  &:hover {
    border-bottom-color: var(--color-alt1);
    color: var(--color1);
  }

  @media ${breakpoint('sm')} {
    margin: 0;
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
      <TagsCell>
        {tags.map(tag => {
          return <TagItem key={tag.id} data={tag} />;
        })}
      </TagsCell>
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
