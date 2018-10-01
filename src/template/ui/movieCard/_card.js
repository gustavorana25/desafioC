import { Link } from 'react-router-dom'

import styled from 'styled-components';
import { colors, animations } from '../../styles';

export const Card = styled(Link)`
    text-decoration:none;
    width:100%;
    display:flex;
    margin-bottom:42px;
    align-items: flex-start;
    cursor:pointer;
    background: ${colors.lightSecondary}
    opacity:0;
    transform:translate(0,30px);
    animation: ${animations.FadeInCenter} 0.6s cubic-bezier(0, 0.87, 0.58, 1) forwards;

    &:nth-of-type(2){
        animation-delay:0.1s;
    }
    &:nth-of-type(3){
        animation-delay:0.2s;
    }
    &:nth-of-type(4){
        animation-delay:0.3s;
    }
    &:nth-of-type(5){
        animation-delay:0.4s;
    }

    @media (max-width: 600px) {
       flex-direction:column;
       padding-bottom:16px;
    }
`;