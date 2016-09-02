import React, { Component, PropTypes } from 'react'
import Plus from 'react-icons/lib/fa/plus-circle';


export default class NewPageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showForm: false,
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 27 && this.state.showForm) {
      this.setState({showForm: false});
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.loading && !props.loading) {
      this.setState({showForm: false, name: ""})
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  updateName = e => {
    this.setState({name: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.createPage({name: this.state.name})
  }

  toggleForm = e => {
    if (this.state.showForm && this.state.name !== "") return;
    this.setState({showForm: !this.state.showForm});
  }

  closeForm = e => {
    if (this.state.name !== "") return;
    this.setState({showForm: !this.state.showForm});
  }

  render() {

    if (this.state.showForm) {
      return (
        <li className={`page-list-item${this.props.loading ? "" : " active" }`}>
          <Plus />
          <form onSubmit={this.onSubmit} className="new-page-form">
            <input
              ref="name"
              disabled={this.props.loading}
              onBlur={this.closeForm}
              autoFocus={true}
              type="text"
              value={this.state.change}
              onChange={this.updateName}/>
          </form>
        </li>
      );
    } else {
      return (
        <li className="page-list-item">
          <Plus />
          <a onClick={this.toggleForm}>New Page</a>
        </li>
      )
    }
  }
}
