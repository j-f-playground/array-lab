import React, { Component } from 'react';
import styles from './styles.module.scss';

class Filter extends Component {
  renderExercise1 = () => {
    const array = [12,6,7,34,44];
    const result = array.filter(item => {
      return item > 10;
    })

    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Filtra <span className={styles.value}>{JSON.stringify([12, 6, 7, 34, 44])}</span> para devolver los
          números mayores que <span className={styles.value}>10</span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    const array = [{"name":"Jorge","age":32},{"name":"Fany","age":36},{"name":"Atia","age":5},{"name":"César","age":1}];
    const result = array.filter(item => {
      return item.age > 18;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Filtra{' '}
          <span className={styles.value}>
            {JSON.stringify([
              { name: 'Jorge', age: 32 },
              { name: 'Fany', age: 36 },
              { name: 'Atia', age: 5 },
              { name: 'César', age: 1 },
            ])}
          </span>{' '}
          para devolver los <span className={styles.value}>mayores de edad</span>
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## filter
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
      </div>
    );
  }
}

export default Filter;
