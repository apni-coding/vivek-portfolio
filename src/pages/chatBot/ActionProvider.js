import { POST } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  // Helper to add text-only messages
  addMessage(text) {
    const message = this.createChatBotMessage(text);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
  // Greetings
  handleGreeting() {
    this.addMessage(
      "Hi there! 👋 I’m Vivek, a MERN Stack Developer. How can I help you today?"
    );
  }

  handleGoodbye() {
    this.addMessage("Goodbye! 👋 Feel free to come back anytime.");
  }

  // About & Intro
  handleAboutMe() {
    this.addMessage(
      "I’m Vivek Kumar, a MERN stack developer with experience in React.js, Node.js, Express, MongoDB, and TypeScript."
    );
  }

  // Skills
  handleSkills() {
    this.addMessage(
      "My skills include React.js, Node.js, Express, MongoDB, TypeScript, and REST/GraphQL APIs."
    );
  }

  // Projects
  handleProjects() {
    this.addMessage(
      "Some of my projects: Portfolio Website, MERN Chat App, Strapi Blog Platform, and a Task Manager App."
    );
  }

  // Experience
  handleExperience() {
    this.addMessage(
      "I have 1.5+ years as an Associate Software Engineer at IF Programmer and currently work at Zepto."
    );
  }

  // Education
  handleEducation() {
    this.addMessage(
      "I hold a Bachelor's degree in Computer Science and love learning new technologies."
    );
  }

  // Contact
  handleContact() {
    this.addMessage(
      "You can reach me at: 📧 vivek@example.com or on LinkedIn: linkedin.com/in/vivek."
    );
  }

  // Resume
  handleResume() {
    this.addMessage("Here’s my resume: [Download Resume](#) 📄");
  }

  // Availability
  handleAvailability() {
    this.addMessage(
      "I’m currently open to freelance and full-time opportunities."
    );
  }

  handleUnknown() {
    const message = this.createChatBotMessage(
      "I’m not sure about that, but here’s how you can reach me through:",
      { widget: "contactOptions" }
    );
    this.addMessageToState(message);
  }

  async handleUserMessage(userMessage) {
    let thinkingId;
    try {
      const thinkingMessage = this.createChatBotMessage("", {
        widget: "typingIndicator",
      });
      thinkingId = thinkingMessage.id;
      this.addMessageToState(thinkingMessage);

      // Call API
      const response = await POST(API_END_POINT.CHAT_BOT, {
        message: userMessage,
      });

      // Check if request was successful
      if (response.status !== 200)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response?.data?.data;

      // If no reply found in API
      if (!data.reply || data.reply.trim() === "") {
        return this.handleUnknown();
      }
      // Remove thinking and add API response in one go
      this.setState((prev) => {
        const filteredMessages = prev.messages.filter(
          (msg) => msg.id !== thinkingId
        );
        return {
          ...prev,
          messages: [
            ...filteredMessages,
            this.createChatBotMessage(data.reply),
          ],
        };
      });
    } catch (error) {
      console.error("API call failed:", error);

      // Remove thinking
      // this.setState((prev) => ({
      //   ...prev,
      //   messages: prev.messages.filter((msg) => msg.id !== thinkingId),
      // }));

      // Call fallback
      this.handleUnknown();
    }
  }

  addMessageToState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
