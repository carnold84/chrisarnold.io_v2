import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import TagIcon from '../assets/icon/tag.svg';

const Wrapper = styled(Link)`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color3);
  display: flex;
  fill: #cccccc;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: capitalize;

  svg {
    margin: 0 5px 0 0;
  }

  &:hover {
    color: var(--text-color1);
    fill: #aaaaaa;
  }
`;

const TagItem = ({ data }) => {
  const { label, path } = data;

  return (
    <Wrapper to={path}>
      <TagIcon height={'16px'} width={'16px'} />
      {label}
    </Wrapper>
  );
};

const { shape, string } = propTypes;

TagItem.propTypes = {
  data: shape({
    label: string,
    path: string,
  }),
};

export default TagItem;
