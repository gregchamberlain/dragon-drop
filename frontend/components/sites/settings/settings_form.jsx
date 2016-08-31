import React, { Component, PropTypes } from 'react';
import { merge, isEqual } from 'lodash';

export default class SiteSettingsForm extends Component {

  constructor(props) {
    super(props);
    this.state = merge({}, props.site);
  }

  updateState = name => {
    return e => {
      this.setState({[name]: e.target.value})
    }
  }

  destroy = e => {
    e.preventDefault();
    let confirmation = confirm("are you sure you want to delete this site?");
    console.log(confirmation)
  }

  update = e => {
    e.preventDefault();
    console.log("updating")
  }


  render() {

    const { site } = this.props;
    const unchanged = isEqual(site, this.state);

    return (
      <form className="site-settings-form">
        <input type="text" onChange={this.updateState("name")} value={this.state.name}/>
        <input type="text" onChange={this.updateState("identifier")} value={this.state.identifier}/>
        <button type="submit" disabled={unchanged} onClick={this.update}>Update</button>
        <button className="destroy-button" onClick={this.destroy}>delete site</button>
      </form>
    );
  }
}
