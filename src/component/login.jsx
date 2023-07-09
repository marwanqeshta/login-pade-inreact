import React, { Component } from 'react';
import logo from './imge/logotologin.png';
import game from './imge/gamelogin.png';
import coma from './imge/comaoflogo.png';
import google from './imge/google.png';
import twitter from './imge/twitter.png';
import linkedin from './imge/linkedin-in.png';
import githup from './imge/githup.png';
import eyes from './imge/eyes.png';


class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Validate inputs
    if (!username || !password) {
      this.setState({ error: 'Please fill in all fields.' });
    }  else if(password.length < 8){
        this.setState({ error: 'Password must be at least 8 characters long.' });
      }
    else {
     
      this.setState({ username: '', password: '', error: '' });
    }
  };
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  
  render() {
    const { username, password, showPassword ,error } = this.state;

    return (
      <div className='main-login' id='login'>

        <div className='contact-login'>
          <div className='logo'><img src={logo} alt="logo" />Gamers</div>
          <h2><img src={coma} alt="coma" /></h2>
          <p>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
          <h5>Hideo Kojima</h5>
          <h3 className='game'><img src={game} alt="game" /></h3>
        </div>


        <div className='login-page'>
        <h2>Join the game!</h2>
        <p>Go inside the best gamers social network!</p>
        <div  className='icon'>
          <a href="https://www.google.com/" target='_blank'><img src={google} alt="google}" /></a>
         <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den" target='_blank'><img src={twitter} alt="twitter" /></a>
         <a href="https://www.linkedin.com/in/marwan-qeshta-0a611a262/" target='_blank'> <img src={linkedin} alt="linkedin" /></a>
          <a href="https://github.com/marwanqeshta" target='_blank'><img src={githup} alt="git-hup" /></a>
        </div>

        <div className='second-div'>
    <div className='lines'></div>
      <p> Or </p>
      <div className='lines'></div>
    </div>

        {error && <p>{error}</p>}
        <form onSubmit={this.handleLogin}>
          <label>
          Your email
          </label>
          <input type='email' name="username" value={username} onChange={this.handleChange} placeholder='Write your email'/>
          
          <label>
          Enter your password
          </label>
          <input type={showPassword ? 'text' : 'password'} name="password" value={password} onChange={this.handleChange} placeholder='Enter your password' />
            <span  onClick={this.togglePasswordVisibility}>
          {showPassword ? '' : ''} <img  className='eyes' src={eyes} alt="eyes" />
        </span>
          <button type="submit">Login</button>
          <h5>Don’t have an account? <a href="/">Register </a></h5>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;