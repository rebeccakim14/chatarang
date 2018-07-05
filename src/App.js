import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import Signin from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        uid: 'sdfs34843560',
        displayName: 'Davey',
        email: 'davey@singing.org',
      },
    }
  }

  render() {
    return (
      <div className="App">
        <Signin />
       {/* <Main user={this.state.user} /> */}
      </div>
    )
  }
}

export default App
