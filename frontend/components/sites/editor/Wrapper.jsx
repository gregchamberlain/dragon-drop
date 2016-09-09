import React, { Component } from 'react';
import Gear from 'react-icons/lib/fa/cog';
import Close from 'react-icons/lib/fa/close';
import Lock from 'react-icons/lib/fa/lock';
import Unlock from 'react-icons/lib/fa/unlock';
import Radium from 'radium';

class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contextMenu: false,
      pos: [0, 0]
    }
  }

  handleClick = e => {
    const bounds = this.refs.wrapper.getBoundingClientRect();
    if (e.type === 'contextmenu' && e.clientX > bounds.left && e.clientX < bounds.right
      && e.clientY > bounds.top && e.clientY < bounds.bottom) return;
    this.setState({ contextMenu: false })
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleClick);
  }

  showContextMenu = e => {
    e.preventDefault();
    const bounds = this.refs.wrapper.getBoundingClientRect();
    this.setState({pos: [e.clientX - bounds.left, e.clientY - bounds.top], contextMenu: true});
  }

  render() {
    const { onRemove, openEditor, children, name, onToggleLock, locked, onContextMenu } = this.props;
    const menuStyle = {
      ...styles.contextMenu,
      left: this.state.pos[0],
      top: this.state.pos[1]
    };

    return (
      <div style={styles.container} onDoubleClick={openEditor} ref="wrapper">
        {children}
        <div style={styles.overlay} className="component-wrapper-overlay">
          <div style={styles.header}>
            <Gear style={styles.icon} onClick={openEditor} className="draggable-cancel component-settings"/>
            { locked ? (
              <Lock style={styles.icon} onClick={onToggleLock} className="draggable-cancel"/>
            ) : (
              <Unlock style={styles.icon} onClick={onToggleLock} className="draggable-cancel component-lock"/>
            )}
            <div style={{flex: 1, marginLeft: 5}}>{name}</div>
            <Close style={styles.icon} onClick={onRemove} className="draggable-cancel"/>
          </div>
          {/* <span className="react-resizable-handle" /> */}
        </div>
        { this.state.contextMenu ? <div style={menuStyle}>Context Menu!</div> : ''}
      </div>
    );
  }
}

const styles = {
  container: {
    boxSizing: 'border-box',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 55px 30px -20px inset',
  },
  header: {
    position: "absolute",
    display: "flex",
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    padding: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 20,
    cursor: 'pointer',
    margin: 5,
  },
  contextMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#fff',
    padding: 10,
    boxShadow: '2px 2px 10px black',
    zIndex: 2
  }
};

export default Radium(Wrapper);
