import React from 'react';
import './Deals.css';
const Deals = (props) => {
    const { left, onActive, onCompleted, onAll, onCelar } = props;

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

export default Deals;
