import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { movieDetailRequest } from "../store/ducks/movies";

import { BackButton } from '../template/ui/backButton/backButton';

class TagsList extends Component {
    componentDidMount() {
        const { match, movies, movieDetailRequest} = this.props;
        if (!movies.all[match.params.id]){
            movieDetailRequest(match.params.id);
        }
    }

    render() {
        return (
           <div>
                <BackButton to="/">Voltar</BackButton>
           </div>
        )
    }
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => bindActionCreators({ movieDetailRequest }, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagsList);