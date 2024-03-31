import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import './Create.css'

const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        Id_number: '',
        role: '',
        password: '',
        showPassword: false // State to toggle password visibility
      });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
      };
            
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/user', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    
    };


  return (
    <form onSubmit={handleSubmit}>
    <label>Name:</label><br/>
    <input type="text" name="name" value={formData.name} onChange={handleChange} /><br/>
    <label>Email:</label><br/>
    <input type="email" name="email" value={formData.email} onChange={handleChange} /><br/>
    <label>Phone:</label><br/>
    <input type="phone" name="phone" value={formData.phone} onChange={handleChange} /><br/>
    <label>ID Number:</label><br/>
    <input type='Id_number' name='Id_number' value={formData.Id_number} onChange={handleChange} /><br/>
    <label>Password:</label><br/>
    <div style={{ position: 'relative' }}>
        <input
          type={formData.showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={formData.showPassword ? faEye : faEyeSlash}
          onClick={handleTogglePassword}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
        />
      </div>
    <label>Role:</label><br/>
    <select name='role' value={formData.role} onChange={handleChange}><br/>
      <option value='admin'>Admin</option>
      <option value='student'>Student</option>
      <option value='instructor'>Instructor</option>
    </select><br/>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Create