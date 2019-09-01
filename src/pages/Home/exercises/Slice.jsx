import React, { Component } from 'react';
import styles from './styles.module.scss';

class Slice extends Component {
  renderExercise1 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array <span className={styles.value}>{JSON.stringify([12, 34, 44, 4, 53, 56])}</span>,
          devuelve <span className={styles.value}>{JSON.stringify([4, 53, 56])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array <span className={styles.value}>{JSON.stringify([12, 34, 44, 4, 53, 56])}</span>,
          devuelve <span className={styles.value}>{JSON.stringify([44, 4])}</span>
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## slice
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
      </div>
    );
  }
}

export default Slice;
