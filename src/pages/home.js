import React, {Component} from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Search from '../components/inputSearch/inputSearch';
import { MaxContainer } from '../template/ui/maxContainer/maxContainer';
import { MovieCard } from '../template/ui/movieCard/movieCard';
import { MoviesList } from '../template/ui/moviesList/moviesList';
import { discoverRequest } from "../store/ducks/movies";

class HomePage extends Component{
    componentDidMount(){
        this.props.discoverRequest();
    }

    render() {
        const { movies } = this.props.movies;
        console.log(movies);
        return (
            <MaxContainer>
                <Search></Search>
                <MoviesList>
                    {movies && movies.results.map(movie=>(
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </MoviesList>
            </MaxContainer>
        )
    }
}

const mapStateToProps = state => ({ movies: state.movies});
const mapDispatchToProps = dispatch => bindActionCreators({ discoverRequest }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);