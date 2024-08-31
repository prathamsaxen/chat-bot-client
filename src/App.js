import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi Jane, Amazing how Mosey is simplifying state compliance for businesses across the board!",
    },
  ]);

  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([
        ...messages,
        { type: "user", text: userInput },
        {
          type: "bot",
          text: "Hi Jane, Amazing how Mosey is simplifying state compliance for businesses across the board!",
        },
      ]);
      setUserInput("");
    }
  };

  return (
    <div className="app">
      <div className="chatbot-container">
        <Header/>
        <div className="chatbot-body">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.type === "user" ? "user" : "bot"}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Your question"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
