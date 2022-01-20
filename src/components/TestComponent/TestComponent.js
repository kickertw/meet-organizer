import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestComponent.module.scss';

const TestComponent = () => (
  <div className={styles.TestComponent} data-testid="TestComponent">
    TestComponent Component
  </div>
);

TestComponent.propTypes = {};

TestComponent.defaultProps = {};

export default TestComponent;
