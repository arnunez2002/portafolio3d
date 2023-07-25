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
  tesla,
  shopify,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Google Cloud Plattaform Certificate",
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
    title: "System Engineer",
    company_name: "Universidad El Bosque",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - July 2023",
    points: [
      "developing information systems using the MVC model.",
      "design systems with software architecture Client-server architecture, SOA and container-based architecture.",
      "Uso de distintos diagramas cómo Diagrama de casos de uso, Diagrama de paquetes y componentes, Diagramas de secuencia y UML",
    ],
  },
  {
    title: "React Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js an Typescript.",
      "Use difrents API's with the CRUD structure and connect it with diffrent Backend services.",
      "Collaborating with cross-functional teams to include Architecture designers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Personal sites",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2023",
    points: [
      "creation of APIs in SQL and NoSql databases",
      "Using Spring in Java, Django in Python, Node.js, and Next.js with Javascript",
      "Deploy with services like Netlify, Kubernetes, Virtual Machines on Google Cloud Platform, AWS and Azure",
      "worked with databases like Mysql, Postgres and SQLite. also with non-relational databases like MongoDB and Cassandra",
    ],
  },
  {
    title: "cloud management",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Certificado en participaciones de programas de Google Cloud Plattaform.",
      "Dominio en el uso y despliegue de Bases de datos, Maquinas virtuales, instancias, Dockers y Kubernets",
      "Uso manual de maquinas virtual locales (sin necesidad de proveedor) para el despliegue de aplicanciones Backend",
    ],
  },
];


const projects = [
  {
    name: "Older Portfolio",
    description:
      "web-site using EJS Templates and Node.js, hosted on a github -pages own host.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Templats EJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dcwt59fom/image/upload/v1690294111/profafolio/capturaprimerportafolio_pjoq4h.png",
    source_code_link: "https://arnunez2002.github.io/portafolio-desarrollador/",
  },
  {
    name: "Campground",
    description:
      "A project with Node.js with full CRUD and MongoAtlas in the Backend, EJS templates in the Frontend where a geolocation map of the camps that were added to the database was created. It has aspects such as authentication and authorization of API requests",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "EJS Templates",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dcwt59fom/image/upload/v1690294430/profafolio/campgroundfoto_umhzvo.png",
    source_code_link: "https://github.com/arnunez2002/campnuns",
  },
  {
    name: "Employee Manager App",
    description:
      "Una aplicación web que simula un sistema de infomación de los empleados realizada con Spring boot, MySQL con bases de datos normalizadas y Angular en el FrontEnd",
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dcwt59fom/image/upload/v1690296165/profafolio/jlofg9y4znhkepd1ah5m.png",
    source_code_link: "https://github.com/arnunez2002/employee_app_springboot",
    source_code_linkfront: "https://github.com/arnunez2002/front_angular_employee/",
  },
];

export { services, technologies, experiences, projects };
