import React, { Component } from 'react';
import styles from './styles.module.scss';

class Map extends Component {
  renderExercise1 = () => {
    const array = [12,34,44];
    const result = array.map(item => {
      return item;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve un array con
          exactamente los mismos valores
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    const array = [12,34,44];
    const result = array.map(item => {
      item = 3;
      return item;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve{' '}
          <span className={styles.value}>{JSON.stringify([3, 3, 3])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    const array = [12,34,44];
    const result = array.map(item => {
      if (item === 34) {
        return 4;
      } else {
        return 3;
      }
    });
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve{' '}
          <span className={styles.value}>{JSON.stringify([3, 4, 3])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise4 = () => {
    const array = [{"name":"Atia"},{"name":"César"}] ;
    const result = array.map((item, index) => {
      item.age = item.name === "Atia" ?  5 :  1;
      // if (item.name === "Atia") {
      //   item.age = 5;
      // }
      // if ((item.name === "César")) {
      //   item.age = 1;
      // }
      return item;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre{' '}
          <span className={styles.value}>{JSON.stringify([{ name: 'Atia' }, { name: 'César' }])}</span> y
          devuelve{' '}
          <span className={styles.value}>
            {JSON.stringify([{ name: 'Atia', age: 5 }, { name: 'César', age: 1 }])}
          </span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.container}>
        <a
          className={styles.header}
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## map
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
        {this.renderExercise3()}
        {this.renderExercise4()}
      </div>
    );
  }
}

export default Map;
