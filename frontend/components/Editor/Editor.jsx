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

    const inputs = Object.keys(this.props.inputTypes).map(label => (
      <label key={label} style={{textAlign: 'center'}}>
        {label.charAt(0).toUpperCase() + label.slice(1)}<br/>
        {this.props.inputTypes[label](this.state[label], this.update(label))}
      </label>
    ));

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={{flex: 1, textAlign: 'center'}}>Editor</div>
          <Close onClick={this.props.close} style={{cursor: 'pointer'}}/>
        </div>
        <h3>{this.props.item && this.props.item.name}</h3>
        {inputs}
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    background: 'rgba(200,200,200,0.8)',
    boxShadow: '0 0 10px black'
  },
  header: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    fontSize: 24,
    padding: 5
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
