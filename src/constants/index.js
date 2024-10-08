import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  illinois,
  ucf,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  twitteranalysis,
  twitter,
  cs416,
  lending,
  skin,
  tf,
  cloud,
  ml,
  download
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Pacific Sports",
    icon: download,
    iconBg: "",
    date: "Apr 2023 - Current",
    points: [
      "Developed a customer relationship management platform (CRM) using Node.js and Firebase to reduce the overhead cost by 80%",
      "Designed and developed a scheduling board to connect players with coaches and increased individual profits of the coaches by 30%",
      "Built a messaging platform for the players to communicate with each other and schedule practices using Typescript",
      "Implemented authentication functions in Firebase/Firestore to manage user access and data security within the platform, ensuring streamlined integration with the backend and consistent user authentication across the application",
      "Implemented CI/CD pipelines using GitHub and Firebase Deploy, enabling automated and efficient deployment processes with continuous integration and delivery"
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "Loadsmart",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2021 - Feb 2023",
    points: [
      "Developed and maintained 7 different metrics that measure the developers' productivity to identify the bottlenecks in the workﬂow using Golang, PostgreSQL, and Superset.",
      "Built a solution that reverts the deployment of the services through a slack command reducing the time to rollback by 30 minutes using Golang and SlackAPI",
      "Collaborated with cross-functional teams to migrate the existing systems from Digital Ocean to AWS using Terraform, Kubernetes, Docker, and Bash.",
      "Developed a micro-service that checks for compliance checks for all projects in the company and notiﬁes teams that need to be compliant using HTML, CSS, JavaScript, React, and Golang.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Qualex",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2021",
    points: [
      "Made the ETL process more cost-effective by using AWS Lambda serverless functions to be triggered on object insertion in an S3 bucket and converted the data into parquet format to reduce the training time for the model and saved 3000$ dollars in the form of compute resources and storage space.",
      "Enhanced the data quality for the NLP models by gathering social media data and extracted keywords to enhance the prediction power by 15% using Python, Numpy, Pandas, Matplotlib, NLTK and TwitterAPI",
      "Extracted product data from Amazon's best-selling ranks to ﬁnd the critical characteristics of the products to analyze and visualize the consumer trends by using Beautifulsoup4 and selenium",
      "Developed a web application that identiﬁes skin cancer using pre-trained models from IBM API using HTML, CSS, Flask, and Python",
    ],
  },
  {
    title: "Tech lead",
    company_name: "Google Student Developer Club (GSDC)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2020 - May 2021",
    points: [
      "As a tech lead of the Google DSC, my main responsibility is to bridge the gap between theory and practical knowledge by providing hands-on experience to students and developers.",
      "Built a full-stack application tutorial to teach students the full life cycle of a web application using HTML, CSS, JavaScript, and GCP.",
      "Hosted several workshops, study sessions, and tutorials on React.js, Node.js, Firebase, and Google Cloud Platform.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "XI media labs",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designed and implemented 10 different multiplayer augmented reality (AR) games that can be played on both apple and android using Unity and React Native",
    ],
  },
];

const educations = [
  {
    title: "Masters in computer science and data science",
    company_name: "University of Illinois urbana champaign",
    icon: illinois,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2024 Expected",
    points: [
      " Grade: 3.4",
      "CS 412: Data Mining",
      "CS 416: Data Visualization",
      "CS 498: Advanced Machine Learning",
      "STAT 420: Statistical Modeling in R",
      "CS 498: Cloud Computing Applications",
      "CS 598: Foundations of Data Curation",
      "CS 598: Practical Statistical Learning",
      "CS 598: Advanced Bayesian Modeling",
    ],
  },
  {
    title: "Bachelors in Computer science",
    company_name: "University of Central Florida",
    icon: ucf,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - May 2021",
    points: [
      "Grade: 3.63",
    ],
  }
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Twitter analysis tool",
    description:
      "",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "stramlit",
        color: "green-text-gradient",
      },
      {
        name: "Twitter API",
        color: "blue-text-gradient",
      },
    ],
    image: twitteranalysis,
    source_code_link: "https://github.com/sa616473/twitter_analysis_cffc",
  },
  {
    name: "Amazon web scrapper",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web scrapping",
        color: "pink-text-gradient"
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/sa616473/amzon100_bsr_scrapping",
  },
  {
    name: "Real or not",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yello-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/sa616473/real_or_not",
  },
  {
    name: "Skin cancer detector",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Heroku",
        color: "pink-text-gradient",
      },
    ],
    image: skin,
    source_code_link: "https://github.com/sa616473/cancer-detector",
  },
  {
    name: "Lending Club",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Numpy & Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: lending,
    source_code_link: "https://github.com/sa616473/lendingCompany",
  },
  {
    name: "CS 416 data visualization Project",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "D3.js",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cs416,
    source_code_link: "https://github.com/",
  },
];
const certifications = [
  {
    name: "AWS machine learning",
    description:
      "",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "Sage Maker",
        color: "blue-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://www.credly.com/badges/7f6d4081-1de2-4391-ab9a-05bb3eedcf88?source=linked_in_profile",
  },
  {
    name: " AWS Cloud practitioner",
    description:
      "",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "EC2",
        color: "pink-text-gradient"
      },
      {
        name: "S3",
        color: "green-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://www.credly.com/badges/247382ed-4ab3-494b-bea1-4b921b6c9e14?source=linked_in_profile",
  },
  {
    name: "Tensorflow Developer",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep learning",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "yello-text-gradient",
      },
    ],
    image: tf,
    source_code_link: "https://www.credential.net/51bf5f89-2518-4a0c-b653-44f39fdb228b#gs.uerrr8",
  },
  
];


export { services, technologies, experiences, educations, testimonials, projects, certifications };
