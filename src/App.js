// src/App.js
import React from 'react';
import './App.css'; 
// Thay đổi import: từ Chat sang ChatContainer
import ChatContainer from './components/ChatContainer'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UniFAQ Chatbot</h1>
      </header>
      
      {/* Thay đổi cách gọi: từ <Chat /> sang <ChatContainer /> */}
      <ChatContainer />
    </div>
  );
}

export default App;