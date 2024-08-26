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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import node from '../assets/tech/node.svg'
import react from '../assets/tech/react.svg'
import swift from '../assets/tech/swift.svg'

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiências",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: react,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: swift,
  },
  {
    title: "Desenvolvedor Backend",
    icon: node,
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
    title: "Desenvolvedor Front-End",
    company_name: "Dia de Obra",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Maio, 2023 - Outubro 2023",
    points: [
      "Desenvolvimento de interfaces de um SaaS de monitoramento de obras de forma Remota.",
      "Colaboração com um time de desenvolvedores seguindo padrões de versionamento de código com git.",
      "Implementação de novas funcionalidades, solução de erros e refatoração de códigos.",
      "Participação de Code Revews e feedback para código de terceiros.",
    ],
  },
  {
    title: "Desenvolvedor Full-Stack",
    company_name: "Dia de Obra",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Outubro 2023 - Maio 2024",
    points: [
      "Implementação de features Full Stack",
      "Utilização de Docker, PostgreSql e Primsa para a manipulações de features no backend",
      "Criação de relatórios em PDF utilizando Node.Js e Nest.Js e modificações em getways de pagamento como Stripe",
      "Code revew, reuniões para alinhamento de metas",
    ],
  },
  {
    title: "Desenvolvedor Front-End",
    company_name: "Gelo Extra",
    icon: shopify,
    iconBg: "#383E56",
    date: "Maio 2024 - Presente",
    points: [
      "Criação de Relatórios em PDF e Graficos dinâmicos",
      "Boas pratias de SOLID e arquitetura limpa para uma melhor manutenção do código",
      "Consumação de API Rest utilizando UseQuery para a exibições de dados vindo do servidor",
      "User interface e experience minimalista e intuitiva",
    ],
  },
  {
    title: "Desenvolvedor Front-End",
    company_name: "Sua empresa",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fale comigo",
    points: [
    ],
  },
];

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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
