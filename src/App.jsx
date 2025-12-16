import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatData);

  const toggleLiked = (entryId) => {
    const entries = entriesData.map(entry => {
      if (entry.id === entryId) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    });
    setEntriesData(entries);
  };

  const totalLikes = entriesData.filter(entry => entry.liked === true).length;

  return (
    <div id="App">
      <header>
        <h1>Your Basic Conversation Between Two Besties!</h1>
        <h2>There are {totalLikes} ❤️s in this chat</h2>
      </header>
      <main>
        <ChatLog entries={entriesData}
          onToggleLiked={toggleLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
