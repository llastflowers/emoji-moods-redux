import React from 'react';
import styles from './Controls.css';
import { getCoffees, getSnacks, getNaps, getStudies } from '../../selectors/moodSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/emojiActions';

const Controls = () => {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);
  return (
    <section className={styles.Controls}>
      <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
      <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
      <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
      <button onClick={() => dispatch(study())}>studies - {studies}</button>
    </section>
  );
};

export default Controls;
