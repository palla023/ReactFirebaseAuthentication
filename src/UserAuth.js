import React, { useState } from 'react'
import { auth } from './firebase';

const UserAuth = () => {
    //whatever the data coming from the User Stored in data varaible , here two input fields are there, for that we have stored in Object Format
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    //Destructure those variables
    const { email, password } = data;

    //we can handle the user input data by changeHandler
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // when we click the SignUp Button, email and pass will hydrate and store in firebaseDB
    const signUp = e => {
        e.preventDefault();
        //createUserWithEmailAndPassword is a default function , it will accept 2 parameters
        auth.createUserWithEmailAndPassword(email, password).then(
            user => console.log(user)
        ).catch(err => console.log(err))
    }

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => console.log(user)
        ).catch(err => alert("Please Check Email/Password"))
    }
    return (
        <div className='container d-flex flex-row justify-content-center shadow m-5 p-5'>  
                    {/* autoComplete off = I do not get any suggestions like what we have entered previous mails          */}
                <form autoComplete="off" >  
                    <h2>Authentication</h2>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={changeHandler} placeholder="Email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={password} onChange={changeHandler} placeholder="Password"/>
                    </div>
        
                    <button onClick={signUp} className="btn btn-info" >Sign Up</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={signIn} className="btn btn-success" >Sign In</button>
                </form>
          
        </div>
    )
}

export default UserAuth
