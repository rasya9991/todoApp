import React, { useState } from 'react';
import './AddItem.css';
const AddItem = (props) => {
  const [label,setLabel] = useState('')
  const [min,setMin] = useState(0)
  const [sec,setSec] = useState(0)

  const onLableChange = (e) => {
    setLabel(e.target.value)
  };
  const onMinChange = (e) => {
    setMin(e.target.value)
  };
  const onSecChange = (e) => {
    setSec(e.target.value)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (label.match(/[\w]/) ) {
      props.addItem({label,min,sec});
      setLabel('')
    } else alert('Вы пытаетесь не верное');
  };
    return (
      <form className={'add'} onSubmit={onSubmit}>
        <div className="inputs">
          <input
            className={'add-text'}
            type="text"
            placeholder={'Add new item...'}
            onChange={onLableChange}
            value={label}
          />
          <div className="timer">
            <div className="">min</div>
            <input type="text" placeholder={'min'} value={min} onChange={onMinChange} />
            <div className="">sec</div>
            <input type="text" value={sec} placeholder={'sec'} onChange={onSecChange} />
          </div>
        </div>
        <button className={'button-add'}>Add new item</button>
      </form>
    );
}

export default AddItem;
