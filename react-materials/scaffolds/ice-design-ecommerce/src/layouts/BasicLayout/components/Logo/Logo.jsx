import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div style={{ ...styles.container, ...this.props.style }}>
        <Link to="/" style={styles.logoText}>
          {this.props.text || '电商管理系统'}
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  logoText: {
    display: 'block',
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: '10px',
    fontSize: '20px',
    color: '#333',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
