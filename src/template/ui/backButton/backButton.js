import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fonts } from '../../styles';

export const BackButton = styled(Link) `
    position: absolute;
    top: 11px;
    left: 0px;
    color: white;
    font-family: ${fonts.primary};
    font-size: 17px;
    text-decoration: none;
    padding: 20px;

    @media (max-width:600px){
        padding: 6px 20px;
    }
`;