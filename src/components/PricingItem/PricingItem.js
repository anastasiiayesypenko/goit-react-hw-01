import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.item}>
    <i
      className={styles.icon}
      style={{
        background: `url(${icon})`,
        height: '162px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        width: '214px',
        display: 'block',
      }}
    >
      {' '}
    </i>{' '}
    <h2 className={[styles[label], styles.label].join(' ')}> {label} </h2>{' '}
    <p className={styles.capacity}> {`${capacity} STORAGE`} </p>{' '}
    <p className={styles.description}> {description} </p>{' '}
    <p className={styles.price}>
      {' '}
      $ {price}
      /MO{' '}
    </p>{' '}
    <button type="button" className={styles[`${label}Button`]}>
      {' '}
      Get Started{' '}
    </button>{' '}
  </div>
);
export default PricingItem;

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
