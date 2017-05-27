import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Parts/Icon';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icons = [
  {
    name: 'linkedIn',
    url: '//www.linkedin.com/in/robinsonkameron',
    fill: '#fff'
  },
  {
    name: 'twitter',
    url: '//www.twitter.com/kameronar',
    fill: '#fff'
  },
  {
    name: 'github',
    url: '//www.github.com/robinsonkameron',
    fill: '#fff'
  },
];

const SocialBar = (props) => {
  return (
    <FlexRow>
      {Icons.map((icon) => (
        <a href={icon.url} target='_blank'>
          <Icon name={icon.name} fill={icon.fill}/>
        </a>
      ))}
    </FlexRow>
  );
};

export default SocialBar;
