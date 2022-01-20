import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestComponent2.module.scss';

const TestComponent2 = () => (
  <div className={styles.TestComponent2} data-testid="TestComponent2">
    TestComponent2 Component
  </div>
);

TestComponent2.propTypes = {};

TestComponent2.defaultProps = {};

export default TestComponent2;
