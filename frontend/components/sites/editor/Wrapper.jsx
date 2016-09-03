import React, { Component } from 'react';
import Gear from 'react-icons/lib/fa/cog';
import Close from 'react-icons/lib/fa/close';
import Radium from 'radium';

class Wrapper extends Component {

  render() {
    const { onRemove, openEditor, children, name } = this.props;
    return (
      <div style={styles.container}>
        {children}
        <div style={styles.overlay} className="component-wrapper-overlay">
          <div style={styles.header}>
            <Gear style={styles.icon} onClick={openEditor} className="draggable-cancel"/>
            <div style={{flex: 1, marginLeft: 5}}>{name}</div>
            <Close style={styles.icon} onClick={onRemove} className="draggable-cancel"/>
          </div>
          <span className="react-resizable-handle" />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    boxSizing: 'border-box',
    border: '1px solid #eee',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    ':hover': {
      opacity: 1,
    }
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
    // background: 'rgba(0, 0, 0, 0.6)',
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 20,
    cursor: 'pointer',
    margin: 5,
  }
};

export default Radium(Wrapper);
