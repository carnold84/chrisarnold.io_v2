import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  H2,
  LinkDefault,
  LinkSecondary,
  Meta,
  Paragraph,
} from '../components/Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 0 34px;
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0 0 20px;
  }
`;

const NoteItem = ({ data }) => {
  const { date, excerpt, path, title } = data;

  return (
    <Wrapper>
      <H2>
        <LinkDefault to={path}>{title}</LinkDefault>
      </H2>
      <Meta>{date}</Meta>
      <Paragraph>{excerpt}</Paragraph>
      <Links>
        <Paragraph>
          <LinkSecondary to={path}>Read More...</LinkSecondary>
        </Paragraph>
      </Links>
    </Wrapper>
  );
};

const { shape, string } = propTypes;

NoteItem.propTypes = {
  data: shape({
    date: string,
    excerpt: string,
    path: string,
    title: string,
  }).isRequired,
};

export default NoteItem;
