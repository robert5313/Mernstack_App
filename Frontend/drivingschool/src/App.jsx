import { useEffect, useState } from 'react' // Add { useEffect, useState
import './App.css'
import axios from 'axios';
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Card from './components/card/Card';
import Create from './components/create/Create';
import Courses from './components/Courses/Courses';
import Contact from './components/contact/Contact';

function App() {
  const [users, setUsers] = useState('')

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

  return (
<div className="App">
  <NavBar />
  <h1 className="main-heading">Driving School</h1>
  <div className="content">
    <Home />
    <Courses  />
    <Card />
    <About />
    <Create />
  </div>

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
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
            <td>{user.Id_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <Contact />
  <Footer />
</div>
  ) 
}

export default App
