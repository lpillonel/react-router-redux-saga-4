import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styles from './styles.css';

const NavigationBar = () => (
  <div className={styles.navigationBar}>
    <div className={styles.navigationBarContainer}>
      <Link
        exact
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/"
      >
        Home
      </Link>
      <Link
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/example"
      >
        Example
      </Link>
      <Link
        activeClassName={styles.navigationBar__link__active}
        className={styles.navigationBar__link} to="/notfound"
      >
        Not Found
      </Link>
    </div>
  </div>
);

export default NavigationBar;
