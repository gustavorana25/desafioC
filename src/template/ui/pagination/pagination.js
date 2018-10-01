import styled from 'styled-components';
import { fonts } from '../../styles';

import paginationButtonTypes from './_types';

export const Pagination = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:70px;

    @media (max-width: 600px) {
         margin-top:40px;
    }
`;

export const Page = styled.span`
    font-family ${fonts.primary};
    cursor:pointer;
    transition: all ease-in-out 0.3s;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height: 30px;
    ${paginationButtonTypes}
`;