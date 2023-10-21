import React from 'react';
import SelectBox from '../components/SelectBox';
import styles from './HomePage.module.css'

const HomePage = () => {
  const options1 = ['Алкольные', 'Не алкольные', 'Сырые'];
  const options2 = ['Норма', 'Брак', 'прос-ка'];

  return (
    <div className={styles.container}>
      <SelectBox options={options1} label="Все товары" name="category" />
      <SelectBox options={options2} label="Норма" name="condition" />
    </div>
  );
};

export default HomePage;
