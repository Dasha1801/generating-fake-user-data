import { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Data from "./data/data";

const TableUsers = () => {
  const dbEn = useSelector(({ dbEn }) => dbEn);
  const [countRow, setCountRow] = useState(20);

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
        {dbEn.length
          ? dbEn.slice(0, countRow).map((user) => {
              return <Data user={user} key={user.number} />;
            })
          : null}
      </tbody>
    </Table>
  );
};

export default TableUsers;
