import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Nishu Rai",
  contact: {
    email: "rainishu111@gmail.com",
    linkedin: "https://linkedin.com/in/nishu-rai-320852190",
    github: "https://github.com/nishu91020",
  },
  education: [
    {
      school: "Army Institute of Technology, Pune",
      degree: "Bachelor of Engineering in Information Technology",
      duration: "July 2019 – July 2023",
      details: "C.G.P.A. : 9.32"
    },
    {
      school: "K V MEG, Bangalore",
      degree: "Class 12th, PCM with Computer Science",
      duration: "April 2017 – March 2018",
      details: "Percentage : 90.4"
    }
  ],
  skills: [
    {
      category: "Languages",
      skills: ["C++", "JavaScript", "TypeScript", "Java", "HTML", "Python"]
    },
    {
      category: "Libraries / Frameworks",
      skills: ["CSS", "ReactJS", "Express", "NodeJS", "Spring Boot", "LangChain", "LangGraph"]
    },
    {
      category: "Databases / Platforms",
      skills: ["MongoDB", "Firebase", "MySQL", "AWS", "Docker", "Kubernetes"]
    },
    {
      category: "Subjects",
      skills: ["Data Structures", "Algorithms", "OOP", "OS", "DBMS"]
    }
  ],
  experience: [
    {
      company: "Goldman Sachs",
      role: "Engineering Analyst",
      duration: "July 2023 – Present",
      points: [
        "Implemented Payment in Kind features for corporate loans in our deal management system.",
        "Owned the Automated user management Epic, collaborating with the permit team for user enabling. Automated provisioning for 100+ users, reducing manual effort by 50%.",
        "Designed a DynamoDB schema for storing updates in collateral metrics and added a Global Secondary Index (GSI) to enhance search efficiency.",
        "Published liquidated funds’ cash flow to the data lake and built an API to expose an endpoint to retrieve it using the React UI application.",
        "Improved KYC processing time by 30% for 3 business lines using AWS Lambda.",
        "Engineered AI workflow automating pre-close sign-off, cutting review time by 60%."
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Software Engineering Intern",
      duration: "January 2023 – June 2023",
      points: [
        "Developed an end-to-end feature to capture various attributes systematically related to the model investor using the React UI application.",
        "Kubernetes migration of various applications, which helped in improving CI/CD pipeline."
      ]
    },
    {
      company: "Goldman Sachs",
      role: "Summer Analyst",
      duration: "July 2022 – September 2022",
      points: [
        "Developed an end-to-end feature for Adjusting the cashflow of representative model investor.",
        "Enabled fund performance analysis, saving 200 hours quarterly."
      ]
    }
  ],
  projects: [
    {
      name: "CRISPY",
      techStack: "Python, TypeScript, ReactJS, RabbitMQ, Docker, Hugging face transformer",
      description: [
        "An application which scrapes technical news articles, mainly software related from the news websites and presents a summary of it along with narration.",
        "Additionally, tried to improve the summarization model’s accuracy by utilizing ensemble learning."
      ],
      link: "https://github.com/7TRED/crispy"
    },
    {
      name: "Meet Up",
      techStack: "Twilio video API, ReactJS, Firebase, NodeJS, ExpressJS",
      description: [
        "Interactive chat & video conferencing application.",
        "Project Submission for Microsoft Engage Mentorship program, using Agile development & SCRUM methodology.",
        "The web app has text-chat and video-chat features."
      ],
      link: "https://github.com/nishu91020/Teams-clone"
    },
    {
      name: "Research Buddy",
      techStack: "LangGraph, Python, GPT-4o",
      description: [
        "Developed an AI-powered research agent specializing in multi-domain knowledge synthesis.",
        "Integrated diverse research websites as tools to enable efficient data retrieval and analysis.",
        "Engineered a system to generate comprehensive, well-structured articles with cited sources."
      ]
    }
  ],
  achievements: [
    { title: "Bagged 3rd position in Lowe's house of code among 60k+ participants" },
    { title: "Microsoft Engage 2021 mentee" },
    { title: "Finalist in Smart India Hackathon" },
    { title: "Won best coder title in AIT code-down" },
    { title: "Selected for Codeft top 100 finalists among 5k+ registrations" }
  ]
};