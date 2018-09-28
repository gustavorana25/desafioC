import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../template/colors';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.textPrimary};
`;

const Wrapper = styled.header`
  padding: 4em;
  background: ${colors.primary};
`;

const Header = () => (
    <Wrapper>
        <Title>Movies</Title>  
    </Wrapper>
)

export default Header;