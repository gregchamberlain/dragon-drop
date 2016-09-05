import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as PAGE_ACTIONS from '../../../actions/page_actions.js';

class NewPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  update = name => e => {
    this.setState({[name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPage(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.update('name')} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, { params }) => ({
  createPage: page => dispatch(PAGE_ACTIONS.createPage(params.siteId, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPageForm);
