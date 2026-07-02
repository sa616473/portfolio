import pacific from "../assets/company/pacific.png";
import starbucks from "../assets/company/starbucks.png";
import shopify from "../assets/company/shopify.png";
import tesla from "../assets/company/tesla.png";
import illinois from "../assets/eductation/illinois.png";
import ucf from "../assets/eductation/ucf.png";
import github from "../assets/github.png";
import credly from "../assets/credly.png";
import ml from "../assets/ml.png";
import tf from "../assets/tf.png";
import havenImg from "../assets/projects/haven.png";
import drashtaImg from "../assets/projects/drashta.png";

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

export const ROLES = [
  { code: "01", title: "Full Stack Engineer", sub: "React · Node · TypeScript" },
  { code: "02", title: "Backend Engineer", sub: "Go · Python · PostgreSQL" },
  { code: "03", title: "ML Engineer", sub: "TensorFlow · SageMaker" },
  { code: "04", title: "Cloud & DevOps", sub: "AWS · Kubernetes · Terraform" },
];

export const EXPERIENCE = [
  {
    date: "Apr 2023 — Present",
    title: "Full Stack Engineer",
    company: "Pacific Sports · San Jose, CA",
    icon: pacific,
    points: [
      "Built a production AI email agent using Claude Sonnet and the Gmail API that classifies inbound inquiries, generates draft replies, and queues them for human review — cutting time-to-first-response from hours to under 5 minutes.",
      "Developed a customer relationship management (CRM) platform using Node.js, TypeScript, and PostgreSQL, reducing operational overhead by approximately 80%.",
      "Containerized the platform with Docker and orchestrated deployment via Kubernetes, with infrastructure provisioned through Terraform for repeatable, scalable environments.",
      "Built a full-stack booking platform (React, FastAPI, PostgreSQL) that let 200+ users self-serve court reservations monthly, cutting manual scheduling effort by ~40%.",
    ],
  },
  {
    date: "Aug 2021 — Feb 2023",
    title: "Software Engineer",
    company: "Loadsmart · Chicago, IL",
    icon: starbucks,
    points: [
      "Developed and maintained seven productivity metrics to identify workflow bottlenecks using Golang, PostgreSQL, and Superset.",
      "Built a solution that reverted service deployments through a Slack command, reducing time to rollback by 30 minutes using Golang and Slack API.",
      "Developed a script that drove adoption of an internal tool from 10% to 100% by creating new pull requests in every project using Bash, Python, and GitHub API.",
      "Collaborated with cross-functional teams to migrate existing systems from Digital Ocean to AWS using Terraform, Kubernetes, Docker, and Bash.",
      "Developed a microservice that runs compliance checks for all projects in the company and notifies teams that need to remediate using HTML, CSS, JavaScript, React, and Golang.",
    ],
  },
  {
    date: "Dec 2020 — Aug 2021",
    title: "Software Engineer Intern",
    company: "Qualex · Miami, FL",
    icon: tesla,
    points: [
      "Made the ETL process more cost-effective using AWS Lambda serverless functions triggered on object insertion in an S3 bucket, converting data into Parquet format to reduce model training time and save $3,000 in compute and storage costs.",
      "Enhanced data quality for NLP models by gathering social media data and extracting keywords, improving model performance by 15% using Python, NumPy, Pandas, Matplotlib, NLTK, and Twitter API.",
      "Developed a web application that identifies skin cancer using pre-trained models from the IBM API using HTML, CSS, Flask, and Python.",
    ],
  },
  {
    date: "Oct 2020 — May 2021",
    title: "Tech Lead",
    company: "Google Student Developer Club",
    icon: shopify,
    points: [
      "Led the chapter, bridging theory and practice through hands-on projects for student developers.",
      "Built a full-stack application tutorial covering HTML, CSS, JavaScript, and GCP.",
      "Hosted workshops on React.js, Node.js, Firebase, and Google Cloud Platform.",
    ],
  },
];

export const EDUCATION = [
  {
    title: "M.S. Computer Science & Data Science",
    school: "University of Illinois Urbana-Champaign",
    date: "May 2024",
    logo: illinois,
    gpa: "GPA 3.5",
    courses: [
      "CS 412: Data Mining",
      "CS 416: Data Visualization",
      "CS 498: Advanced Machine Learning",
      "CS 498: Cloud Computing Applications",
      "STAT 420: Statistical Modeling in R",
      "CS 598: Foundations of Data Curation",
      "CS 598: Practical Statistical Learning",
      "CS 598: Advanced Bayesian Modeling",
    ],
  },
  {
    title: "B.S. Computer Science",
    school: "University of Central Florida",
    subtitle: "Minor in Business",
    date: "May 2021",
    logo: ucf,
    gpa: "GPA 3.7",
    courses: [
      "COP 3502C: Computer Science I",
      "COP 3503C: Computer Science II",
      "COP 3402: Systems Software",
      "COP 4516C: Problem Solving Techniques & Team Dynamics",
      "CAP 4453: Robot Vision",
      "MAS 3105: Matrix and Linear Algebra",
      "CAP 4630: Artificial Intelligence",
      "STA 4163: Statistical Methods II",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Haven",
    img: havenImg,
    placeholder: "HAVEN · CHROME",
    tags: ["Chrome Extension", "Claude Haiku", "FastAPI"],
    href: "https://github.com/sa616473/Haven",
    description:
      "Chrome extension that detects and blurs harmful text spans in real time using Claude Haiku via a FastAPI backend, designed to protect young users from exposure to harmful content.",
  },
  {
    name: "Drashta",
    img: drashtaImg,
    placeholder: "DRASHTA · AUDIT",
    tags: ["Python", "Terraform", "Merkle Trees"],
    href: "https://github.com/sa616473/drashta",
    description:
      "Open-source Python package that creates tamper-evident audit trails for AI agent actions using Merkle tree hashing, with infrastructure provisioned via Terraform for immutable, queryable logging.",
  },
];

export const CERTS = [
  {
    name: "AWS Machine Learning Specialty",
    img: ml,
    tags: ["Machine Learning", "SageMaker", "AWS"],
    href: "https://www.credly.com/badges/7f6d4081-1de2-4391-ab9a-05bb3eedcf88",
  },
  {
    name: "TensorFlow Developer",
    img: null,
    placeholder: "TF · DEVELOPER",
    tags: ["Python", "Deep Learning", "TensorFlow"],
    href: "https://www.credential.net/51bf5f89-2518-4a0c-b653-44f39fdb228b",
  },
];

export const COMMANDS = {
  about: {
    id: "about",
    hint: "who I am & how I work",
    summary:
      "full-stack engineer building production systems across web, cloud, and applied AI/ML — seeking roles where AI is core to the product.",
  },
  experience: {
    id: "experience",
    hint: "4 roles, 4+ years",
    summary: "full-stack @ pacific sports · software engineer @ loadsmart · intern @ qualex · tech lead @ google dsc.",
  },
  education: {
    id: "education",
    hint: "degrees & coursework",
    summary: "m.s. computer science & data science @ uiuc (3.5) · b.s. computer science @ ucf (3.7).",
  },
  projects: {
    id: "projects",
    hint: "selected work",
    summary: "haven — chrome extension for content safety · drashta — tamper-evident AI audit trails.",
  },
  certifications: {
    id: "certifications",
    hint: "verified credentials",
    summary: "aws machine learning specialty · tensorflow developer.",
  },
};

export { github, credly, tf };
