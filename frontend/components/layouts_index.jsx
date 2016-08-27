import React, { Component } from 'react';

export default class LayoutsIndex extends Component {
  componentDidMount() {
    this.props.requestLayouts();
  }

  changeLayout(layout) {
    return () => {
      this.props.receiveItems(layout.data);
    };
  }

  render() {

    const layouts = this.props.layouts.map(layout => (
      <li key={layout.id} onClick={this.changeLayout(layout).bind(this)}>
        <a href="javascript:void(0)">
          {layout.name}
        </a>
      </li>
    ));

    return (
      <ul>{layouts}</ul>
    );
  }
}
