import okuBg from "../assets/img/other/oku.png";
import askUtecBg from "../assets/img/other/askutec.jpg";

export const CV_URL =
  "https://drive.google.com/file/d/1xCxwj7C-KF1PIBAaEwhxz0f5RUCNyOhT/view?usp=sharing";

export const SOCIAL_MEDIA_LINKS = {
  YOUTUBE: "https://www.youtube.com/channel/UCeFHr8q8fDrgQt4d3EFEKIw",
  LINKEDIN: "https://www.linkedin.com/in/vivek-kumar-b48165258/",
  GITHUB: "https://github.com/apni-coding",
};

export const SERVICE_LIST = [
  {
    id: 1,
    heading: "Full-Stack Web Development",
    description:
      "Build responsive, scalable web apps using MongoDB, Express.js, React.js, and Node.js.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-layers"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    class: "color1",
  },
  {
    id: 2,
    heading: "Custom API Development",
    description:
      "Develop secure and efficient RESTful or GraphQL APIs for web and mobile platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-share-2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    class: "color2",
  },
  {
    id: 3,
    heading: "Admin Dashboards & CMS",
    description:
      "Create custom dashboards and content systems tailored to your business workflow.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-monitor"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    class: "color3",
  },
  {
    id: 4,
    heading: "Authentication & Authorization",
    description:
      "Implement secure auth systems with JWT, OAuth, social login, and access control.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-lock"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    class: "color4",
  },
  {
    id: 5,
    heading: "Database Design & Integration",
    description:
      "Design efficient MongoDB schemas and integrate advanced CRUD operations and indexing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    class: "color5",
  },
  {
    id: 6,
    heading: "Performance Optimization",
    description:
      "Optimize frontend and backend performance for faster load times and better UX.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-activity"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    class: "color6",
  },
];
export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer",
    shortDescription:
      "Building full-stack apps with Node.js, AWS Lambda, MongoDB, React, and Redux in Agile teams.",
    companyName: "iProgrammer Pvt. Ltd., Pune",
    date: "Aug 2023 – Present",
  },
  {
    id: 2,
    role: "Teaching Assistant",
    shortDescription:
      "Guided students in DSA, debugging code, and strengthening core CS concepts.",
    companyName: "Coding Ninjas, Gurgaon",
    date: "July 2023 – Feb 2024",
  },
];
export const EDUCATION = [
  {
    id: 1,
    degree: "M.Tech in CSE",
    shortDescription:
      "Focused on system design, research, and advanced CS concepts.",
    institution: "DCRUST, Sonipat",
    date: "2022 – 2024",
  },
  {
    id: 2,
    degree: "B.Tech in CSE",
    shortDescription:
      "Studied core CS subjects and built multiple web projects.",
    institution: "DCRUST, Sonipat",
    date: "2018 – 2022",
  },
];

export const SKILLS = [
  {
    name: "JavaScript",
    proficiency: 90,
  },
  {
    name: "Node.js & Express.js",
    proficiency: 90,
  },
  {
    name: "React.js",
    proficiency: 90,
  },
  {
    name: "TypeScript",
    proficiency: 70,
  },
  {
    name: "Next.js",
    proficiency: 60,
  },
  {
    name: "MySQL, PostgreSQL & MongoDB",
    proficiency: 70,
  },
  {
    name: "GraphQL & Apollo Server",
    proficiency: 60,
  },
  {
    name: "AWS (Lambda, S3, Cognito)",
    proficiency: 60,
  },
];

