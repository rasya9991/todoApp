import React from 'react';

import Task from '../Task/Task';
import './Tasklist.css';
const Tasklist = (props) => {
    const { todos, onDeleted, makeDone, makeImportant, labelChange } = props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <Task
            onLabelChange={(label) => {
              labelChange(id, label);
            }}
            {...itemProps}
            onDeleted={() => {
              onDeleted(id);
            }}
            makeDone={() => makeDone(id)}
            makeImportant={() => makeImportant(id)}
          />
        </li>
      );
    });
    return <ul className={'tasklist'}>{elements}</ul>;
}

export default Tasklist;
