import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  align-items: center;
  background-color: var(--theme-color-alt2);
  border: 1px solid var(--theme-color-alt3);
  border-radius: 16px;
  color: var(--text-color3);
  display: flex;
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  height: 30px;
  letter-spacing: 0.03rem;
  line-height: 1rem;
  margin: 2px 4px 2px 0;
  padding: 0 14px;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    background-color: var(--theme-color-alt3);
    border-color: var(--theme-color-alt3);
    color: var(--text-color-alt1);
  }
`;

const TagItem = ({ data }) => {
  const { label, path } = data;

  return <Wrapper to={path}>{label}</Wrapper>;
};

const { shape, string } = propTypes;

TagItem.propTypes = {
  data: shape({
    label: string,
    path: string,
  }),
};

export default TagItem;
