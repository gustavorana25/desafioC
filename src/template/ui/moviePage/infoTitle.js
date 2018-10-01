import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const InfoTitle = styled.h3`
    font-family: ${fonts.primary};
    font-size:22px;
    color: ${colors.primary};
    padding-bottom:4px;
    border-bottom: 2px solid ${colors.lightPrimary};
    margin-bottom:16px;
`;