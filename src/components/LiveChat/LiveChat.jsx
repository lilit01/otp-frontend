import React , { useEffect, useState } from 'react'
import { MessageIcon } from '../icons/MessageIcon'
import './LiveChat.scss';
import {RemoveIcon} from '../icons/RemoveIcon.jsx'
import { FilesIcon } from '../icons/FilesIcon';
import { SendIcon } from '../icons/SendIcon';
import { useWindowSize } from '../../hooks/useWindowSize';
import io from "socket.io-client";
import axios from "axios";
const socket = io.connect("http://localhost:5000");

const LiveChat = ({openChat, setOpenChat}) => {
  const width = useWindowSize();
  const [message, setMessage] = useState("");
  const [usdot, setUsdot] = useState(localStorage.getItem("usdot"));
  const [messageReceived, setMessageReceived] = useState([]);

  const user = {
    from: usdot,
    to: 4444,
    message: message,
  };

  const sendMessage = () => {
    if (!usdot) {
      setUsdot(message);
      localStorage.setItem("usdot", message);
    } else if (usdot) {
      socket.emit("send_message", { user });
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data);
    });
  }, [socket]);

  useEffect(() => {
    if (usdot) {
      axios
        .get(`http://localhost:5000/getMessages/${user.from}`)
        .then((res) => {
          setMessageReceived(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setMessage("");
  }, [usdot]);

  return (
    <div className={`chat-section ${width <= 992 ? 'mobile' : null}`}>
      {!openChat && (
        <button className="live-chat-btn" onClick={() => setOpenChat(true)}>
          <MessageIcon />
        </button>
      )}
      <div className={` chat-area ${openChat ? "show" : "hide"}`}>
        <div className="chat-header">
          <h3 className="title">Live Chat</h3>
          <div className="close-chat">
            <button className="close-btn" onClick={() => setOpenChat(false)}>
              <RemoveIcon />
            </button>
          </div>
        </div>
        <div className="esi-messagneri-hamar-a">
          {messageReceived?.map((item, key) => {
            return (
              <p
                className={item.from == user.from ? "outgoing" : "incoming"}
                key={key}
              >
                {item.message}
              </p>
            );
          })}
        </div>
        <div className="writing-section">
          <div className="message-inp">
            <input
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type in your USDOT# to start chat!"
              className="message"
            />
            <div className="add-files">
              <input type="file" />
              <FilesIcon />
            </div>
            <button onClick={sendMessage} className="send-message">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
