// src/components/ChatContainer.js
import React, { useState, useEffect } from 'react';
import ChatPresenter from './ChatPresenter'; // Import thành phần UI

const ChatContainer = () => {
  // --- PHẦN 1: QUẢN LÝ LOGIC VÀ STATE ---
  
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Logic: Tải dữ liệu từ tệp JSON
  useEffect(() => {
    setIsLoading(true);
    
    fetch('/faqs.json')
      .then(response => response.json())
      .then(data => {
        setMessages(data.faqs); 
      })
      .catch(error => console.error("Lỗi khi tải faqs.json:", error))
      .finally(() => {
        setIsLoading(false);
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

  // --- PHẦN 2: KẾT XUẤT (RENDER) ---
  // Trả về ChatPresenter và "bơm" (pass) props vào
  return (
    <ChatPresenter
      messages={messages}
      currentInput={currentInput}
      isLoading={isLoading}
      onInputChange={handleInputChange}
      onSendMessage={handleSendMessage}
    />
  );
};

export default ChatContainer;