import React  from 'react'
import { MessageIcon } from '../icons/MessageIcon'
import './LiveChat.scss';
import {RemoveIcon} from '../icons/RemoveIcon.jsx'
import { FilesIcon } from '../icons/FilesIcon';
import { SendIcon } from '../icons/SendIcon';
const LiveChat = ({openChat, setOpenChat}) => {


  return (
    <div className='chat-section'>
      {
        !openChat &&
        <button className='live-chat-btn' onClick={() => setOpenChat(true)}><MessageIcon /></button>
      }
        <div className={` chat-area ${openChat ? 'show' : 'hide'}`}>
          <div className='chat-header'>
            <h3 className='title'>Live Chat</h3>
            <div className='close-chat'>
              <button className='close-btn' onClick={() => setOpenChat(false)}>
                <RemoveIcon />
              </button>
            </div>
          </div>
          <div className='esi-messagneri-hamar-a'>
            ste grvma messagenery
          </div>
          <div className='writing-section'>
            <div className='message-inp'>
              <input placeholder='Type in your USDOT# to start chat!' className='message' />
              <div className='add-files'>
                <input type='file' />
                <FilesIcon />
              </div>
              <button className='send-message'>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LiveChat
