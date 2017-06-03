import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Header = ({ message }) => (
  <p className={styles.container}>
    Hello from {message} !!
  </p>
);

Header.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Header;
