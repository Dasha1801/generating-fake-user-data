import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Data from "./data/data";

const TableUsers = () => {
  const dbEn = useSelector(({ dbEn }) => dbEn);

  // console.log(dbEn);

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
          ? dbEn.map((user) => {
              return <Data user={user} key={user.number} />;
            })
          : null}
      </tbody>
    </Table>
  );
};

export default TableUsers;
