// tech icons
import api from "../assets/tech/api.png";
import aws from "../assets/tech/aws.png";
import bootstrap from "../assets/tech/bootstrap.png";
import css from "../assets/tech/css.png";
import ejs from "../assets/tech/ejs.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongoose from "../assets/tech/mongoose.png";
import mongodb from "../assets/tech/mongodb.png";
import node from "../assets/tech/node.png";
import photoshop from "../assets/tech/photoshop.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import scss from "../assets/tech/scss.png";
import tailwind from "../assets/tech/tailwind.png";
import express from "../assets/tech/express.png";

// projects
import bankist from "../assets/projectsImg/bankist.png";
import bankist2 from "../assets/projectsImg/bankist2.png";
import discountsCalc from "../assets/projectsImg/discounts-calc.png";
import drumMachine from "../assets/projectsImg/drum-machine.png";
import housing from "../assets/projectsImg/house marketplace.png";
import markdown from "../assets/projectsImg/markdown-previewer.png";
import newsHomepage from "../assets/projectsImg/news-homepage.png";
import portfolio from "../assets/projectsImg/portfolio.png";
import quoteMachine from "../assets/projectsImg/quote-machine.png";
import sneakers from "../assets/projectsImg/sneakers.png";
import softway from "../assets/projectsImg/softway.png";
import templeSeti from "../assets/projectsImg/temple-of-seti.png";
import yelpCamp from "../assets/projectsImg/yelpCamp.png";
import clock25 from "../assets/projectsImg/clock25.png";

const introduction = {
  text: [
    "I'm Michel, a passionate and driven self-taught developer based in Manchester, UK.",

    "I'm an academically-trained historian, but I now work with a variety of frontend and analytical languages, responsive frameworks, and database management systems.",

    "I'm most comfortable working with React and the MERN stack.",

    "I'm currently building a web platform for event planning, mixing both corporate and private events, with a strong focus on social sharing and a client-side calendar-based planning.",

    "When I'm not on my computer or exploring the city, I practice languages or read history.",
  ],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: html,
    label: "HTML",
    category: "front-end",
  },
  {
    id: "css",
    title: "CSS",
    icon: css,
    label: "CSS",
    category: "front-end",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: javascript,
    label: "Javascript",
    category: "front-end",
  },
  {
    id: "scss",
    title: "SCSS",
    icon: scss,
    label: "SCSS",
    category: "front-end",
  },
  {
    id: "react",
    title: "React",
    icon: reactjs,
    label: "React JS",
    category: "front-end",
  },
  {
    id: "git",
    title: "Git",
    icon: git,
    label: "GIT",
    category: "back-end",
  },
  {
    id: "redux",
    title: "REDUX",
    icon: redux,
    label: "Redux",
    category: "front-end",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    icon: mongodb,
    label: "Mongo DB",
    category: "back-end",
  },
  {
    id: "photoshop",
    title: "Photoshop",
    icon: photoshop,
    label: "Photoshop",
    category: "front-end",
  },
  {
    id: "api",
    title: "API",
    icon: api,
    label: "API",
    category: "back-end",
  },
  {
    id: "node",
    title: "Node.js",
    icon: node,
    label: "Node.js",
    category: "back-end",
  },
  {
    id: "mongoose",
    title: "Mongoose",
    icon: mongoose,
    label: "Mongoose",
    category: "back-end",
  },
  {
    id: "tailwind",
    title: "Tailwind",
    icon: tailwind,
    label: "Tailwind",
    category: "front-end",
  },
  {
    id: "ejs",
    title: "EJS",
    icon: ejs,
    label: "EJS",
    category: "front-end"
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    icon: bootstrap,
    label: "Bootstrap",
    category: "front-end"
  },
  {
    id: "express",
    title: "Express",
    icon: express,
    label: "Express",
    category: "back-end"
  },
];

