import React, { Component } from 'react';
import GridLayout from './GridLayout';
import { connect } from 'react-redux';
import { saveLayout } from '../actions/layout_actions.js';
import { addItem } from '../actions/item_actions.js';
import * as Catalog from '../catalog';
import CatalogContainer from './Catalog';
import Editor from './Editor/Editor';
import LayoutsIndex from './layouts_index_container.js';

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

  saveLayout() {
    this.props.saveLayout(this.refs.name.value);
  }

  render() {
    return (
      <div style={styles.container}>
        <CatalogContainer />
        <div style={styles.main}>
          <h1>Square Space</h1>
          <LayoutsIndex />
          <button onClick={this.lockGrid.bind(this)}>{this.state.locked ? "Unlock" : "Lock"}</button>
          <button onClick={this.saveLayout.bind(this)}>Save</button>
          <input type="text" ref="name" />
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
  saveLayout: name => dispatch(saveLayout(name)),
  addItem: (c, p) => dispatch(addItem(c, p)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
