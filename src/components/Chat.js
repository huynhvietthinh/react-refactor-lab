// src/components/Chat.js (TRƯỚC KHI REFACTOR)
import React, { useState, useEffect } from 'react';

const Chat = () => {
  // --- PHẦN 1: LOGIC VÀ STATE (Nằm chung với UI) ---
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Logic: Tải dữ liệu từ tệp JSON (giả lập gọi API)
  useEffect(() => {
    setIsLoading(true);
    
    fetch('/faqs.json') // Lấy từ thư mục public
      .then(response => response.json())
      .then(data => {
        setMessages(data.faqs); // Cập nhật state
      })
      .catch(error => console.error("Lỗi khi tải faqs.json:", error))
      .finally(() => {
        setIsLoading(false); // Dừng loading
      });
  }, []); // Chạy 1 lần

  // Logic: Xử lý gõ phím
  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  // Logic: Xử lý gửi tin nhắn
  const handleSendMessage = () => {
    if (currentInput.trim() === '') return;

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: currentInput
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setCurrentInput('');
  };

  // --- PHẦN 2: UI / JSX (Nằm chung với Logic) ---
  return (
    <div className="chat-window">
      {isLoading && <div className="loading">Đang tải tin nhắn...</div>}
      
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          placeholder="Nhập câu hỏi của bạn..."
        />
        <button onClick={handleSendMessage}>Gửi</button>
      </div>
    </div>
  );
};

export default Chat;