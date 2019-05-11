import { Link } from 'gatsby';
import styled from 'styled-components';

import breakpoint from '../utils/breakpoint';

export const H1 = styled.h1`
  color: var(--text-color-alt1);
  flex-shrink: 0;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin: 0 0 10px;
  width: 100%;
`;

export const H2 = styled.h2`
  color: var(--text-color-alt1);
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin: 0 0 10px;
  width: 100%;
`;

export const LinkDefault = styled(Link)`
  background-color: transparent;
  border: none;
  color: var(--text-color-alt1);
  display: flex;
  fill: var(--text-color-alt1);
  text-decoration: none;

  &:hover {
    color: var(--text-color-alt2);
    fill: var(--text-color-alt2);
  }
`;

export const LinkSecondary = styled(Link)`
  background-color: transparent;
  border: none;
  color: var(--text-color-alt2);
  display: flex;
  fill: var(--text-color-alt2);
  text-decoration: none;

  &:hover {
    color: var(--text-color-alt1);
    fill: var(--text-color-alt1);
  }
`;

export const Meta = styled.p`
  color: var(--text-color-alt2);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0 0 10px;
`;

export const Paragraph = styled.p`
  color: var(--text-color-alt2);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin: 0 0 10px;
`;
