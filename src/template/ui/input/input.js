import styled from 'styled-components';

import { colors, fonts } from '../../styles';

export const Input = styled.input`
    width:100%;
    font-size: 17px;
    font-family: ${fonts.primary};
    color: ${colors.primary};
    background: ${colors.lightSecondary};
    border:none;
    padding:16px 32px;
    border-radius:40px;
    outline:0;
    border:1px solid transparent;
    box-sizing:border-box;
  
    &:focus{
        border:1px solid ${colors.secondary};
    }
`;