import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import styles from "./header.module.css";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { fillDb } from "../../redux/action";
// import { createUser } from "../../utils/utils";

const Header = () => {
  const dispatch = useDispatch();

  // const addUsers = () => {
  //   Axios.post("http://localhost:3001/", createUser()).then(() => {
  //     console.log("Success");
  //   });
  // };

  const getUsers = () => {
    Axios.get("http://localhost:3001/").then((res) => {
      dispatch(fillDb(res.data));
    });
  };

  return (
    <Form className={styles.header}>
      <Row className={styles.settings}>
        <Col xs={2}>
          <Form.Select aria-label="Floating label select example">
            <option>Choose region</option>
            <option value="1">USA</option>
            <option value="2">RUS</option>
            <option value="3">UA</option>
          </Form.Select>
        </Col>
        <Col xs={3}>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Floating label select example">
              <option>Error rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
            <FormControl placeholder="Enter" />
          </InputGroup>
        </Col>
        {/* <Button variant="secondary" onClick={addUsers}>
            Submit
          </Button> */}
        <Col xs={3}>
          <InputGroup className="mb-3">
            <FormControl placeholder="Page" />
            <FormControl placeholder="Seed" />
            <Button
              variant="secondary"
              onClick={getUsers}
              className={styles.btnSubmit}
            >
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default Header;
