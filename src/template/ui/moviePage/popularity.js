import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const Popularity = styled.div`
    width:108px;
    height:108px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background: ${colors.primary};
    border:4px solid ${colors.primary};
    box-shadow: inset 0 0 0 7px ${colors.lightPrimary};
    color: ${colors.lightPrimary};
    font-size:38px;
    font-family: ${fonts.primary};
    margin-left:auto;

    @media(max-width:600px){
        margin: 15px 0px;
    }
`;
