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
import {
  applySeed,
  choosePage,
  chooseRegion,
  fillDb,
  getErrorValue,
} from "../../redux/action";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("usa");
  const [errorOption, setErrorOption] = useState(0);
  const [errorEnter, setErrorEnter] = useState(0);
  const [seed, setSeed] = useState(0);

  const getRegion = (e) => {
    const { value } = e.target;
    setRegion(value);
  };

  const getNumberPage = (e) => {
    const { value } = e.target;
    setPage(+value);
  };

  const getErrorOption = (e) => {
    const { value } = e.target;
    setErrorOption(+value);
    setErrorEnter(0);
    document.getElementById("enter").value = "";
  };

  const getErrorEnter = (e) => {
    const { value } = e.target;
    setErrorEnter(+value);
    setErrorOption(0);
    document.getElementById("option").value = "Error rate";
  };

  const getSeed = (e) => {
    const { value } = e.target;
    setSeed(+value);
  };

  function getData() {
    Axios.get(`https://arcane-wave-78778.herokuapp.com/${region}`).then(
      (res) => {
        dispatch(fillDb(res.data));
      }
    );
  }

  const handlerSubmit = () => {
    dispatch(choosePage(page));
    dispatch(chooseRegion(region));
    dispatch(getErrorValue(errorOption || errorEnter));
    dispatch(applySeed(seed));
    getData();
  };

  return (
    <Form className={styles.header}>
      <Row className={styles.settings}>
        <Col xs={2}>
          <Form.Select
            aria-label="Floating label select example"
            onClick={getRegion}
          >
            <option>Region</option>
            <option value="usa">USA</option>
            <option value="ru">RUS</option>
            <option value="ua">UA</option>
          </Form.Select>
        </Col>
        <Col xs={3}>
          <InputGroup className="mb-3">
            <Form.Select
              aria-label="Floating label select example"
              className={styles.optionError}
              onChange={getErrorOption}
              id="option"
            >
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
            <FormControl
              placeholder="Enter"
              min="1"
              max="1000"
              type="number"
              onChange={getErrorEnter}
              id="enter"
            />
          </InputGroup>
        </Col>
        <Col xs={3}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Page"
              type="number"
              onChange={getNumberPage}
              min="1"
              max="15"
            />
            <FormControl
              placeholder="Seed"
              type="number"
              onChange={getSeed}
              min="0"
            />
            <Button
              variant="secondary"
              onClick={handlerSubmit}
              className={styles.btnSubmit}
            >
              Random
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default Header;
