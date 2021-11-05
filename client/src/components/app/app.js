import Header from '../header/header';
import TableUsers from '../table/table';
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TableUsers/>
    </div>
  );
}

export default App;
