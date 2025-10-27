// src/components/ChatPresenter.js
import React from 'react';

// Nhận tất cả dữ liệu và hàm xử lý qua props
const ChatPresenter = ({ 
  messages, 
  currentInput, 
  isLoading, 
  onInputChange, 
  onSendMessage 
}) => {
  
  // Thành phần này không có state, không có useEffect, không có logic.
  // Nó chỉ nhận props và hiển thị.

  return (
    <div className="chat-window">
      {/* 1. Hiển thị trạng thái Đang tải */}
      {isLoading && <div className="loading">Đang tải tin nhắn...</div>}
      
      {/* 2. Hiển thị danh sách tin nhắn */}
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      {/* 3. Hiển thị ô nhập liệu */}
      <div className="chat-input">
        <input
          type="text"
          value={currentInput}
          onChange={onInputChange} // Gọi hàm từ props
          placeholder="Nhập câu hỏi của bạn..."
        />
        <button onClick={onSendMessage}>Gửi</button> {/* Gọi hàm từ props */}
      </div>
    </div>
  );
};

export default ChatPresenter;