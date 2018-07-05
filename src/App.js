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

  render() {
    return (
      <div className="App">
        <Signin handleAuth={this.handleAuth}/>
       {/* <Main user={this.state.user} /> */}
      </div>
    )
  }
}

export default App