export const PROJECT_LIST = [
  {
    id: 1,
    name: "askUtec by UltraTech",
    bgImg: askUtecBg,
    shortDescription:
      "Social media & booking platform for UltraTech dealers and customers.",
    category: ["web", "development"],
    projectInfo: {
      title: "askUtec by UltraTech",
      description: `askUtec is a comprehensive platform designed to connect UltraTech dealers with their customers, enabling seamless social interaction and efficient booking services. It streamlines dealer–customer communication and facilitates quick booking management.`,
      category: "Development",
      client: "UltraTech Industries",
      detailedIntro: {
        heading:
          "Empowering Connections and Streamlining Bookings for UltraTech Dealers and Customers",
        paragraph1: `askUtec transforms the way UltraTech dealers and customers interact by offering an intuitive, user-friendly platform that enhances communication and simplifies the booking process. By integrating social features with practical booking tools, the platform fosters stronger relationships, boosts engagement, and drives efficiency across the network.`,
        paragraph2: `Designed with scalability and real-time responsiveness in mind, askUtec delivers a seamless experience across all devices. The system equips dealers with a robust dashboard while giving customers easy access to bookings and updates. This initiative has significantly improved operational workflows and user satisfaction, setting a new benchmark for dealer–customer collaboration in the industry.`,
      },
      projectTimeline: {
        startDate: "Oct 2023",
        endDate: "Jan 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I served as the front-end developer, responsible for designing and implementing user interfaces, as well as integrating API endpoints.`,
        roleList: [
          "Developed responsive UI components using Next.js and Tailwind CSS.",
          "Built responsive UI components using React.js and Bootstrap CSS for the Admin Panel.",
          "Integrated RESTful APIs to fetch and display real-time booking data.",
          "Collaborated with the backend team to define API contracts.",
          "Implemented authentication and role-based access control.",
          "Conducted code reviews and optimized application performance.",
        ],
      },
      technologiesUsed: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
        "REST APIs",
        "AWS",
      ],
      features: [
        "User registration and authentication with JWT.",
        "Social media–style feed for dealer updates and announcements.",
        "Booking system with calendar view and status tracking.",
        "Role-based dashboards for dealers and customers.",
        "Real-time notifications via WebSocket.",
        "Admin panel for managing users and content.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Handling real-time updates without overloading the server.",
          solution:
            "Implemented WebSocket with throttling to optimize data flow.",
        },
        {
          challenge: "Ensuring smooth, responsive design across devices.",
          solution:
            "Utilized Tailwind CSS utility classes in combination with media queries.",
        },
      ],
      keyLearnings: [
        "Deepened expertise in Next.js.",
        "Gained experience integrating real-time features with WebSocket.",
        "Enhanced collaboration skills while working with cross-functional teams.",
      ],
      projectScreenshots: [
        "/images/askUtec/dashboard.png",
        "/images/askUtec/booking.png",
        "/images/askUtec/profile.png",
      ],
      repoInfo: {
        // gitHubOwner: "apni-coding",
        // repoName: "vivek-portfolio",
        // branchName: "main"
      },
      liveDemoLink: "https://utecbyultratech.com/",
      conclusion: `The platform successfully improved communication and booking efficiency between dealers and customers, leading to a 30% increase in booking speed and receiving highly positive client feedback.`,
    },
  },
  {
    id: 2,
    name: "Coolant Management System",
    bgImg: null,
    shortDescription:
      "IoT-powered dashboard for real-time coolant tracking, machine management, and analytics.",
    category: ["web", "iot"],
    projectInfo: {
      title: "Coolant Management System",
      description: `An IoT-powered, role-based tracking dashboard enabling industries to monitor, manage, and analyze coolant usage, machine performance, and oil conditions in real time. The system streamlines operations, reduces downtime, and improves decision-making with advanced reporting and analytics.`,
      category: "IoT",
      client: "Manufacturing Plant Automation Division",
      detailedIntro: {
        heading:
          "Revolutionizing Coolant and Machine Oil Tracking with IoT and Real-Time Analytics",
        paragraph1: `The Coolant Management System provides a centralized platform to manage companies, machines, and oils while tracking coolant levels, temperature, and quality across multiple machines. Real-time IoT sensors feed data to the cloud, enabling predictive maintenance, reduced wastage, and improved operational efficiency.`,
        paragraph2: `With features like Excel exports, graph visualizations, custom filters, and dynamic forms, the dashboard empowers managers and technicians to make informed decisions, comply with safety regulations, and optimize resource usage. The responsive design ensures seamless accessibility on all devices.`,
      },
      projectTimeline: {
        startDate: "July 2023",
        endDate: "December 2023",
      },
      roleAndResponsibilities: {
        shortDescription: `I was the sole full-stack developer responsible for end-to-end development, from UI design to backend integration, ensuring a responsive and user-friendly experience.`,
        roleList: [
          "Built the frontend with React.js for managing companies, machines, and oils.",
          "Developed dynamic forms for flexible data entry.",
          "Integrated MQTT protocol for live IoT sensor data updates.",
          "Implemented Excel export functionality for reports.",
          "Added interactive graph visualizations using Chart.js.",
          "Created backend APIs with Node.js and Express.js for data processing.",
          "Implemented role-based access control for managers and technicians.",
          "Optimized MongoDB queries for large datasets.",
          "Ensured fully responsive UI/UX across devices.",
        ],
      },
      technologiesUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MQTT",
        "Chart.js",
        "ExcelJS",
      ],
      features: [
        "Real-time coolant level, temperature, and oil tracking.",
        "Company, machine, and oil management modules.",
        "Predictive maintenance alerts via email and SMS.",
        "Excel export for historical and filtered reports.",
        "Graph visualizations for usage trends and analytics.",
        "Role-based dashboards for managers and technicians.",
        "Advanced filtering for machines, oils, and usage data.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Processing large volumes of IoT data without latency.",
          solution:
            "Used MQTT with lightweight payloads and optimized backend aggregation queries.",
        },
        {
          challenge: "Ensuring accurate data from remote IoT devices.",
          solution:
            "Implemented checksum verification and retry logic for device communication.",
        },
      ],
      keyLearnings: [
        "Hands-on experience with MQTT and IoT device integration.",
        "Learned to optimize dashboards for high-volume, real-time data.",
        "Improved backend aggregation and reporting for industrial IoT applications.",
      ],
      projectScreenshots: [
        "/images/coolant/dashboard.png",
        "/images/coolant/alerts.png",
      ],
      repoLink: "https://github.com/yourusername/coolant-management",
      liveDemoLink: "#",
      conclusion: `This system reduced coolant wastage by 25% and improved predictive maintenance accuracy by 40%, significantly lowering operational costs and enhancing plant efficiency.`,
    },
  },
  {
    id: 3,
    name: "OKU Mobile App",
    bgImg: okuBg,
    shortDescription:
      "Personalized healthcare app with AI-driven recommendations.",
    category: ["mobile", "healthcare"],
    projectInfo: {
      title: "OKU Mobile App",
      description: `A mobile healthcare platform that uses AI to provide personalized wellness and medical recommendations to users based on their health data and lifestyle patterns.`,
      category: "healthcare",
      client: "HealthTech Innovations",
      detailedIntro: {
        heading: "AI-Powered Personalized Healthcare in Your Pocket",
        paragraph1: `OKU is designed to be a personal health companion, offering tailored health advice, medication reminders, and activity tracking. Leveraging AI algorithms, the app analyzes user data to provide actionable wellness recommendations.`,
        paragraph2: `The app integrates seamlessly with wearable devices, enabling real-time health monitoring and connecting users to healthcare professionals for remote consultations.`,
      },
      projectTimeline: {
        startDate: "March 2024",
        endDate: "August 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I served as the Node.js backend developer, building secure and scalable REST APIs using AWS Lambda and MongoDB.`,
        roleList: [
          "Designed and implemented RESTful APIs to support mobile app functionalities.",
          "Developed AWS Lambda functions for serverless backend operations.",
          "Integrated AI-based recommendation engine with API endpoints.",
          "Implemented authentication and authorization using JWT.",
          "Connected backend with wearable device data through third-party APIs.",
          "Ensured HIPAA compliance and secure storage of sensitive health data.",
          "Optimized database queries and indexing in MongoDB for fast response times.",
        ],
      },
      technologiesUsed: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS Lambda",
        "API Gateway",
        "TensorFlow.js",
        "JWT",
        "S3",
      ],
      features: [
        "AI-driven health and wellness recommendations.",
        "Integration with wearable devices and fitness trackers.",
        "Secure authentication and user management.",
        "Medication and activity tracking APIs.",
        "Video consultation scheduling APIs.",
        "Encrypted storage for sensitive health records.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Handling sensitive health data securely in compliance with HIPAA.",
          solution:
            "Implemented end-to-end encryption, secured API Gateway endpoints, and used encrypted MongoDB storage.",
        },
        {
          challenge:
            "Ensuring real-time synchronization with wearable device data.",
          solution:
            "Built optimized AWS Lambda functions with event-driven architecture to handle frequent updates efficiently.",
        },
      ],
      keyLearnings: [
        "Gained in-depth experience in serverless architecture with AWS Lambda.",
        "Enhanced skills in designing secure APIs for healthcare applications.",
        "Learned to integrate AI-driven features within backend services.",
      ],
      projectScreenshots: [
        "/images/oku/dashboard.png",
        "/images/oku/consultation.png",
      ],
      repoLink: "https://github.com/yourusername/oku-app",
      liveDemoLink: "https://www.oku-app.com/",
      conclusion: `The backend successfully powered an AI-driven healthcare app, ensuring secure and scalable operations, resulting in a 45% increase in user engagement and highly positive feedback from healthcare providers.`,
    },
  },
  {
    id: 4,
    name: "Smart Inventory Manager",
    bgImg: null,
    shortDescription:
      "Cloud inventory tool with barcode scanning and stock alerts.",
    category: ["web", "inventory"],
    projectInfo: {
      title: "Smart Inventory Manager",
      description: `A cloud-based inventory management platform with real-time stock updates, barcode scanning, and automated low-stock alerts.`,
      category: "inventory",
      client: "Retail Solutions Inc.",
      detailedIntro: {
        heading: "Smarter Inventory Tracking with Automation and Cloud Sync",
        paragraph1: `Smart Inventory Manager helps businesses manage their stock levels with ease, offering real-time tracking, barcode scanning, and automatic notifications when items run low.`,
        paragraph2: `The platform enables multi-location inventory management, supports supplier integration, and offers exportable analytics to optimize purchasing decisions.`,
      },
      projectTimeline: {
        startDate: "January 2024",
        endDate: "April 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I developed the front-end interface and integrated barcode scanning functionality.`,
        roleList: [
          "Built a responsive inventory dashboard in React.js.",
          "Integrated barcode scanner API for quick stock updates.",
          "Implemented low-stock alert system with email notifications.",
          "Connected the app to a cloud backend for real-time synchronization.",
          "Optimized database structure for fast inventory queries.",
        ],
      },
      technologiesUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Barcode Scanner API",
      ],
      features: [
        "Real-time inventory updates.",
        "Barcode scanning via mobile camera.",
        "Automated low-stock alerts.",
        "Multi-location inventory tracking.",
        "Exportable reports in CSV and PDF.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Accurate barcode scanning on all devices.",
          solution:
            "Implemented a fallback manual input system for devices with poor camera quality.",
        },
        {
          challenge: "Syncing large inventories in real-time.",
          solution:
            "Used Firebase real-time database with offline caching support.",
        },
      ],
      keyLearnings: [
        "Improved skills in hardware API integrations.",
        "Learned advanced real-time database synchronization techniques.",
        "Gained experience in building scalable inventory systems.",
      ],
      projectScreenshots: [
        "/images/inventory/dashboard.png",
        "/images/inventory/barcode.png",
      ],
      repoLink: "https://github.com/yourusername/smart-inventory",
      liveDemoLink: "#",
      conclusion: `Reduced manual stock-taking time by 60% and prevented out-of-stock issues through automated alerts.`,
    },
  },
  {
    id: 5,
    name: "TravelMate Booking App",
    bgImg: null,
    shortDescription: "Travel booking app with AI-generated itineraries.",
    category: ["mobile", "travel"],
    projectInfo: {
      title: "TravelMate Booking App",
      description: `A mobile travel booking platform with AI-powered itinerary generation based on user preferences, budget, and time constraints.`,
      category: "travel",
      client: "Wanderlust Technologies",
      detailedIntro: {
        heading: "Personalized Travel Planning with AI-Powered Recommendations",
        paragraph1: `TravelMate makes trip planning effortless by using AI to suggest personalized itineraries, book hotels, flights, and activities—all in one app.`,
        paragraph2: `The app integrates with multiple travel APIs to provide the best deals, and offers offline access to booked itineraries for convenience.`,
      },
      projectTimeline: {
        startDate: "May 2024",
        endDate: "October 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I worked as the lead developer focusing on AI integration and booking APIs.`,
        roleList: [
          "Developed mobile UI with React Native.",
          "Integrated AI algorithm for itinerary generation.",
          "Connected to travel APIs for booking hotels, flights, and activities.",
          "Implemented offline mode with local storage caching.",
          "Integrated secure payment gateways.",
        ],
      },
      technologiesUsed: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "Stripe",
        "Travel APIs",
      ],
      features: [
        "AI-generated itineraries based on preferences.",
        "Hotel, flight, and activity bookings in one place.",
        "Offline access to trip plans.",
        "Secure payment processing.",
        "Multi-currency support.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Generating accurate itineraries with limited user input.",
          solution:
            "Trained AI model to infer preferences from travel history and basic questions.",
        },
        {
          challenge: "Handling multiple third-party API integrations.",
          solution:
            "Implemented an API aggregation layer for consistent responses.",
        },
      ],
      keyLearnings: [
        "Learned effective AI integration for recommendation systems.",
        "Gained experience in complex third-party API handling.",
        "Enhanced skills in secure mobile payment integration.",
      ],
      projectScreenshots: [
        "/images/travelmate/itinerary.png",
        "/images/travelmate/booking.png",
      ],
      repoLink: "https://github.com/yourusername/travelmate",
      liveDemoLink: "#",
      conclusion: `Helped users save an average of 3+ hours in trip planning, with over 90% satisfaction in itinerary accuracy.`,
    },
  },
];

