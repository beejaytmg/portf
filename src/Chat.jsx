import React, { useState } from 'react';
import ollama from 'ollama';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: inputValue },
      ]);
      setInputValue('');

      const response = await ollama.chat({
        model: 'llama2',
        messages: [...messages, { role: 'user', content: inputValue }],
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: response.message.content },
      ]);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;