import { Container } from "react-bootstrap";
import Header from '../header/header';
import TableUsers from '../table/table';
import "./app.module.css";

function App() {
  return (
    <Container>
      <Header />
      <TableUsers/>
    </Container>
  );
}

export default App;
