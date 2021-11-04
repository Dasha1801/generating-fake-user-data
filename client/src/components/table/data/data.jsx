const Data = ({user}) => {
  return (
    <tr>
      <td>{user.number}</td>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.tel}</td>
      <td>{user.id}</td>
    </tr>
  );
};

export default Data;
