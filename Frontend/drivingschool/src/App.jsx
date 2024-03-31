import './App.css'
import Trial from './components/trial/Trial';
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Card from './components/card/Card';
import Create from './components/create/Create';
import Courses from './components/Courses/Courses';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';

function App() {

  return (
<div className="App">
  <NavBar />

  
  <h1 className="main-heading">Driving School</h1>
  <div className="content">
    <Trial />
    <Login />
    <Home />
    <Courses  />
    <Card />
    <About />
    <Create />
  </div>

  <h1 className="registered-heading">Registered Users</h1>

  <Contact /> 
  <Footer />
</div>
  ) 
}

export default App
