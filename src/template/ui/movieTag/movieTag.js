import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const Tag = styled.span`
    border:1px solid ${colors.primary};
    border-radius: 20px;
    padding: 4px 12px;
    font-family ${fonts.primary};
    color: ${colors.primary};
    background: white;
    margin: 0 10px 10px 0;
`;

export const ListTag = styled.span`
    display:flex;
    flex-wrap:wrap;
    padding: ${props => props.noPadding ? "0" : "0 24px"};
`;