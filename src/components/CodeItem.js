import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ExternalLinkIcon from '../assets/icon/external-link.svg';
import GithubIcon from '../assets/icon/github.svg';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  background-color: var(--theme-color-alt2);
  border: var(--theme-color-alt3) solid 1px;
  color: var(--text-color-alt2);
  display: grid;
  grid-template-areas:
    'number header header header'
    'number content content content'
    'number meta meta meta'
    'number links links links';
  grid-template-columns: 50px auto;
  grid-template-rows: auto 1fr auto 40px;
  margin: 0 0 40px;
  padding: 40px;
  width: 100%;
`;

const Number = styled.p`
  color: var(--text-color-alt3);
  flex-shrink: 0;
  font-family: var(--title-font);
  font-size: 2rem;
  font-weight: 300;
  grid-area: number;
  line-height: 2.4rem;
  margin: 0 0 10px;
  width: 100%;
`;

const Header = styled.h2`
  color: var(--text-color-alt1);
  flex-shrink: 0;
  font-family: var(--title-font);
  font-size: 2rem;
  font-weight: 300;
  grid-area: header;
  line-height: 2.4rem;
  margin: 0 0 10px;
  width: 100%;
`;

const Content = styled.div`
  grid-area: content;

  p {
    color: var(--text-color-alt2);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0 0 20px;
  }
`;

const Meta = styled.p`
  grid-area: meta;

  span {
    color: var(--text-color-alt3);
  }

  color: var(--text-color-alt2);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4rem;

  @media ${breakpoint('sm')} {
    margin: 0 0 20px;
  }
`;

const Links = styled.div`
  grid-area: links;

  display: flex;
  justify-content: flex-end;

  & > * {
    margin: 0 0 0 20px;
  }
`;

const Link = styled.a.attrs({
  rel: 'noopener',
  target: '_blank',
})`
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--text-color-alt2);
  display: flex;
  fill: var(--text-color-alt2);
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: center;
  line-height: 1.4rem;
  text-decoration: none;

  svg {
    margin: 1px 8px 0 0;
    width: 24px;
  }

  &:hover {
    color: var(--text-color-alt1);
    fill: var(--text-color-alt1);
  }

  @media ${breakpoint('sm')} {
    display: inline-flex;
  }
`;

const CodeItem = ({ data }) => {
  const { demoLink, description, number, repositoryLink, tags, title } = data;

  const descHtml = {
    __html: description,
  };

  const paddedNumber = number < 10 ? `0${number}` : number;

  return (
    <Wrapper>
      <Number>{paddedNumber}.</Number>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={descHtml} />
      <Meta>
        <span>Tags:</span> {tags}
      </Meta>
      <Links>
        <Link href={repositoryLink}>
          <GithubIcon height={'20px'} width={'20px'} />
          <span>Code</span>
        </Link>
        <Link href={demoLink}>
          <ExternalLinkIcon height={'22px'} width={'22px'} />
          <span>View</span>
        </Link>
      </Links>
    </Wrapper>
  );
};

const { shape, string } = propTypes;

CodeItem.propTypes = {
  data: shape({
    demoLink: string,
    description: string,
    repositoryLink: string,
    tags: string,
    title: string,
  }),
};

export default CodeItem;
