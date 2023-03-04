import React, { Component } from 'react'
import './AddItem.css'
class AddItem extends Component {
  state = {
    label: '',
    min: 0,
    sec: 0,
  }
  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    })
  }
  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label.match(/[\w]/) && this.state.min.match(/[\d]/) && this.state.sec.match(/[\d]/)) {
      this.props.addItem(this.state)
      this.setState({
        label: '',
      })
    } else alert('Вы пытаетесь не верное')
  }
  render() {
    return (
      <form className={'add'} onSubmit={this.onSubmit}>
        <div className="inputs">
          <input
            className={'add-text'}
            type="text"
            placeholder={'Add new item...'}
            onChange={this.onLableChange}
            value={this.state.label}
          />
          <div className="timer">
            <div className="">min</div>
            <input type="text" placeholder={'min'} value={this.state.min} onChange={this.onMinChange} />
            <div className="">sec</div>
            <input type="text" value={this.state.sec} placeholder={'sec'} onChange={this.onSecChange} />
          </div>
        </div>
        <button className={'button-add'}>Add new item</button>
      </form>
    )
  }
}

export default AddItem
