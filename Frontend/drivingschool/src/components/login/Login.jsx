import { useState } from 'react'
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/Form";
import Input from "react-bootstrap/Form";
import Label from "react-bootstrap/Form";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
  return (
    <div className='Login'>
        <form onSubmit={handleSubmit}>
            <FormGroup size="lg"  controlId='email' bsSize='large'>
            <Label>Email</Label>
            <Input
                Input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </FormGroup>
            <FormGroup size="lg" controlId='password' bsSize='large'>
            <Label>Password</Label>
            <Input
                Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
            />
            </FormGroup>
            <Button block bsSize='large' disabled={!validateForm()} type='submit'>
            Login
            </Button>
        </form>
    </div>
  )
}

export default Login