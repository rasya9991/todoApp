import React, { Component } from 'react'
import './AddItem.css'
class AddItem extends Component {
  state = {
    label: '',
  }
  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label.match(/[\w]/)) {
      this.props.addItem(this.state.label)
      this.setState({
        label: '',
      })
    } else alert('Вы пытаетесь добавить пустое событие')
  }
  render() {
    return (
      <form className={'add'} onSubmit={this.onSubmit}>
        <input
          className={'add-text'}
          type="text"
          placeholder={'Add new item...'}
          onChange={this.onLableChange}
          value={this.state.label}
        />
        <button className={'button-add'}>Add new item</button>
      </form>
    )
  }
}

export default AddItem
