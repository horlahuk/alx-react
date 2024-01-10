import React from "react";
import './Notifications.css';
import NotificationItem from './NotificationItem';
import {getLatestNotification} from '../utils'
import closeIcon from '../assets/close-icon.png'

const Notifications = () => {
  return (
    <div className='Notifications'>
      <button
        style={{
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: '2px',
          cursor: 'pointer',
        }}
      aria-label='Close'
      onClick={(e) => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  )
}

export default Notifications;