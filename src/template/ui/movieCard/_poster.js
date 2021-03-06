import styled from 'styled-components';

export const Poster = styled.img`
    width:200px;
    height:auto;
    
    @media (max-width: 600px) {
       width: 100%;
        height: 190px;
        object-fit: cover;
        object-position: center;
    }
`;