import React, { Component } from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
class Task extends Component {
  getPadTime = (time) => {
    return time.toString().padStart(2, '0')
  }
  state = {
    label: '',
    inputHide: false,
    min: this.getPadTime(this.props.min),
    sec: this.getPadTime(this.props.sec),
    shouldTimerWork: true,
    timerId: 0,
  }

  hideInput = (e) => {
    e.preventDefault()
    this.props.onLabelChange(this.state.label)
    this.setState(() => {
      return {
        inputHide: false,
      }
    })
  }
  showInput = (e) => {
    e.preventDefault()

    this.setState(() => {
      return {
        shouldTimerWork: true,
        inputHide: true,
      }
    })
  }

  componentDidMount() {
    this.setState({
      label: this.props.label,
    })
    const timer = setInterval(() => {
      this.setState(({ min, sec, shouldTimerWork }) => {
        if (shouldTimerWork) {
          return {
            timerId: timer,
            min: sec === 0 && min>0 ? this.getPadTime(min - 1) : min,
            sec: sec > 0 ? this.getPadTime(sec - 1) : min > 0 ? 59 : this.getPadTime(0),
          }
        }
      })
    }, 1000)
  }

  render() {
    const { onDeleted, makeDone, makeImportant, done, important, hide, time } = this.props
    const { label, inputHide } = this.state
    let divClass = 'tasklist-item'
    let textClass = 'tasklist-item__text'
    let buttonClass = 'tasklist-item__button button__select'
    let inputClass = 'input2'
    if (done) {
      textClass += ' done'
      buttonClass += ' button--done'
    }
    if (important) {
      textClass += ' important'
    }
    if (hide) {
      divClass += ' hide'
    }
    if (!inputHide) {
      inputClass += ' hide'
    }
    return (
      <div className={divClass}>
        <form action="" onSubmit={this.hideInput}>
          <input
            type="text"
            className={inputClass}
            value={this.state.label}
            onChange={(e) => {
              this.setState({
                label: e.target.value,
              })
            }}
            onBlur={this.hideInput}
          />
        </form>
        <label className={'label'} onClick={makeDone}>
          <button className={buttonClass}></button>
          <div className="test">
            <span className={textClass} onClick={makeDone}>
              {label}
            </span>
            <span className={'hello'}>{formatDistanceToNow(time)}</span>
          </div>
          <div className="time-info">
            <div className="timer">{`${this.state.min}:${this.state.sec}`}</div>
          </div>
        </label>

        <div className="buttons">
          <button className={'tasklist-item__button'}>
            <span className={'fa fa-pencil'} onClick={this.showInput}></span>
          </button>
          <button className={'tasklist-item__button button__important'} onClick={makeImportant}>
            <span className={'fa fa-star-o'}></span>
          </button>
          <button className={'tasklist-item__button button__delete'} onClick={onDeleted}>
            <span className={'fa fa-trash-o'}></span>
          </button>
          <button
            onClick={() => {
              this.setState({
                shouldTimerWork: false,
              })
            }}
          >
            stop
          </button>
          <button
            onClick={() => {
              this.setState({
                shouldTimerWork: true,
              })
            }}
          >
            start
          </button>
        </div>
      </div>
    )
  }
}

export default Task;
