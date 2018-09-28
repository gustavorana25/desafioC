import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../template';

const Title = styled.h1`
  font-size: 32px;
  font-family: ${fonts.primary};
  text-align: center;
  color: ${colors.textPrimary};
`;

const Wrapper = styled.header`
  padding: 25px;
  background: ${colors.primary};
`;

const Header = () => (
    <Wrapper>
        <Title>Movies</Title>  
    </Wrapper>
)

export default Header;