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
        <label key={label} style={{textAlign: 'center'}}>
          {label.charAt(0).toUpperCase() + label.slice(1)}<br/>
          <Input value={this.state[label]} onChange={this.update(label)}/>
        </label>
      )
    });

    return (
      <div style={styles.container}>
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
    position: 'fixed',
    top: 96,
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

const mapStateToProps = state => ({
  item: state.components[state.editor],
  id: state.editor,
  props: state.components[state.editor] && state.components[state.editor].props,
  inputTypes: state.components[state.editor] && Catalog[state.components[state.editor].name].inputTypes || {},
});

const mapDispatchToProps = dispatch => ({
  update: (i, props) => dispatch(updateProps(i, props)),
  close: () => dispatch(closeEditor()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
