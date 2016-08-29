import React, { Component } from 'react';
import Modal from '../ui/modal.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/site_actions.js';

class NewSiteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
  }

  update(name) {
    return (e) => {
      this.setState({[name]: e.target.value});
    };
  }

  save() {
    this.props.createSite(this.state);
  }

  render() {
    return (
      <Modal title="Create New Site">
        <label>Site Name</label>
        <input type="text" onChange={this.update("name")} value={this.state.name} />
        <button onClick={this.save}>Create</button>
      </Modal>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  createSite: site => dispatch(ACTIONS.createSite(site))
});

export default connect(null, mapDispatchToProps)(NewSiteModal);
