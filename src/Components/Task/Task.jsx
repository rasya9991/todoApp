import React, { Component } from 'react'
import './Task.css'
import { formatDistanceToNow } from 'date-fns'
class Task extends Component {
  state = {
    label: '',
    inputHide: false,
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
      console.log('he')

      return {
        inputHide: true,
      }
    })
  }

  componentDidMount() {
    this.setState({
      label: this.props.label,
    })
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
        <label className={'label'}>
          <button className={buttonClass}></button>
          <span className={textClass} onClick={makeDone}>
            {label}
          </span>
          <span className={'hello'}>{formatDistanceToNow(time)}</span>
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
        </div>
      </div>
    )
  }
}

export default Task
