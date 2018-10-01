import styled from 'styled-components';

export const MaxContainer = styled.section`
    width:100%;
    max-width:900px;
    padding: 50px 20px;
    margin:0 auto;
    box-sizing:border-box;

    @media (max-width: 600px) {
        padding: 30px 20px;
    }
`;