import React from 'react';
import Filter from './exercises/Filter';
import Find from './exercises/Find';
import Includes from './exercises/Includes';
import IsArray from './exercises/IsArray';
import Map from './exercises/Map';
import Reduce from './exercises/Reduce';
import Slice from './exercises/Slice';
import styles from './styles.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Filter />
    <Find />
    <Includes />
    <IsArray />
    <Map />
    <Reduce />
    <Slice />
  </div>
);

export default Home;
