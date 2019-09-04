import React, { Component } from 'react';
import styles from './styles.module.scss';

class Find extends Component {
  renderExercise1 = () => {
    const array = [12,34,44];
    const result = array.find(item => {
      return item === 44;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Encuentra en el array <span className={styles.value}>{JSON.stringify([12, 34, 44])}</span> el número{' '}
          <span className={styles.value}>44</span>
        </div>
        <div className={styles.result}>{JSON.stringify(result)}</div>
      </div>
    );
  };

  renderExercise2 = () => {
    const array = [{"name":"Jorge","age":32},{"name":"Fany","age":36},{"name":"Atia","age":5},{"name":"César","age":1}];
    const result = array.find(item => {
      return item.age === 5;
    })
    return (
      <div className={styles.exercise}>
        <div className={styles.task}>
          Encuentra en el array{' '}
          <span className={styles.value}>
            {JSON.stringify([
              { name: 'Jorge', age: 32 },
              { name: 'Fany', age: 36 },
              { name: 'Atia', age: 5 },
              { name: 'César', age: 1 },
            ])}
          </span>{' '}
          el niño de <span className={styles.value}>5 años</span>
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
          href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find"
          target="_blank"
          rel="noopener noreferrer"
        >
          ## find
        </a>
        {this.renderExercise1()}
        {this.renderExercise2()}
      </div>
    );
  }
}

export default Find;
