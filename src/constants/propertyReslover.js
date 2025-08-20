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
  // {
  //   id: 1,
  //   name: "askUtec by UltraTech",
  //   bgImg: askUtecBg,
  //   shortDescription:
  //     "Social media & booking platform for UltraTech dealers and customers.",
  //   category: ["web", "development"],
  //   projectInfo: {
  //     title: "askUtec by UltraTech",
  //     description: `askUtec is a comprehensive platform designed to connect UltraTech dealers with their customers, enabling seamless social interaction and efficient booking services. It streamlines dealer–customer communication and facilitates quick booking management.`,
  //     category: "Development",
  //     client: "UltraTech Industries",
  //     detailedIntro: {
  //       heading:
  //         "Empowering Connections and Streamlining Bookings for UltraTech Dealers and Customers",
  //       paragraph1: `askUtec transforms the way UltraTech dealers and customers interact by offering an intuitive, user-friendly platform that enhances communication and simplifies the booking process. By integrating social features with practical booking tools, the platform fosters stronger relationships, boosts engagement, and drives efficiency across the network.`,
  //       paragraph2: `Designed with scalability and real-time responsiveness in mind, askUtec delivers a seamless experience across all devices. The system equips dealers with a robust dashboard while giving customers easy access to bookings and updates. This initiative has significantly improved operational workflows and user satisfaction, setting a new benchmark for dealer–customer collaboration in the industry.`,
  //     },
  //     projectTimeline: {
  //       startDate: "Oct 2023",
  //       endDate: "Jan 2024",
  //     },
  //     roleAndResponsibilities: {
  //       shortDescription: `I served as the front-end developer, responsible for designing and implementing user interfaces, as well as integrating API endpoints.`,
  //       roleList: [
  //         "Developed responsive UI components using Next.js and Tailwind CSS.",
  //         "Built responsive UI components using React.js and Bootstrap CSS for the Admin Panel.",
  //         "Integrated RESTful APIs to fetch and display real-time booking data.",
  //         "Collaborated with the backend team to define API contracts.",
  //         "Implemented authentication and role-based access control.",
  //         "Conducted code reviews and optimized application performance.",
  //       ],
  //     },
  //     technologiesUsed: [
  //       "Next.js",
  //       "React.js",
  //       "Tailwind CSS",
  //       "Node.js",
  //       "Express.js",
  //       "MySQL",
  //       "JWT",
  //       "REST APIs",
  //       "AWS",
  //     ],
  //     features: [
  //       "User registration and authentication with JWT.",
  //       "Social media–style feed for dealer updates and announcements.",
  //       "Booking system with calendar view and status tracking.",
  //       "Role-based dashboards for dealers and customers.",
  //       "Real-time notifications via WebSocket.",
  //       "Admin panel for managing users and content.",
  //     ],
  //     challengesAndSolutions: [
  //       {
  //         challenge:
  //           "Handling real-time updates without overloading the server.",
  //         solution:
  //           "Implemented WebSocket with throttling to optimize data flow.",
  //       },
  //       {
  //         challenge: "Ensuring smooth, responsive design across devices.",
  //         solution:
  //           "Utilized Tailwind CSS utility classes in combination with media queries.",
  //       },
  //     ],
  //     keyLearnings: [
  //       "Deepened expertise in Next.js.",
  //       "Gained experience integrating real-time features with WebSocket.",
  //       "Enhanced collaboration skills while working with cross-functional teams.",
  //     ],
  //     projectScreenshots: [
  //       "/images/askUtec/dashboard.png",
  //       "/images/askUtec/booking.png",
  //       "/images/askUtec/profile.png",
  //     ],
  //     repoInfo: {
  //       // gitHubOwner: "apni-coding",
  //       // repoName: "vivek-portfolio",
  //       // branchName: "main"
  //     },
  //     liveDemoLink: "https://utecbyultratech.com/",
  //     conclusion: `The platform successfully improved communication and booking efficiency between dealers and customers, leading to a 30% increase in booking speed and receiving highly positive client feedback.`,
  //   },
  // },
  {
    id: 6,
    name: "Utec By UltraTech Digital Ecosystem",
    bgImg: null,
    shortDescription:
      "Suite of digital applications for UltraTech including Admin Panel, Partner Portal, One Technical Web, BPD Dashboard, Kiosk App, and SR Tracker.",
    category: ["web", "development"],
    projectInfo: {
      title: "Utec By UltraTech Digital Ecosystem",
      description: `A collection of interconnected web applications developed for UltraTech to enhance dealer, partner, and sales representative engagement. The suite includes Admin Panel, Partner Portal, One Technical Web, BPD Dashboard, Kiosk Application, and SR Tracker — each designed to address specific business needs from content management to sales tracking.`,
      category: "Development",
      client: "UltraTech Industries",
      detailedIntro: {
        heading: "Building a Connected Digital Ecosystem for UltraTech",
        paragraph1: `The Digital Ecosystem consolidates multiple applications under UltraTech’s umbrella, empowering partners, dealers, and internal teams with powerful tools for management, engagement, and tracking.`,
        paragraph2: `From managing leads and rewards to real-time tracking of sales representatives, each module was designed with scalability, responsiveness, and performance in mind. This ecosystem significantly enhanced efficiency and user experience across UltraTech’s digital operations.`,
      },
      projectTimeline: {
        startDate: "Aug 2023",
        endDate: "Present",
      },
      roleAndResponsibilities: {
        shortDescription: `I worked as a Frontend Developer across multiple modules, ensuring responsive design, reusable components, and smooth integrations.`,
        roleList: [
          "Developed responsive UIs with React.js and Next.js.",
          "Worked on Admin Panel for content, role, and user management.",
          "Built Partner Portal for B2B partners to track leads and activities.",
          "Implemented One Technical Web with chatbot, EMI calculator, and incident tracking.",
          "Developed BPD Dashboard with QR scanning, reward schemes, and incentives.",
          "Created Kiosk App for public digital displays.",
          "Worked on SR Tracker for real-time sales rep performance tracking.",
          "Implemented role-based access control, form validations, and reusable UI components.",
          "Followed Agile methodology using JIRA for task management.",
        ],
      },
      technologiesUsed: [
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Bootstrap CSS",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "AWS",
        "JIRA",
      ],
      features: [
        "Multi-application ecosystem under one platform.",
        "Role-based access control for different modules.",
        "Dynamic dashboards for partners, dealers, and sales reps.",
        "Chatbot integration, EMI calculator, and incident tracking.",
        "Reward and incentive management with QR scanning.",
        "Public-facing Kiosk application.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Maintaining consistency across multiple independent applications.",
          solution:
            "Developed a shared UI component library and enforced design standards.",
        },
        {
          challenge: "Integrating real-time updates across different modules.",
          solution:
            "Used efficient state management and modular API contracts to sync data.",
        },
      ],
      keyLearnings: [
        "Gained experience working on a large-scale multi-app ecosystem.",
        "Improved skills in modular development and reusable component design.",
        "Enhanced collaboration in Agile environments using JIRA.",
      ],
      projectScreenshots: [
        "/images/utec/admin.png",
        "/images/utec/partner.png",
        "/images/utec/dashboard.png",
      ],
      repoInfo: {},
      liveDemoLink: "#",
      conclusion: `This digital ecosystem streamlined UltraTech’s partner, dealer, and internal operations, boosting efficiency and engagement across all platforms.`,
    },
  },

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
        paragraph2: `Designed with scalability and real-time responsiveness in mind, askUtec delivers a seamless experience across all devices. The system equips dealers with a robust dashboard while giving customers easy access to bookings and updates.`,
      },
      projectTimeline: {
        startDate: "Oct 2023",
        endDate: "Jan 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I served as the front-end developer, working on the Admin Panel, Partner Portal, One Technical Web, BPD Dashboard, Kiosk App, and SR Tracker under UltraTech’s digital ecosystem.`,
        roleList: [
          "Developed responsive UIs using React.js and Next.js.",
          "Built reusable components and implemented form validations.",
          "Implemented role-based access control and dynamic data rendering.",
          "Worked on modules such as Admin Panel, Partner Portal, One Technical Web, and BPD Dashboard.",
          "Collaborated via Agile methodology using JIRA Epics, stories, and sprints.",
        ],
      },
      technologiesUsed: [
        "Next.js",
        "React.js",
        "Redux Toolkit",
        "Bootstrap CSS",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "AWS",
        "JIRA",
      ],
      features: [
        "User registration and authentication with role-based control.",
        "Social media–style feed for dealer updates and announcements.",
        "Booking system with calendar view and status tracking.",
        "Role-based dashboards for dealers, partners, and customers.",
        "Real-time notifications and activity tracking.",
        "Admin panel for managing users and content.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Maintaining consistent design across multiple modules (Admin, Partner Portal, Kiosk, etc.)",
          solution:
            "Created reusable UI components and followed strict design guidelines.",
        },
        {
          challenge: "Handling real-time updates without server overload.",
          solution:
            "Used WebSockets with throttling and efficient state management.",
        },
      ],
      keyLearnings: [
        "Deepened expertise in Next.js and Redux Toolkit.",
        "Learned to work across multiple interconnected applications under a single ecosystem.",
        "Gained strong collaboration experience via Agile methodology.",
      ],
      projectScreenshots: [
        "/images/askUtec/dashboard.png",
        "/images/askUtec/booking.png",
        "/images/askUtec/profile.png",
      ],
      repoInfo: {},
      liveDemoLink: "https://utecbyultratech.com/",
      conclusion: `The platform improved dealer–customer engagement and booking speed significantly, with positive client feedback.`,
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
      description: `An IoT-powered, role-based tracking dashboard enabling industries to monitor, manage, and analyze coolant usage, machine performance, and oil conditions in real time.`,
      category: "IoT",
      client: "Manufacturing Plant Automation Division",
      detailedIntro: {
        heading:
          "Revolutionizing Coolant and Machine Oil Tracking with IoT and Real-Time Analytics",
        paragraph1: `The Coolant Management System provides a centralized platform to manage companies, machines, and oils while tracking coolant levels, temperature, and quality across multiple machines.`,
        paragraph2: `With Excel exports, graph visualizations, and responsive design, the system helps managers make informed decisions and optimize efficiency.`,
      },
      projectTimeline: {
        startDate: "July 2023",
        endDate: "Dec 2023",
      },
      roleAndResponsibilities: {
        shortDescription: `I was the sole developer, responsible for designing and implementing the frontend with React.js and backend integrations.`,
        roleList: [
          "Built frontend with React.js for managing companies, machines, and oils.",
          "Developed dynamic forms for flexible data entry.",
          "Added Excel export functionality and graph visualizations.",
          "Implemented responsive UI/UX for managers and technicians.",
        ],
      },
      technologiesUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
        "ExcelJS",
      ],
      features: [
        "Real-time coolant level and oil tracking.",
        "Company, machine, and oil management modules.",
        "Excel export for reports.",
        "Graph visualizations for usage trends.",
        "Role-based dashboards for managers and technicians.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Processing large volumes of IoT data without latency.",
          solution:
            "Optimized backend queries and used efficient data handling.",
        },
        {
          challenge: "Ensuring accurate reporting with multiple datasets.",
          solution:
            "Implemented validation and aggregation logic at the backend.",
        },
      ],
      keyLearnings: [
        "Hands-on experience with IoT dashboards.",
        "Learned to build scalable visualizations with Chart.js.",
        "Improved skills in responsive frontend design.",
      ],
      projectScreenshots: [
        "/images/coolant/dashboard.png",
        "/images/coolant/alerts.png",
      ],
      repoLink: "https://github.com/yourusername/coolant-management",
      liveDemoLink: "#",
      conclusion: `This system reduced coolant wastage and improved predictive maintenance, lowering operational costs.`,
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
      description: `A mobile healthcare platform that uses AI to provide personalized wellness and medical recommendations.`,
      category: "Healthcare",
      client: "HealthTech Innovations",
      detailedIntro: {
        heading: "AI-Powered Personalized Healthcare in Your Pocket",
        paragraph1: `OKU is designed to be a personal health companion, offering tailored health advice, reminders, and activity tracking.`,
        paragraph2: `The app integrates with wearable devices, enabling real-time health monitoring and connecting users to healthcare professionals.`,
      },
      projectTimeline: {
        startDate: "March 2024",
        endDate: "Aug 2024",
      },
      roleAndResponsibilities: {
        shortDescription: `I developed the backend using AWS Lambda and TypeScript with MySQL integration.`,
        roleList: [
          "Built secure backend APIs with AWS Lambda.",
          "Integrated MySQL for structured data storage.",
          "Implemented authentication via AWS Cognito.",
          "Collaborated with UI/UX and mobile developers for smooth delivery.",
        ],
      },
      technologiesUsed: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MySQL",
        "AWS Lambda",
        "Cognito",
        "S3",
      ],
      features: [
        "AI-driven health and wellness recommendations.",
        "Integration with wearable devices.",
        "Secure authentication and user management.",
        "Activity and medication tracking.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling sensitive health data securely.",
          solution:
            "Implemented Cognito authentication and encrypted storage with MySQL and S3.",
        },
        {
          challenge: "Ensuring real-time sync with wearables.",
          solution:
            "Built optimized Lambda functions with event-driven triggers.",
        },
      ],
      keyLearnings: [
        "Hands-on experience with AWS Lambda and Cognito.",
        "Strengthened backend development with TypeScript and MySQL.",
        "Learned healthcare compliance requirements.",
      ],
      projectScreenshots: [
        "/images/oku/dashboard.png",
        "/images/oku/consultation.png",
      ],
      repoLink: "https://github.com/yourusername/oku-app",
      liveDemoLink: "https://www.oku-app.com/",
      conclusion: `The backend ensured secure, scalable operations, improving engagement and feedback from healthcare providers.`,
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
