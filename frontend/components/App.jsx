import React, { Component } from 'react';
import GridLayout from './GridLayout';
import { connect } from 'react-redux';
import { saveLayout } from '../actions/layout_actions.js';
import { addItem } from '../actions/item_actions.js';
import * as Catalog from '../catalog';
import CatalogContainer from './Catalog';
import Editor from './Editor/Editor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locked: false,
    };
  }

  lockGrid() {
    this.setState({locked: !this.state.locked});
  }

  render() {
    return (
      <div style={styles.container}>
        <CatalogContainer />
        <div style={styles.main}>
          <h1>Square Space</h1>
          <button onClick={this.lockGrid.bind(this)}>{this.state.locked ? "Unlock" : "Lock"}</button>
          <button onClick={this.props.saveLayout}>Save</button>
          <GridLayout locked={this.state.locked}/>
        </div>
        { this.props.editor ? <Editor /> : "" }
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
  },
  main: {
    flex: 1,
    padding: '0px 10px'
  }
};

const mapStateToProps = state => ({
  editor: state.editor
});

const mapDispatchToProps = dispatch => ({
  saveLayout: () => dispatch(saveLayout()),
  addItem: (c, p) => dispatch(addItem(c, p)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
