import React from 'react'

import Message from './Message'


const MessageList = () => {
    const messages = [
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

    return (
        <div className='MessageList'>
            { messages.map(msg => (
                    <Message message={msg} key={msg.id}/>
                ))
            }
        </div>
    )
}
export default MessageList