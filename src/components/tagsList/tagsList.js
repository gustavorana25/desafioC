import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { genresRequest } from "../../store/ducks/genre";

import { ListTag, Tag } from '../../template/ui/movieTag/movieTag';

class TagsList extends Component {
    componentDidMount() {
        this.props.genresRequest();
    }

    render() {
        const { ids, noPadding } = this.props;
        const { genres } = this.props.genres;
        return (
            <ListTag noPadding={noPadding}>
                {ids.map(id=>(
                    <Tag key={id}>{genres && genres[id]}</Tag>
                ))}
            </ListTag>
        )
    }
}

const mapStateToProps = state => ({genres: state.genre });
const mapDispatchToProps = dispatch => bindActionCreators({genresRequest}, dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagsList);