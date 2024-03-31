import './card.css'; 
const Card = ({ name, email, phone, id, role }) => {
    return (
        <div className="card">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>ID: {id}</p>
      <p>Role: {role}</p>
    </div>
    
  )
}

export default Card