import React, { Component } from 'react';
import styles from './styles.module.scss';

class IsArray extends Component {
  renderExercise1 = () => {
    const array = [12,34,44];
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    const array = ["Fany","Atia","César"];
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify(['Fany', 'Atia', 'César'])}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    const array = "Jorge";
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'"Jorge"'}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise4 = () => {
    const array = undefined;
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'undefined'}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise5 = () => {
    const array = null;
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{'null'}</span> un array?
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise6 = () => {
    const array = {"brand":"Philips","model":"XH309"};
    const result = Array.isArray(array);
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          ¿Es <span className={styles.value}>{JSON.stringify({ brand: 'Philips', model: 'XH309' })}</span> un
          array?
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
