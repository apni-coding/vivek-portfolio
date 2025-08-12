import React, { useEffect, useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./chatBot.scss";
import "react-chatbot-kit/build/main.css";
import closeIcon from "../../assets/icon/close.svg";
import TypingIndicator from "./TypingIndicator";
function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Wait for chatbot to mount, then change placeholder
    const interval = setInterval(() => {
      const inputEl = document.querySelector(".react-chatbot-kit-chat-input");
      if (inputEl) {
        inputEl.placeholder = "Let's chat…";
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    const input = document.querySelector(".react-chatbot-kit-chat-input");
    const button = document.querySelector(".react-chatbot-kit-chat-btn-send");

    if (input && button) {
      const updateButtonState = () => {
        button.disabled = input.value.trim() === "";
      };

      // Initial check
      updateButtonState();

      // Watch for typing
      input.addEventListener("input", updateButtonState);

      return () => {
        input.removeEventListener("input", updateButtonState);
      };
    }
  }, [isOpen]);
  return (
    <div className="chatbot-wrapper">
     
      {/* Floating Button */}
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="chat-icon"
            fill="white"
          >
            <path d="M192 408h64v-48h-64zm384-216h-32a96 96 0 00-96-96H344V24a24 24 0 00-48 0v72H192a96 96 0 00-96 96H64a48 48 0 00-48 48v128a48 48 0 0048 48h32a96 96 0 0096 96h256a96 96 0 0096-96h32a48 48 0 0048-48V240a48 48 0 00-48-48zM96 368H64V240h32zm400 48a48.14 48.14 0 01-48 48H192a48.14 48.14 0 01-48-48V192a48 48 0 0148-48h256a48 48 0 0148 48zm80-48h-32V240h32zM240 208a48 48 0 1048 48 47.996 47.996 0 00-48-48zm160 0a48 48 0 1048 48 47.996 47.996 0 00-48-48zm-16 200h64v-48h-64zm-96 0h64v-48h-64z"></path>
          </svg>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <img src={closeIcon} alt={"close"} />
          </button>
          {/* <div className="typing-indictor"><TypingIndicator /></div> */}
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
