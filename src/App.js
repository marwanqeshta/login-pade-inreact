import React from 'react';
import SignUp from './component/SignUp';
import Login from './component/login';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: true // Initially show the sign-up page
    };
  }

  handleSwitchPage = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp
    }));
  }

  render() {
    return (
      <div>
        {this.state.isSignUp ? <SignUp /> : <Login />}
        <button className='switch' onClick={this.handleSwitchPage}>
          {this.state.isSignUp ?  'Login': ''}
        </button>
        
      </div>
    );
  }
}

export default App;
