import { CV_URL } from "../../constants/propertyReslover";
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
   handleGreeting() {
    this.addMessage(
      "Hi there! 👋 I’m Vivek Kumar, a MERN Stack Developer. How can I help you today?"
    );
  }

  handleGoodbye() {
    this.addMessage("Goodbye! 👋 Feel free to come back anytime.");
  }

  // About & Intro
  handleAboutMe() {
    this.addMessage(
      "I’m Vivek Kumar, a MERN Stack Developer with 2+ years of experience. I specialize in building scalable, secure, and responsive full-stack applications using React.js, Next.js, Node.js, and AWS services."
    );
  }

  // Skills
  handleSkills() {
    this.addMessage(
      "My skills include JavaScript, TypeScript, Java, React.js, Next.js, Redux Toolkit, Node.js, Express, GraphQL, Apollo Server, MySQL, PostgreSQL, MongoDB, AWS Lambda, S3, Cognito, Git, GitHub, Bitbucket, and JIRA."
    );
  }

  // Projects
  handleProjects() {
    this.addMessage(
      "Some of my key projects are:\n\n" +
        "📌 UltraTech Digital Ecosystem (Admin Panel, Partner Portal, Dashboards, Kiosk App, SR Tracker)\n" +
        "📌 OKU Mobile App (Healthcare backend with AWS Lambda, MySQL, Cognito)\n" +
        "📌 Coolant Management System (Industrial dashboard with Excel export & graphs)\n" +
        "📌 askUtec (Next.js social & booking platform with role-based access)"
    );
  }

  // Experience
  handleExperience() {
    this.addMessage(
      "I’m currently an Associate Software Engineer at iProgrammer Solutions Pvt. Ltd., Pune (Aug 2023 – Present). I also worked as a Teaching Assistant at Coding Ninjas (Jul 2023 – Feb 2024) where I mentored students and resolved 100+ coding queries."
    );
  }

  // Education
  handleEducation() {
    this.addMessage(
      "I hold an M.Tech and B.Tech in Computer Science from DCRUST, Sonipat."
    );
  }

  // Contact
  handleContact() {
    this.addMessage(
      "📧 Email: vivek7292932052@gmail.com\n🔗 LinkedIn: linkedin.com/in/vivek-kumar-b48165258\n💻 GitHub: github.com/apni-coding\n🌐 Portfolio: portfolio.apnicoding.in\n🧑‍💻 LeetCode: leetcode.com/apnicoding72"
    );
  }

  // Resume
  handleResume() {
    this.addMessage(`Here’s my resume: [Download Resume](${CV_URL}) 📄`);
  }

  // Availability
  handleAvailability() {
    this.addMessage(
      "I’m currently open to full-time opportunities and freelance projects."
    );
  }

  handleUnknown() {
    const message = this.createChatBotMessage(
      "I’m not sure about that, but here’s how you can reach me:",
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
