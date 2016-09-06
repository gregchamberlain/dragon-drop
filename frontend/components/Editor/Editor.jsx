import React, { Component } from 'react';
import { connect } from 'react-redux';
import Catalog from '../../catalog';
import { updateProps } from '../../actions/component_actions';
import { closeEditor } from '../../actions/editor_actions.js';
import Close from 'react-icons/lib/fa/close';

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state = props.props;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.props.close();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.props) {
      this.setState(newProps.props);
    }
  }

  update = (name) => {
    return (val) => {
      this.setState({[name]: val}, () => {
        this.props.update(this.props.id, this.state);
      });
    }
  }

  render() {

    const inputs = Object.keys(this.props.inputTypes).map(label => {
      const Input = this.props.inputTypes[label];
      return (
        <div key={label} style={{textAlign: 'center'}}>
          {label.charAt(0).toUpperCase() + label.slice(1)}<br/>
          <Input value={this.state[label]} onChange={this.update(label)}/>
        </div>
      )
    });

    return (
      <div className='props-editor'>
        <div style={styles.header}>
          <div style={{flex: 1, textAlign: 'center'}}>{this.props.item && this.props.item.name}</div>
          <Close onClick={this.props.close} style={{cursor: 'pointer', position: 'absolute', top: 5, right: 5, fontSize: 12}}/>
        </div>
        {inputs}
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 40,
    right: 40,
    // bottom: 40,
    padding: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(68,68,68, 1)',
    borderRadius: 5,
    boxShadow: '0 0 10px black',
    color: '#eee'
  },
  header: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontSize: 24,
    paddingBottom: 15
  }
};

const mapStateToProps = ({editor: { current }, components}) => ({
  item: components[current],
  id: current,
  props: components[current] && components[current].props,
  inputTypes: components[current] && Catalog[components[current].name].inputTypes || {},
});

const mapDispatchToProps = dispatch => ({
  update: (i, props) => dispatch(updateProps(i, props)),
  close: () => dispatch(closeEditor()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
