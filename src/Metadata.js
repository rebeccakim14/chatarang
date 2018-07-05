import React from 'react'

const Metadata = ({message}) => {
    return (
        <div className="Metadata">
        <div className="user">{message.user.displayName}</div>
        <div className="time">1:10 PM</div>
      </div>
    )
}
export default Metadata