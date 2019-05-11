import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ExternalLinkIcon from '../assets/icon/external-link.svg';
import GithubIcon from '../assets/icon/github.svg';

import breakpoint from '../utils/breakpoint';

const Wrapper = styled.div`
  color: var(--text-color-alt2);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 0 34px;
  width: 100%;
`;

const Header = styled.h2`
  color: var(--text-color-alt1);
  flex-shrink: 0;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin: 0 0 10px;
  width: 100%;
`;

const Content = styled.div`
  p {
    color: var(--text-color-alt2);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;
    margin: 0 0 10px;
  }
`;

const Meta = styled.p`
  span {
    color: var(--text-color-alt3);
  }

  color: var(--text-color-alt2);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4rem;
  margin: 0 0 30px;

  @media ${breakpoint('sm')} {
    margin: 0 0 15px;
  }
`;

const Links = styled.div`
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
  const { demoLink, description, repositoryLink, tags, title } = data;

  const descHtml = {
    __html: description,
  };

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content dangerouslySetInnerHTML={descHtml} />
      <Meta>
        <span>Tags:</span> {tags}
      </Meta>
      <Links>
        <Link href={demoLink}>
          <ExternalLinkIcon height={'22px'} width={'22px'} />
          <span>View</span>
        </Link>
        <Link href={repositoryLink}>
          <GithubIcon height={'20px'} width={'20px'} />
          <span>Code</span>
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

CodeItem.defaultProps = {
  color: '--text-color1',
};

export default CodeItem;