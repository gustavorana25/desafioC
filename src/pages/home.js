import React, {Component} from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { discoverRequest, Creators as movieActions } from "../store/ducks/movies";

import Search from '../components/inputSearch/inputSearch';
import { MaxContainer } from '../template/ui/maxContainer/maxContainer';
import { MovieCard } from '../template/ui/movieCard/movieCard';
import { MoviesList } from '../template/ui/moviesList/moviesList';
import { Pagination, Page } from '../template/ui/pagination/pagination';
import { ArrayOfPages } from '../helpers/listHelpers/arrayPagesForPagination';

class HomePage extends Component{
    componentDidMount(){
        if (!this.props.movies.movies)
            this.props.discoverRequest();
    }

    render() {
        const { movies, page } = this.props.movies;
        
        return (
            <MaxContainer>
                <Search></Search>
                <MoviesList>
                    {movies && 
                        movies
                        .results
                        .slice(page * 5, (page+1)*5)
                        .map(movie=>(
                            <MovieCard 
                                to={"/filme/"+movie.id}
                                key={movie.id} 
                                data={movie} 
                            />
                        ))}
                </MoviesList>
                <Pagination>
                    {movies && ArrayOfPages(movies.results, 5).map(pageLink => (
                        <Page 
                            key={pageLink} 
                            onClick={() => {this.props.movieChangePage(pageLink-1)}} 
                            type={(pageLink - 1) === page ? 'selected' : 'default'}
                        >{pageLink}</Page>
                    ))}
                </Pagination>
            </MaxContainer>
        )
    }
}

const mapStateToProps = state => ({ movies: state.movies});
const mapDispatchToProps = dispatch => bindActionCreators({ discoverRequest, ...movieActions}, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);