// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi Jane, Amazing how Mosey is simplifying state compliance for businesses across the board!",
    },
    {
      type:"user",
      text:"hi thanks for listen my gaali mr pratoosh"
    }
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
        <Header />
        <div className="chatbot-body">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.type === "user" ? "user" : "bot"}`}>
              {message.text}
            </div>
          ))}
        </div>
        <Footer
          userInput={userInput}
          handleUserInput={handleUserInput}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default App;
