import { Terminal, Code, Cpu, Database, Cloud } from "lucide-react";
const portfolioData = {
  personal: {
    name: "Akshat Singh",
    title: "Software Developer",
    titles: [
      "Full Stack Developer",
      "AI & ML Enthusiast",
      "Problem Solver",
      "Open Source Contributor"
    ],
    email: "singhakshat.2407@gmail.com",
    phone: "+91-9773826963",
    location: "Prayagraj, India",
    links: {
      linkedin: "https://www.linkedin.com/in/akshatsingh28/",
      github: "https://github.com/Askhat26?tab=repositories",
      codeforces: "https://leetcode.com/u/Akshat__21/",
      resume: "https://drive.google.com/uc?export=download&id=16gE7OyzPxI30qUfkn0ftA1cDtEdfxZso"
    }
  },
  education: [
    {
      degree: "Bachelor of Technology, Chemical Engineering",
      institution: "Motilal Nehru National Institute of Technology Allahabad",
      location: "Prayagraj",
      years: "2022-2026",
      detail: "CPI 7.57 (till 6th Semester)"
    },
    
  ],
  projects: [
    {
      title: "Bond Beyond",
      subtitle: "College Social Platform",
      description: "Developed a real-time social media platform for college students with real-time messaging, post creation (text/image uploads), and group discussion features for academic collaboration.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Cloudinary", "Chakra UI"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Text-to-SQL",
      subtitle: "AI Visualization Tool",
      description: "A full-stack web app converting natural language queries into SQL using Groq AI with RAG-based ChromaDB integration. Features RESTful APIs, dynamic visualizations, and CSV exports.",
      tech: ["Python", "Flask", "Groq AI", "SQLite", "Docker", "ChromaDB"],
      links: {
        github: "#"
      }
    },
    {
      title: "P2P File Sharing",
      subtitle: "Distributed System",
      description: "Designed a TCP-based protocol for direct file transfer, implementing chunk-based concurrent downloading from multiple peers and SHA-1 hashing for file integrity.",
      tech: ["Python", "Flask", "Socket Programming", "Multithreading", "SHA-1"],
      links: {
        github: "#"
      }
    }
  ],
  skills: {
    "Languages": {
      items: ["C++", "Python", "JavaScript", "SQL"],
      icon: Terminal
    },
    "Web Technologies": {
      items: ["React", "Node.js", "Flask", "Socket.io", "HTML/CSS"],
      icon: Code
    },
    "AI/ML": {
      items: ["NLP", "Deep Learning", "LangChain", "Vector Databases", "RAG"],
      icon: Cpu
    },
    "Databases": {
      items: ["MySQL", "MongoDB", "PostgreSQL"],
      icon: Database
    },
    "Cloud & DevOps": {
      items: ["Docker", "Git", "GitHub Actions", "AWS"],
      icon: Cloud
    }
  },
  experience: [
    {
      role: "Co-head, Blood Donation Camp",
      organization: "Rotaract Club of MNNIT Allahabad",
      date: "Aug 2023 – Present",
      description: "Leading blood donation initiatives and coordinating with healthcare facilities"
    }
  ]
};
export default portfolioData;