import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: [
        { 
          id: 1,
          user: {
              uid: 'randomString',
              displayName: 'Rebecca',
              email: 'rkim7987@gmail.com',
          },
          body: 'chat chat chat',
         },

         {
           id: 2,
           user: {
               uid: 'anotherRandomString',
               displayName: 'kim',
               email: 'yeet@gmail.com', 
           },
           body: 'this dude is cool',
         },
    ]
    }
  }

  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList  messages={this.state.messages} />
        <MessageForm />
      </div>
    )
  }
}

export default Chat