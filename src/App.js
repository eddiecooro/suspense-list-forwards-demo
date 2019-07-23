import React from 'react';
import styles from './App.module.scss';
import UserList from './components/UserList';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div>
          <p>{'Without'}</p>
          <p>{'<SuspenseList />'}</p>
          <p>{'‌'}</p>
          <br />
          <UserList />
        </div>
        <div>
          <p>{'With'}</p>
          <p>{'<SuspenseList revealOrder="forwards"/>'}</p>
          <br />
          <UserList useSuspenseList={true} revealOrder="forwards" />
        </div>
        <div>
          <p>{'With'}</p>
          <p>{'<SuspenseList revealOrder="backwards"/>'}</p>
          <br />
          <UserList useSuspenseList={true} revealOrder="backwards" />
        </div>
      </div>
    </div>
  );
}

export default App;
