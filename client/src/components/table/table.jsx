import { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getSeed } from "../../utils/seed";

const TableUsers = () => {
  const db = useSelector(({ db }) => db);
  const errorRate = useSelector(({errorRate}) => errorRate);
  const region = useSelector(({region}) => region);
  const seed = useSelector(({ seed }) => seed);
  const numberPage = useSelector(({ numberPage }) => numberPage);
  const startPage = (numberPage - 1) * 20;
  const [countRow, setCountRow] = useState(20);
  const [name, address, tel, id] = getSeed(
    seed,
    db,
    startPage,
    countRow,
    errorRate,
    region
  );

  const scrollHandler = useCallback(
    (e) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setCountRow(countRow + 10);
      }
    },
    [countRow]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [countRow, scrollHandler]);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>№</th>
          <th>First Name, Last Name</th>
          <th>Address</th>
          <th>tel</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        {db.length
          ? db.slice(startPage, startPage + countRow).map((user, idx) => {
              return (
                <tr key={idx}>
                  <td>{startPage+idx+1}</td>
                  <td>{name[idx]}</td>
                  <td>{address[idx]}</td>
                  <td>{tel[idx]}</td>
                  <td>{id[idx]}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </Table>
  );
};

export default TableUsers;
