import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const HeaderInfo = styled.header`
    position:relative; 
`;

export const Popularity = styled.div`
    position: absolute;
    top:30px;
    left:14px;
    width:70px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background: ${colors.primary};
    border:3px solid ${colors.primary};
    box-shadow: inset 0 0 0 4px ${colors.lightPrimary};
    color: ${colors.lightPrimary};
    font-size:25px;
    font-family: ${fonts.primary};

    @media(max-width:600px){
        top:4px;
    }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: ${fonts.primary};
  color: ${colors.lightPrimary};
  background: ${colors.primary};
  padding:26px 0 10px 100px;

  @media(max-width:600px){
      font-size:24px;
      padding:10px 0 10px 100px;
  }
`;

export const Date = styled.h2`
    padding-left: 100px;
    font-size:18px;
    font-family: ${fonts.primary};
    color: ${colors.secondary};
    margin-top:8px;
`;