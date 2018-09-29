import React from 'react';

import { formatBrazilianDate } from '../../../helpers/dateHelpers/formatBrazilianDate';
import { limitChars } from '../../../helpers/textHelpers/limitChars';

import { Card } from './_card';
import { Poster } from './_poster';
import { MoviewInfo } from './_movieInfo';
import { HeaderInfo, Popularity, Title, Date } from './_headerInfo';
import { Overview } from './_overview';
import TagsList from '../../../components/tagsList/tagsList';

export const MovieCard = (props) => {
    const { title, vote_average, overview, poster_path, release_date, genre_ids} = props.data;
    return(
        <Card>
            <Poster src={"https://image.tmdb.org/t/p/w500/" + poster_path} />
            <MoviewInfo>
                <HeaderInfo>
                    <Popularity>{vote_average*10}%</Popularity>
                    <Title>{title}</Title>
                    <Date>{formatBrazilianDate(release_date)}</Date>
                </HeaderInfo>
                <Overview>{limitChars(overview,350)}</Overview>
                <TagsList ids={genre_ids} />
            </MoviewInfo>
        </Card>
    )
}