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
      this.props.close();
    }
  }

  updateState = name => e => {
    this.setState({ [name]: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.updatePage(this.state, this.props.page);
  }

  render () {

    const { page, loading } = this.props;

    return (
      <LoadingPage loading={loading} small={true} light={true}>
        <div className='page-settings' onClick={e => e.stopPropagation()}>
          <form onSubmit={this.submit}>
            <label>
              Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.updateState("name")} />
            </label>
            <label>
              Path
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
