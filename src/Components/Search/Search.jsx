import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
  render() {
    const { searchFn } = this.props;
    return (
      <div className={'search'}>
        <input type="text" placeholder={'Search item...'} onChange={searchFn} />
      </div>
    );
  }
}

export default Search;
