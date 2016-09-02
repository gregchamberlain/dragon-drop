import React, { Component } from 'react';
import LoadingPage from '../../ui/loading_page';
import { merge } from 'lodash';

export default class PageSettings extends Component {
  constructor(props) {
    super(props);
    this.state = merge({}, props.page)
  }

  componentWillReceiveProps = ({ loading, page }) => {
    if (!loading && this.props.loading) {
      this.setState(merge({}, page));
    }
  }

  updateState = name => e => {
    this.setState({ [name]: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.updatePage(this.state);
  }

  render () {

    const { page, loading } = this.props;

    return (
      <LoadingPage loading={loading} small={true} light={true}>
        <div className='page-settings'>
          <h3>{`${page.name} Settings`}</h3>
          <form onSubmit={this.submit}>
            <label>
              Page Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.updateState("name")} />
            </label>
            <label>
              Page Path
              <input
                type="text"
                value={this.state.path}
                onChange={this.updateState("path")}
                disabled={page.path === '/'}/>
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      </LoadingPage>
    );
  }
}
