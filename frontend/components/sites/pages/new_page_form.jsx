import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as PAGE_ACTIONS from '../../../actions/page_actions.js';

class NewPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      path: '/',
      pathChanged: false
    }
  }

  parsePath = name => {
    return `/${name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`
  }

  update = name => e => {
    let path = this.state.path;
    if (name === 'name' && (!this.state.pathChanged || this.state.path === '/')) {
      path = this.parsePath(e.target.value)
      this.setState({name: e.target.value, path, pathChanged: false})
    }
    if (name === 'path') this.setState({pathChanged: true})
    if (name === 'path' && this.state.path === '/') return;
    this.setState({[name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { pathChanged, ...page } = this.state;
    this.props.createPage(page);
  }

  render() {
    return (
      <div className="fill flex center">
        <form onSubmit={this.handleSubmit} className="new-site-form">
          <label>
            Name
            <input type="text" value={this.state.name} onChange={this.update('name')} />
          </label>
          <label>
            Path
            <input type="text" value={this.state.path} onChange={this.update('path')} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, { params }) => ({
  createPage: page => dispatch(PAGE_ACTIONS.createPage(params.siteId, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPageForm);
