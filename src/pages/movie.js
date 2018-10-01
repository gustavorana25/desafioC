import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { movieDetailRequest } from "../store/ducks/movies";

import { formatBrazilianDate } from '../helpers/dateHelpers/formatBrazilianDate';
import TagsList from '../components/tagsList/tagsList';
import { BackButton } from '../template/ui/backButton/backButton';
import { HeaderMovie } from '../template/ui/moviePage/headerMovie';
import { MovieTitle } from '../template/ui/moviePage/movieTitle';
import { Date } from '../template/ui/moviePage/date';
import { MovieDetails } from '../template/ui/moviePage/movieDetails';
import { Wrapper } from '../template/ui/moviePage/wrapper';
import { Poster } from '../template/ui/moviePage/poster';
import { InfoTitle } from '../template/ui/moviePage/infoTitle';
import { Overview } from '../template/ui/moviePage/overview';
import { OtherInfos } from '../template/ui/moviePage/otherInfos';
import { WrapperInfo } from '../template/ui/moviePage/wrapperInfo';
import { OtherInfoTitle } from '../template/ui/moviePage/otherInfoTitle';
import { OtherInfoValue } from '../template/ui/moviePage/otherInfoValue';
import { Popularity } from '../template/ui/moviePage/popularity';

class PageMovies extends Component {
    componentWillMount(){
        window.scrollTo(0,0);
    }

    componentDidMount() {
        const { match, movies, movieDetailRequest} = this.props;
        if (!movies.all[match.params.id]){
            movieDetailRequest(match.params.id);
        }
    }

    render() {
        const { id } = this.props.match.params;
        const selectedMovie = this.props.movies.all[id];
        return (
           <section>
                <BackButton to="/">Voltar</BackButton>
                
                {selectedMovie && (
                    <article>
                        <HeaderMovie>
                            <MovieTitle>{selectedMovie.title}</MovieTitle>
                            <Date>{formatBrazilianDate(selectedMovie.release_date)}</Date>
                        </HeaderMovie>
                        <MovieDetails>
                            <Wrapper>
                                <InfoTitle>Sinopse</InfoTitle>
                                <Overview>{selectedMovie.overview}</Overview>
                                <InfoTitle>Informações</InfoTitle>
                                <OtherInfos>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Situação</OtherInfoTitle>
                                        <OtherInfoValue>{selectedMovie.status}</OtherInfoValue>
                                    </WrapperInfo>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Idioma</OtherInfoTitle>
                                        <OtherInfoValue>{selectedMovie.original_language}</OtherInfoValue>
                                    </WrapperInfo>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Duração</OtherInfoTitle>
                                        <OtherInfoValue>{selectedMovie.runtime}min</OtherInfoValue>
                                    </WrapperInfo>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Orçamento</OtherInfoTitle>
                                        <OtherInfoValue>${selectedMovie.budget}</OtherInfoValue>
                                    </WrapperInfo>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Receita</OtherInfoTitle>
                                        <OtherInfoValue>${selectedMovie.revenue}</OtherInfoValue>
                                    </WrapperInfo>
                                    <WrapperInfo>
                                        <OtherInfoTitle>Lucro</OtherInfoTitle>
                                        <OtherInfoValue>${selectedMovie.revenue - selectedMovie.budget}</OtherInfoValue>
                                    </WrapperInfo>
                                </OtherInfos>
                                <TagsList noPadding="true" ids={selectedMovie.genres.map(genre=>genre.id)} />
                                <Popularity>{selectedMovie.vote_average*10}%</Popularity>
                            </Wrapper>
                            <Poster src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.poster_path} />
                        </MovieDetails>
                    </article>
                )}
            </section>
        )
    }
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => bindActionCreators({ movieDetailRequest }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageMovies);