import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styles';

const Title = styled.h1`
  font-size: 32px;
  font-family: ${fonts.primary};
  text-align: center;
  color: ${colors.lightPrimary};

  @media (max-width: 600px) {
     font-size:28px;
  }
`;

const Wrapper = styled.header`
  padding: 25px;
  background: ${colors.primary};
  @media (max-width: 600px) {
     padding:10px;
  }
`;

const Header = () => (
    <Wrapper>
        <Title>Movies</Title>  
    </Wrapper>
)

export default Header;