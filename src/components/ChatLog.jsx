import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map(entry => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        isLiked={entry.liked}
        onToggleLiked={props.onToggleLiked}
      ></ChatEntry>
    );
  });
  return (
    <div className='chat-log'>
      {chatComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })),
  onToggleLiked: PropTypes.func,
};

export default ChatLog;