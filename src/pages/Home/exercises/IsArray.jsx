import React, { Component } from 'react';
import styles from './styles.module.scss';

class IsArray extends Component {
  renderExercise1 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify(['Fany', 'Atia', 'César'])}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'"Jorge"'}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise4 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'undefined'}</span> un array?
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

  renderExercise6 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify({ brand: 'Philips', model: 'XH309' })}</span> un
          array?
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## isArray
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
        {this.renderExercise3()}
        {this.renderExercise4()}
        {this.renderExercise5()}
        {this.renderExercise6()}
      </div>
    );
  }
}

export default IsArray;
