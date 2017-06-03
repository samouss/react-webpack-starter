import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.css';

const Header = ({ title }) => (
  <h1 className={styles.container}>
    React Starter, {title}
  </h1>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
