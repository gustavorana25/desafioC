import styled from 'styled-components';
import { colors } from '../../styles';

export const HeaderMovie = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:70px;
    margin-top:42px;
    padding:0 32px;
    background: ${colors.lightSecondary};

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 13px 20px;
        margin-top: 0;
        height:auto;
    }
`;