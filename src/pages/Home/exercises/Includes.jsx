import React, { Component } from 'react';
import styles from './styles.module.scss';

class Includes extends Component {
  renderExercise1 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Incluye <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> el número{' '}
          <span className={styles.value}>34</span>?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Incluye <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> el número{' '}
          <span className={styles.value}>23</span>?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Incluye <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> el texto{' '}
          <span className={styles.value}>"34"</span>?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise4 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Incluye <span className={styles.value}>{JSON.stringify(['Fany', 'Atia', 'César'])}</span> el texto{' '}
          <span className={styles.value}>"Atia"</span>?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise5 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'null'}</span> un array?
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## includes
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
        {this.renderExercise3()}
        {this.renderExercise4()}
      </div>
    );
  }
}

export default Includes;
