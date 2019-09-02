import React, { Component } from 'react';
import styles from './styles.module.scss';

class Slice extends Component {
  renderExercise1 = () => {
    const array = [12,34,44,4,53,56];
    const result = array.slice(3, [6]);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array <span className={styles.value}>{JSON.stringify([12, 34, 44, 4, 53, 56])}</span>,
          devuelve <span className={styles.value}>{JSON.stringify([4, 53, 56])}</span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    const array = [12,34,44,4,53,56];
    const result = array.slice(2, [4]);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array <span className={styles.value}>{JSON.stringify([12, 34, 44, 4, 53, 56])}</span>,
          devuelve <span className={styles.value}>{JSON.stringify([44, 4])}</span>
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
