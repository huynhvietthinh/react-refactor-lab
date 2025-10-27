// src/App.js
import React from 'react';
import './App.css'; // Import CSS để tạo kiểu
import Chat from './components/Chat'; // Import tệp Chat.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UniFAQ Chatbot</h1>
      </header>
      {/* Đây là thành phần Chat mà chúng ta sắp refactor */}
      <Chat />
    </div>
  );
}

export default App;