class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const msg = message.toLowerCase();

    // Greetings
    if (/(hi|hello|hey|good morning|good afternoon)/.test(msg)) {
      this.actionProvider.handleGreeting();
    }
    // Goodbye
    else if (/(bye|goodbye|see you)/.test(msg)) {
      this.actionProvider.handleGoodbye();
    }
    // About
    else if (/about|who are you|introduce/.test(msg)) {
      this.actionProvider.handleAboutMe();
    }
    // Skills
    else if (/skill|tech stack|technology|tools/.test(msg)) {
      this.actionProvider.handleSkills();
    }
    // Projects
    else if (/project|work you have done|portfolio/.test(msg)) {
      this.actionProvider.handleProjects();
    }
    // Experience
    else if (/experience|work history|background/.test(msg)) {
      this.actionProvider.handleExperience();
    }
    // Education
    else if (/education|study|qualification|degree/.test(msg)) {
      this.actionProvider.handleEducation();
    }
    // Contact
    else if (/contact|email|phone|linkedin/.test(msg)) {
      this.actionProvider.handleContact();
    }
    // Resume
    else if (/resume|cv/.test(msg)) {
      this.actionProvider.handleResume();
    }
    // Availability
    else if (/available|hiring|job|opportunity/.test(msg)) {
      this.actionProvider.handleAvailability();
    }
    // Unknown
    else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
