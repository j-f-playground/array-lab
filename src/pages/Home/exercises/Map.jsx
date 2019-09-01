import React, { Component } from 'react';
import styles from './styles.module.scss';

class Map extends Component {
  renderExercise1 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve un array con
          exactamente los mismos valores
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve{' '}
          <span className={styles.value}>{JSON.stringify([3, 3, 3])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Recorre <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> y devuelve{' '}
          <span className={styles.value}>{JSON.stringify([3, 4, 3])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise4 = () => {
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
        <div className={styles.result}>{JSON.stringify()}</div>
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
