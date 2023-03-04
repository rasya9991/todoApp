import React, { Component } from 'react';
import './Deals.css';
class Deals extends Component {
  render() {
    const { left, onActive, onCompleted, onAll, onCelar } = this.props;

    let defaultFilterBtn = 'filter-button';
    let defaultFilterBtnAll = 'filter-button';

    return (
      <div className={'deals'}>
        <span className={'deals-text'}>{`${left} items left`}</span>
        <label>
          <input type={'radio'} className={'radio-button'} name={'selector'} />
          <span
            className={defaultFilterBtnAll}
            onClick={() => {
              onAll();
            }}
          >
            All
          </span>
        </label>
        <label
          onClick={() => {
            onActive();
          }}
        >
          <input type={'radio'} className={'radio-button'} name={'selector'} />
          <span className={defaultFilterBtn}>Active</span>
        </label>
        <label
          onClick={() => {
            onCompleted();
          }}
        >
          <input type={'radio'} className={'radio-button'} name={'selector'} />
          <span className={defaultFilterBtn}>Completed</span>
        </label>
        <label
          className={'clear'}
          onClick={() => {
            onCelar();
          }}
        >
          <button className={'button clear'}>Clear</button>
        </label>
      </div>
    );
  }
}

export default Deals;
