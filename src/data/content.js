export const personalInfo = {
  name: 'Shiza Tariq',
  title: 'Computer Engineering Student',
  subtitles: ['Software Engineer', 'AI & Machine Learning Enthusiast'],
  email: 'iamsoshiza@gmail.com',
  github: 'https://github.com/shizatari',
  linkedin: 'https://www.linkedin.com/in/shiza-t-6a3589369/',
  instagram: 'https://instagram.com/iamshizatariq',
  resumePath: '/resume.pdf',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'PHP', 'HTML', 'CSS', 'SQL', 'MIPS Assembly'],
  },
  {
    title: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'Google Colab', 'Jupyter', 'CNN', 'Image Processing', 'Machine Learning'],
  },
  {
    title: 'Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
  },
  {
    title: 'Tools',
    skills: [
      'VS Code',
      'Google Cloud',
      'Git',
      'Docker',
      'Arduino IDE',
      'Cisco Packet Tracer',
      'MATLAB',
      'Proteus',
      'NetBeans',
      'Google Workspace',
      'MS Office',
    ],
  },
];

export const projects = [
  {
    id: 'pneumonia-detection',
    title: 'AI-Based Pneumonia Detection',
    problem: 'Early and accurate detection of pneumonia from chest X-rays is critical but often requires specialized radiological expertise.',
    solution:
      'Built a deep learning pipeline using CNN-based image classification to analyze chest X-ray images and assist in pneumonia detection with high accuracy.',
    technologies: ['Python', 'PyTorch', 'CNN', 'Image Processing', 'Jupyter'],
    achievements: [
      'Implemented end-to-end ML pipeline from preprocessing to inference',
      'Applied transfer learning for improved classification performance',
      'Designed a scalable model evaluation workflow',
    ],
  },
  {
    id: 'zoey-ai',
    title: 'Zoey AI Voice Chatbot',
    problem: 'Users needed an interactive, voice-enabled assistant for natural conversational experiences.',
    solution:
      'Developed an AI-powered voice chatbot integrating speech recognition and natural language processing for responsive, human-like interactions.',
    technologies: ['Python', 'AI/ML', 'Speech Processing', 'API Integration'],
    achievements: [
      'Built conversational flow with context-aware responses',
      'Integrated voice input and output capabilities',
      'Optimized response latency for real-time interaction',
    ],
  },
  {
    id: 'ecommerce',
    title: 'Smart E-Commerce System',
    problem: 'Traditional e-commerce platforms lacked intelligent product recommendations and streamlined user experiences.',
    solution:
      'Created a full-stack e-commerce platform with smart features, secure authentication, and a modern shopping experience.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'XAMPP'],
    achievements: [
      'Designed relational database schema for products and orders',
      'Implemented secure user authentication and cart management',
      'Built responsive UI for desktop and mobile users',
    ],
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    problem: 'Classic Minesweeper needed a clean, interactive digital implementation with intuitive gameplay.',
    solution:
      'Built a fully functional Minesweeper game with dynamic grid generation, flagging mechanics, and win/loss detection.',
    technologies: ['Java', 'OOP', 'GUI'],
    achievements: [
      'Implemented recursive cell reveal algorithm',
      'Designed modular game logic with clean class structure',
      'Added difficulty levels and score tracking',
    ],
  },
  {
    id: 'campus-network',
    title: 'Secure Campus Area Network',
    problem: 'Campus networks require secure segmentation, reliable connectivity, and proper infrastructure design.',
    solution:
      'Designed and simulated a secure campus area network with VLANs, routing protocols, and access control policies.',
    technologies: ['Cisco Packet Tracer', 'Networking', 'VLAN', 'Routing'],
    achievements: [
      'Architected multi-VLAN campus topology',
      'Configured routing and switching for secure communication',
      'Documented network design with IP addressing scheme',
    ],
  },
  {
    id: 'java-chat',
    title: 'Basic Java Chat Application',
    problem: 'Real-time communication between users required a lightweight client-server messaging solution.',
    solution:
      'Developed a socket-based chat application enabling multiple clients to exchange messages through a central server.',
    technologies: ['Java', 'Sockets', 'Multithreading'],
    achievements: [
      'Implemented concurrent client handling on server',
      'Built intuitive CLI/GUI chat interface',
      'Ensured reliable message delivery between clients',
    ],
  },
  {
    id: 'water-level',
    title: 'Water Level Indicator',
    problem: 'Monitoring water tank levels manually is inefficient and prone to overflow or shortage issues.',
    solution:
      'Designed an embedded water level indicator using sensors and microcontroller logic to provide real-time level alerts.',
    technologies: ['Arduino', 'Embedded Systems', 'Proteus', 'Sensors'],
    achievements: [
      'Integrated ultrasonic/water level sensors with Arduino',
      'Built LED/buzzer alert system for threshold levels',
      'Simulated and tested circuit in Proteus',
    ],
  },
];

export const education = {
  institution: 'University of Lahore',
  degree: 'BS Computer Engineering',
  period: '2023 – 2027',
  gpa: '3.97 / 4.0',
  coursework: [
    'Data Structures & Algorithms',
    'Computer Networks',
    'Digital Logic Design',
    'Microprocessor Systems',
    'Machine Learning',
    'Database Systems',
    'Software Engineering',
    'Embedded Systems',
  ],
};

export const leadershipRoles = [
  {
    organization: 'CES',
    role: 'General Secretary',
    description: 'Led organizational operations, coordinated events, and managed team communications.',
  },
  {
    organization: 'ASHRAE Society',
    role: 'Hosting Head',
    description: 'Planned and executed professional society events with seamless guest experience.',
  },
  {
    organization: 'ASME',
    role: 'Hosting Head',
    description: 'Managed event logistics, hosting teams, and on-stage coordination.',
  },
  {
    organization: 'MES',
    role: 'Hosting Head',
    description: 'Oversaw event hosting workflows and volunteer coordination for society programs.',
  },
  {
    organization: 'UOL Debating Society',
    role: 'Member',
    description: 'Participated in debates, public speaking events, and competitive discussions.',
  },
];

export const certifications = [
  {
    title: 'DigiSkills Freelancing',
    issuer: 'DigiSkills Pakistan',
    description: 'Professional freelancing skills including client management and digital service delivery.',
  },
  {
    title: 'DigiSkills Video Editing',
    issuer: 'DigiSkills Pakistan',
    description: 'Video production, editing workflows, and content creation fundamentals.',
  },
  {
    title: 'Machine Learning & Neural Networks Workshop',
    issuer: 'Workshop Certification',
    description: 'Hands-on training in neural networks, deep learning concepts, and model training.',
  },
  {
    title: 'Robot Simulation Workshop',
    issuer: 'Workshop Certification',
    description: 'Robot simulation techniques, modeling, and autonomous system prototyping.',
  },
];
