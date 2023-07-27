import '../css/signup.css'
import {useState} from 'react'
import Spinner from '../components/Spinner'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    const [creds,setCreds] = useState({name:"",email:"",password:""});
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('/api/auth/register',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:creds.name,email:creds.email,password:creds.password})
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
        <div className="container signup-cont my-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input name="name" type="text" onChange={onChange} className="form-control" id="exampleInputPassword1" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" onChange={onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {loading ? <Spinner/> : <button type="submit" className="btn btn-primary">Signup</button>} 
            </form>
        </div >
    );
}

export default Signup;