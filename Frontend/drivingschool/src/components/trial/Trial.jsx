import { useState, useEffect } from 'react';
import axios from 'axios';

const Trial = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);

  const url = 'http://localhost:4000/user';

  useEffect(() => {
    getAllUsers()
  }, []);

  const getAllUsers = () => {
    axios.get(url)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getSingleUser = async (userId) => {
    await axios.get(`${url}/${userId}`)
      .then((response) => {
        setSingleUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <h1 className="registered-heading">Registered Users</h1>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>ID Number</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={index} onClick={() => getSingleUser(user._id)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.Id_number}</td>
              </tr>
            ))} 
            </tbody>
        </table>

            {singleUser && 
             <table>
              <tbody>
             <tr>
                <td>{singleUser.name}</td>
                <td>{singleUser.email}</td>
                <td>{singleUser.phone}</td>
                <td>{singleUser.role}</td>
                <td>{singleUser.Id_number}</td>
              </tr>
              </tbody>
              </table>
            }

      </div>
    </div>
  )
}

export default Trial