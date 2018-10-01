import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchRequest, discoverRequest } from "../../store/ducks/movies";

import { Input } from '../../template/ui/input/input';

class Search extends Component {
  componentWillMount(){
    this.timer = null;
  }
  
  handleChanges(event){
    const searchInput = event.target.value;
    clearTimeout(this.timer);
    
    this.timer = setTimeout(() => {
      if (searchInput !== "")
        this.props.searchRequest(searchInput);
      else
        this.props.discoverRequest();
    }, 250);
  }

  render() {
    return (
      <Input
        placeholder="Busque um filme por nome, ano ou gênero"
        ref="search"
        onChange={(e) => this.handleChanges(e)}
      ></Input>
    )
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ searchRequest, discoverRequest}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);