const projects = [
  {
    id: 13,
    title: "YelpCamp",
    category: "website",
    technologies: [mongodb, mongoose, ejs, bootstrap, express],
    image: yelpCamp,
    subtitle: "A Yelp-like website to list campgrounds",
    summary: "YelpCamp is a web app offers a login function powered by MongoDB and Passport and the option for users to create, modify, and delete campgrounds and display them on a map.",
    features: ["Express Middleware", "Express Error Handling", "Joi Validator", "Cookies", "Mapbox implementation", "Database Security"],
    link: "https://yelpcamp-ye9z.onrender.com",
  },
  {
    id: 7,
    title: "Personal Portfolio",
    category: "website",
    technologies: [reactjs, scss],
    image: portfolio,
    subtitle: "A portfolio build around the theme of the desert",
    summary: "I built my portfolio to showcase what I have learned so far. TBC",
    features: ["Parallax Effect", "Framer-Motion", "Responsive Design"],
    link: "https://www.google.com",
  },
  {
    id: 12,
    title: "Sneakers Landing Page",
    category: "website",
    technologies: [reactjs, tailwind],
    image: sneakers,
    subtitle: "A product landing page for a sneaker",
    summary: "This project was built as part of a Frontend Mentor Challenge. I used it as an opportunity to practice state management (Zustand), hone my skills with Tailwind and Framer-Motion, and create a lightbox from scratch. It includes logic to make the sidebar menu and the cart disappear on resize or click outside the element. I paid particular attention to make it visually appealing. One issue remains with the cart in medium-size screens.",
    features: ["Zustand", "Framer-Motion", "Tailwind"],
    link: "https://sneaker-product-landing-page.netlify.app"
  },
  {
    id: 8,
    title: "Housing Marketplace",
    category: "website",
    technologies: [reactjs, aws],
    image: housing,
    subtitle: "Interactive Housing Marketplace Platform",
    summary:
      "Developed as part of the React Front to Back 2022 course, this project allows users to explore properties. Users can browse through a  selection of rental and purchase listings with the possibility of creating their personalized access using Firebase authentication. Users can then edit, and manage their own property listings effortlessly, all accessible from their unique user profile.",
    features: ["AWS user login", "Create/edit listings", "Profile view"],
    link: "https://bright-mandazi-d30993.netlify.app",
  },
  {
    id: 2,
    title: "Bankist App",
    category: "website",
    technologies: [javascript, css],
    image: bankist2,
    subtitle: "The Bankist's web app with a deposit and withdrawal function",
    summary:
      "This is a continuation of the Bankist website project. The goal was to implement key functionalities with Javascript to simulate a banking web app's user experience.",
    features: [
      "Login function",
      "Sorting",
      "Money Transfer",
      "Loan Request",
      "Account Deletion",
    ],
    link: "https://famous-moonbeam-55d065.netlify.app",
  },
  {
    id: 1,
    title: "Bankist Website",
    category: "website",
    technologies: [javascript, css],
    image: bankist,
    subtitle: "A bank website built with vanilla JS",
    summary:
      "This project is a recreation of the Bankist website, built as part of the course 'The Complete JavaScript Course 2023: From Zero to Expert!' by Jonas Schmedtmann. The goal of this project is to practice and apply various JavaScript concepts to create an interactive bank website.",
    features: [
      "Modal window",
      "Menu fade animation",
      "Reveal Sections",
      "Lazy loading images",
      "Slider",
    ],
    link: "https://clever-longma-e1e272.netlify.app",
    repository:
      "https://github.com/KangFennex/Bankist-Website---Javascript-Course/tree/main",
  },
  {
    id: 6,
    title: "Discount Calculator",
    category: "tool",
    technologies: [javascript, css],
    image: discountsCalc,
    subtitle:
      "A tool to calculate discounts based on membership cost and rental turnover",
    summary:
      "This project was built for coworkers at the sales' department who needed a simple and swift tool to calculate discounts based on the membership cost, number of rental units and the rental turnover (in French).",
    features: ["vanilla JS"],
    link: "https://calculateur-rabais-pex.netlify.app",
  },
  {
    id: 10,
    title: "News Homepage",
    category: "website",
    technologies: [javascript, css],
    image: newsHomepage,
    subtitle: "Tech news website's homepage",
    summary:
      "A sample for a tech news website's homepage built as part of the challenges offered by Frontend Mentor. I used this project as an opportunity to practice CSS Grid.",
    features: ["CSS Grid", "Mobile-first Webflow", "Responsive Design"],
    link: "https://news-homepage-frontend-mentor1.netlify.app",
  },
  {
    id: 11,
    title: "Softway Grocery",
    category: "website",
    technologies: [reactjs, redux, css],
    image: softway,
    subtitle: "A shopping cart using Redux toolkit",
    summary: "This shopping cart was built in order to practice state management using Redux Toolkit. It includes logics for discounted items and a responsive design.",
    features: [
      "Redux toolkit",
      "Item Discounts",
      "React Router",
      "Responsive Design",
    ],
    link: "https://softway-grocery-app.netlify.app",
  },
  {
    id: 4,
    title: "Markdown Previewer",
    category: "tool",
    technologies: [reactjs, css],
    image: markdown,
    subtitle: "A markdown previewer using the Marked library",
    summary:
      "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. It makes use the the Marked library to parse the HTML fed by the user and displays the result in the previewer. It built without instructions.",
    features: ["Use of a library", "Appealing design", "Responsiveness"],
    link: "https://dainty-boba-245427.netlify.app",
  },
  {
    id: 5,
    title: "Drum Machine",
    category: "tool",
    technologies: [reactjs, css],
    image: drumMachine,
    subtitle: "A drum machine with an appealing design",
    summary:
      "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. It integrates an on/off function and volume control. I put a particular focus on creating a visually appealing app that appears real. It built without instructions.",
    features: ["On/Off function", "Volume Control"],
    link: "https://rad-crumble-fbf99b.netlify.app",
  },
  {
    id: 14,
    title: "25 + 5 Clock",
    category: "tool",
    technologies: [css],
    image: clock25,
    subtitle: "25 + 5 clock",
    summary: "A simple 25 + 5 clock built as part of the FreeCodeCamp's Front End Development Libraries certification process. It integrates a countdown that can be set by the user. Once finished, an alarm sets off and the 5 minutes countdown begins.",
    features: ["Alarm set off", "useEffect"],
    link: "https://illustrious-conkies-89d8c1.netlify.app",
  },
  {
    id: 3,
    title: "Random Quote Machine",
    category: "tool",
    technologies: [reactjs, api, css],
    image: quoteMachine,
    subtitle: "Quote Generator",
    summary:
      "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. Built without instructions, it makes use of an API and CSS animations to achieve the animated coloured border.",
    features: ["API"],
    link: "https://random-quote-machine-fcc-kangkm.netlify.app",
  },

  {
    id: 9,
    title: "The Temple of Seti I",
    category: "website",
    technologies: [javascript, css],
    image: templeSeti,
    subtitle: "My very first website",
    summary: "This is the first website I built as part of Colt Steele's The Web Developer Bootcamp 2023. I used the project as an opportunity to look back at my trip to Egypt. An emphasis was put on responsiveness and I used vanilla Javascript for the image carousel.",
    features: ["Responsive Design", "Bootstrap", "Image Carousel"],
    link: "https://temple-of-seti-abydos.netlify.app",
  },
];

export { introduction, skills, projects };
