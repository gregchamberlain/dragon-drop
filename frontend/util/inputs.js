import React, { Component } from 'react';
import { merge } from 'lodash';

const string = ({value, onChange}) => (
  <input type="text" onChange={e => onChange(e.target.value)} value={value} />
);

const text = ({value, onChange}) => (
  <textarea onChange={e => onChange(e.target.value)} value={value} />
);

const number = ({value, onChange}) => (
  <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
);

const select = (...options) => ({value, onChange}) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

const array = inputType => ({value, onChange}) => (
  <List value={value} onChange={onChange} inputType={inputType}/>
);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.value
    }
  }

  onChange = idx => val => {
    let nextState = merge({}, this.state);
    nextState.items[idx] = val;
    this.setState(nextState, () => {
      this.props.onChange(this.state.items);
    });
  }

  addItem = () => {
    this.setState({items: this.state.items.concat("")}, () => {
      this.props.onChange(this.state.items);
    });
  }

  removeItem = idx => () => {
    let nextState = merge({}, this.state);
    nextState.items.splice(idx, 1);
    this.setState(nextState, () => {
      this.props.onChange(this.state.items);
    });
  }

  render() {
    return (
      <ul style={styles.ul}>
        {this.state.items.map((item, idx) => (
          <li key={`item-${idx}`}>
            <this.props.inputType value={item} onChange={this.onChange(idx)} />
            <span onClick={this.removeItem(idx)}>&times;</span>
          </li>
        ))}
        <li><button onClick={this.addItem}>Add Item</button></li>
      </ul>
    );
  }
}

const styles = {
  ul: {
    listStyle: 'none',
    padding: 0
  }
}

export default {
  string,
  text,
  number,
  select,
  array
};
