import './ChatEntry.css';
import PropTypes from 'prop-types';
import Timestamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const heartColor = isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><Timestamp time={props.timeStamp}></Timestamp></p>
        <button onClick={toggleLiked}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
