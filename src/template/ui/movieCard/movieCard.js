import React from 'react';
import styled from 'styled-components';

import { colors, fonts } from '../../styles';


export const Card = styled.article`
    width:100%;
    display:flex;
    margin-bottom:42px;
    align-items: flex-start;
`;

export const Poster = styled.img`
    width:200px;
    height:auto;
`;

export const MoviewInfo = styled.div`
    width:100%;
`;
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
`;
export const Title = styled.h1`
  font-size: 40px;
  font-family: ${fonts.primary};
  color: ${colors.lightPrimary};
  background: ${colors.primary};
  padding:26px 0 10px 100px;
`;

export const Date = styled.h2`
    padding-left: 100px;
`;


export const MovieCard = (props) => {
    const { title, vote_average, overview, poster_path, release_date} = props.data;
    return(
    <Card>
        <Poster src={"https://image.tmdb.org/t/p/w342/" + poster_path} />
        <MoviewInfo>
            <HeaderInfo>
                <Popularity>{vote_average*10}%</Popularity>
                <Title>{title}</Title>
                <Date>{release_date}</Date>
            </HeaderInfo>
        </MoviewInfo>
    </Card>
)}