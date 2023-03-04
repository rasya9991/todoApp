import React, { Component } from 'react';

import './style.css';
import Title from './Components/Title/Title';
import Search from './Components/Search/Search';
import Tasklist from './Components/Tasklist/Tasklist';
import Deals from './Components/Deals/Deals';
import AddItem from './Components/AddItem/AddItem';

class App extends Component {
  debounce = (fn, throttleTime) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, throttleTime);
    };
  };
  createItem = (state) => {
    const { label, min, sec } = state;
    return {
      label,
      min,
      sec,
      important: false,
      done: false,
      hide: false,
      time: Date.now(),
      id: this.ids++,
    };
  };
  ids = 0;
  state = {
    todos: [],
  };

  onInputChange = (id, label) => {
    this.setState(({ todos }) => {
      const newArr = JSON.parse(JSON.stringify(todos));
      const result = [];
      newArr.forEach((el) => {
        if (el.id == id) {
          el.label = label;
          result.push(el);
        } else {
          result.push(el);
        }
      });
      return {
        todos: result,
      };
    });
  };
  makeDone = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => {
        return el.id == id;
      });
      const oldItem = todos[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      let newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

      return {
        todos: newArr,
      };
    });
  };

  makeImportant = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => {
        return el.id == id;
      });
      const oldItem = todos[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      let newArr = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];

      return {
        todos: newArr,
      };
    });
  };
  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const result = todos.filter((el) => {
        return el.id !== id;
      });
      return {
        todos: result,
      };
    });
  };
  activeItems = () => {
    this.setState(({ todos }) => {
      const newArr = JSON.parse(JSON.stringify(todos));
      newArr.map((el) => {
        el.hide = false;
        if (el.done) {
          el.hide = true;
        }
      });

      return {
        todos: newArr,
      };
    });
  };
  allItems = () => {
    this.setState(({ todos }) => {
      const newArr = JSON.parse(JSON.stringify(todos));
      newArr.map((el) => {
        el.hide = false;
      });
      return {
        todos: newArr,
      };
    });
  };

  completedItems = () => {
    this.setState(({ todos }) => {
      const newArr = JSON.parse(JSON.stringify(todos));
      newArr.map((el) => {
        el.hide = false;
        if (!el.done) {
          el.hide = true;
        }
      });
      return {
        todos: newArr,
      };
    });
  };

  searchItems = (e) => {
    this.setState(({ todos }) => {
      const newArr = JSON.parse(JSON.stringify(todos));
      newArr.map((el) => {
        if (e.target.value.match(/[\w]/)) {
          if (!el.label.match(e.target.value)) {
            el.hide = true;
          }
        } else {
          el.hide = false;
        }
      });
      return {
        todos: newArr,
      };
    });
  };

  clearComplited = () => {
    this.setState(({ todos }) => {
      const result = [];
      const newArr = JSON.parse(JSON.stringify(todos));

      newArr.forEach((el) => {
        if (!el.done) {
          result.push(el);
        }
      });

      return {
        todos: result,
      };
    });
  };

  addItems = (state) => {
    // const {label : text,min,sec} = state
    let newItem = this.createItem(state);
    this.setState(({ todos }) => {
      let fanArr = JSON.parse(JSON.stringify(todos));
      const newArr = [...fanArr, newItem];
      return {
        todos: newArr,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <Title />
        <AddItem addItem={this.addItems} debounce={this.debounce} />
        <Tasklist
          todos={this.state.todos}
          onDeleted={this.deleteItem}
          makeDone={this.makeDone}
          makeImportant={this.makeImportant}
          labelChange={this.onInputChange}
        />
        <Deals
          left={
            this.state.todos.filter((el) => {
              return el.done !== true;
            }).length
          }
          onActive={this.activeItems}
          onCompleted={this.completedItems}
          onAll={this.allItems}
          todos={this.state}
          onCelar={this.clearComplited}
        />
        <Search searchFn={this.searchItems} />
      </div>
    );
  }
}

export default App;
