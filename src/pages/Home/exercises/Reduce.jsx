import React, { Component } from 'react';
import styles from './styles.module.scss';

class Reduce extends Component {
  renderExercise1 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array <span className={styles.value}>{JSON.stringify([12, 34, 44, 24, 429])}</span>,
          devuelve su suma, el número <span className={styles.value}>543</span>
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array{' '}
          <span className={styles.value}>
            {JSON.stringify([
              { name: 'Jorge', age: 32 },
              { name: 'Fany', age: 36 },
              { name: 'Atia', age: 5 },
              { name: 'César', age: 1 },
            ])}
          </span>
          , devuelve la suma de sus edades, el número <span className={styles.value}>74</span>
        </div>
        <div className={styles.result}>{JSON.stringify()}</div>
      </div>
    );
  };

  renderExercise3 = () => {
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Dado el array{' '}
          <span className={styles.value}>{JSON.stringify(['Jorge', 'García', 'García', '(Tenerife)'])}</span>,
          devuelve el texto <span className={styles.value}>Jorge García García (Tenerife)</span>
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## reduce
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
        {this.renderExercise3()}
      </div>
    );
  }
}

export default Reduce;
