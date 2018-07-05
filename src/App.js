import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Signin from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {},
    }
  }

  handleAuth = (user) => {
    this.setState({ user: user })
  }

  signedIn = () => {
    return this.state.user.uid
  }

  SignedOut = () => {
    this.setState({user: {} })
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
        ? <Main
             user={this.state.user}
             SignedOut={this.SignedOut} /> 
        : <Signin handleAuth={this.handleAuth}/>
        }
      </div>
    )
  }
}

export default App
