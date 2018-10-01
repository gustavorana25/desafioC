import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const MovieTitle = styled.h1`
    font-family: ${fonts.primary};
    font-size:32px;
    color: ${colors.primary};
    @media (max-width: 600px) {
        font-size: 24px;
        margin-bottom: 4px;
    }
`;