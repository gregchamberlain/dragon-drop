import React, { Component } from 'react';
import { merge } from 'lodash';
import { ChromePicker } from 'react-color';
import ColorInput from './inputs/color';

const string = ({value, onChange}) => (
  <input type="text" onChange={e => onChange(e.target.value)} value={value} />
);

string.defaultValue = "";

const text = ({value, onChange}) => (
  <textarea onChange={e => onChange(e.target.value)} value={value} />
);

text.defaultValue = "";

const number = ({value, onChange}) => (
  <input type="number" onChange={e => onChange(parseInt(e.target.value))} value={value} />
);

number.defaultValue = 0;

const select = (...options) => ({value, onChange}) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => <option value={option} key={option}>{option}</option>)}
  </select>
);

const bool = ({value, onChange}) => (
  <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
);

bool.defaultValue = false;

const array = inputType => ({value, onChange}) => (
  <List value={value} onChange={onChange} inputType={inputType}/>
);

array.defaultValue = []

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
    this.setState({items: this.state.items.concat(this.props.inputType.defaultValue)}, () => {
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
          <li key={`item-${idx}`} style={styles.li}>
            <div style={styles.arrInputs}>
              <this.props.inputType value={item} onChange={this.onChange(idx)} />
            </div>
            <span onClick={this.removeItem(idx)} style={styles.remove}>&times;</span>
          </li>
        ))}
        <li><div onClick={this.addItem} style={styles.add}>Add Item</div></li>
      </ul>
    );
  }
}

const object = inputTypes => {
  const InputWrapper = ({value, onChange}) => (
    <ObjectInput onChange={onChange} value={value} inputTypes={inputTypes}/>
  )
  const defaultValue = {};
  Object.keys(inputTypes).forEach(key => {
    defaultValue[key] = inputTypes[key].defaultValue
  });
  InputWrapper.defaultValue = defaultValue;
  return InputWrapper;
};


class ObjectInput extends Component {
  constructor(props) {
    super(props);
    this.state = props.value;
  }

  onChange = key => val => {
    const nextState = merge({}, this.state);
    nextState[key] = val;
    this.setState(nextState, () => {
      this.props.onChange(this.state);
    })
  }

  render() {
    const { inputTypes } = this.props;
    return (
      <div>
        {Object.keys(inputTypes).map(key => {
          const Input = inputTypes[key];
          return (
            <label key={`input${key}`}>
              {key}
              <Input value={this.state[key]} onChange={this.onChange(key)}/>
            </label>
          );
        })}
      </div>
    );
  }
}

const color = ({value, onChange}) => (
  <ColorInput value={value} onChange={onChange}/>
);

export const colorToString = color => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}

export const shadowToString = obj => (
  `${obj.xOffset}px ${obj.yOffset}px ${obj.blurRadius}px ${colorToString(obj.color)}`
);

const styles = {
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    border: '1px solid #ccc',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    margin: 2
  },
  remove: {
    fontSize: 20,
    marginLeft: 5,
    cursor: 'pointer'
  },
  add: {
    background: '#eee',
    padding: 5,
    borderRadius: 5,
    color: '#444',
    fontSize: 12,
    cursor: 'pointer'

  }
}

export default {
  string,
  text,
  number,
  select,
  bool,
  array,
  object,
  color
};
