import { createChatBotMessage } from 'react-chatbot-kit';
import ContactOptions from './ContactOption';

const config = {
  botName: "Vivek's Assistant",
  initialMessages: [
    createChatBotMessage("Hi! I’m Vivek’s portfolio assistant. Ask me about my skills, projects, or experience.")
  ],
   widgets: [
    {
      widgetName: "contactOptions",
      widgetFunc: (props) => <ContactOptions {...props} />
    },
  ]
};

export default config;
