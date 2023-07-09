import React, { Component } from 'react';
import './Style.css';
import logo from './imge/logo of signup.png';
import coma from './imge/comaofsifnup.png';
import Vector from './imge/Vector.png';



class SignUp extends Component {
  state = {
    username: '',
    email:'',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    checkbox:'',
    error: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    const { username,email , phoneNumber, password, confirmPassword ,checkbox } = this.state;

    
    if (!username || !email || !phoneNumber || !password || !confirmPassword || !checkbox ) {
      this.setState({ error: 'Please fill in all fields.' });
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match.' });
    } else if(password.length < 8 ){
      this.setState({ error: 'Password must be at least 8 characters long.' });
    }
     else { 
      this.setState({
        username: '',
        email:'',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        checkbox:'',
        error: ''
      });
    }
  };
  


  render() {
    const { username, email ,phoneNumber, password, confirmPassword, error,checkbox ,} = this.state;

    return (
      <div className='main-SignUp' >

       <div className='contact-Sign-up'>
          <div className='logo-1'><img src={logo} alt="" />Gamers</div>
          <h2><img src={coma} alt="" /></h2>
          <p>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
          <h5>Hideo Kojima</h5>
          <h3 className='Vector'><img src={Vector} alt="" /></h3>
        </div>


        <div className='SignUp-page'>
        <h2>Register Individual Account!</h2>
        <p>For the purpose of gamers regulation, your details are required.</p>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSignUp}>
          <label>
            Username*
          </label>
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder='Enter Username' />

          <label>
          Email address*
          </label>
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder='Enter Email address'/>

          <label>
            Phone Number*
          </label>
          <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} placeholder='Enter Phone Number' />
          
          <label>
            Password*
          </label>
          <input type="password"  name="password" value={password} placeholder='password'
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          
          <label>
          Repeat password*
          </label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder='Repeat password' />

          <div className='checkbox'>
            <input  type="checkbox" name="checkbox" value={checkbox} onChange={this.handleChange}/>
            <p>I agree to terms & conditions</p>
          </div>
          <button type="submit">Register Account</button>
        </form>
    </div>
       
      </div>
    );
  }
}

export default SignUp;
