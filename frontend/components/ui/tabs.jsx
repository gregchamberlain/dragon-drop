import React, { Component, PropTypes } from 'react'
import Compass from 'react-icons/lib/fa/compass';
import Wrench from 'react-icons/lib/fa/wrench';
import Plus from 'react-icons/lib/fa/plus';


export default class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  changeCurrentTab = idx => e => {
    this.setState({currentTab: idx});
  }

  render() {

    const tabs = this.props.children.map((child, idx) => (
      <div
        key={Math.random() * 100}
        className={`tab${this.state.currentTab === idx ? " active" : ""}`}
        onClick={this.changeCurrentTab(idx)}>
        {child.props.icon}
      </div>
    ));

    return (
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs}
        </div>
        <div className="tabs-content">
          {this.props.children[this.state.currentTab]}
        </div>
      </div>
    );
  }
}

export const Tab = ({ icon, children }) => (
  <div>{children}</div>
)