export const CERTIFICATE_REWARD_LIST = [
  {
    id: "reward-1",
    name: "Best Employee of the Month",
    type: "reward",
    category: ["reward"],
    bgImg: require("../assets/achievement/july_emp_month.jpg"),
    shortDescription: "Recognized for outstanding performance in July 2024.",
  },
  {
    id: "cert-1",
    name: "Full Stack Developer Certification",
    type: "certificate",
    category: ["certificate"],
    bgImg: require("../assets/achievement/fullstack.jpg"),
    shortDescription:
      "Awarded for exceptional performance in completing the Full Stack Development Bootcamp.",
  },
  {
    id: "cert-2",
    name: "Node.js Certification",
    type: "certificate",
    category: ["certificate"],
    bgImg: require("../assets/achievement/nodejs.jpg"),
    shortDescription:
      "Awarded for exceptional performance in completing the Node.js Development Program.",
  },
  {
    id: "cert-3",
    name: "React Certification",
    type: "certificate",
    category: ["certificate"],
    bgImg: require("../assets/achievement/react.jpg"),
    shortDescription:
      "Awarded for exceptional performance in completing the React Development Program.",
  },
  {
    id: "cert-4",
    name: "DSA in Java Certification",
    type: "certificate",
    category: ["certificate"],
    bgImg: require("../assets/achievement/dsa_in_java.jpg"),
    shortDescription:
      "Awarded for exceptional performance in completing the Data Structures and Algorithms in Java Program.",
  },
  {
    id: "ach-1",
    name: "LeetCode 500 Problems Badge",
    type: "achievement",
    category: ["programming"],
    bgImg: require("../assets/achievement/leetcode.jpg"),
    redirectLink: "https://leetcode.com/u/apnicoding72/",
    shortDescription: "Awarded for solving 500+ coding problems on LeetCode.",
  },
  {
    id: "ach-2",
    name: "LeetCode Daily Streak Badge",
    type: "achievement",
    category: ["programming"],
    bgImg: require("../assets/achievement/leetcode.jpg"),
    redirectLink: "https://leetcode.com/u/apnicoding72/",
    shortDescription:
      "Maintained a daily problem-solving streak for 100+ days.",
  },
];
