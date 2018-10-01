import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const Date = styled.h2`
    font-family: ${fonts.primary};
    font-size:18px;
    color: ${colors.secondary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;