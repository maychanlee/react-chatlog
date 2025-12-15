import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between V and E</h1>
      </header>
      <main>
        <ChatEntry></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
