import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Room = ({roomName}) => {
  return (
    <li className={css(styles.item)} key={roomName}> {/*key={roomName}*/}
      <a className={css(styles.link)} onClick={() => roomName.setCurrentRoom(roomName)} > {/*onClick={()=> setCurrentRoom(roomName)}*/}
        {roomName}
      </a>
    </li>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room