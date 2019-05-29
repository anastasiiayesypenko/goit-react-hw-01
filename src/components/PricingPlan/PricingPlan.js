import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingList}>
    {' '}
    {items.map(item => (
      <li className={styles.item} key={item.label}>
        <PricingItem
          label={item.label}
          icon={item.icon}
          capacity={item.capacity}
          price={item.price}
          description={item.description}
        />{' '}
      </li>
    ))}{' '}
  </ul>
);
PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default PricingPlan;
