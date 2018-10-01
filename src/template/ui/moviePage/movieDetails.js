import styled from 'styled-components';
import { colors } from '../../styles';

export const MovieDetails = styled.div`
    display:flex;
    align-items:flex-start;
    background: ${colors.veryLightSecondary};

    @media (max-width: 600px) {
        flex-direction: column;
        padding-bottom:20px;
    }
`;