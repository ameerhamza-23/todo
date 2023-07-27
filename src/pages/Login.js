import '../css/login.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'

const Login = () => {
    const [creds,setCreds] = useState({email:"",password:""});
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()

    const handleSubmit = async(e)=> {
        e.preventDefault();
        setLoading(true)
        const response = await fetch('/api/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:creds.email,password:creds.password})
        })
        const json = await response.json();
        setLoading(false);
        if(response.ok) {
            console.log('json',json)
            localStorage.setItem('token',json.authToken)
            navigate('/')  
        }
    }

    const onChange = (e)=> {
        setCreds({...creds,[e.target.name]:e.target.value})
    }

    return (
        <div className="container login-cont my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={creds.email} onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control my-2" id="exampleInputPassword1" placeholder="Password" value={creds.password} onChange={onChange} />
                </div>
                {loading ? <Spinner/> : <button type="submit" className="btn btn-primary">Login</button>}
            </form>
            </div>
    );
}

export default Login;