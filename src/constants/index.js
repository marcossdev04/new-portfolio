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
import ddo from '../assets/company/diadeobra.png'
import geloExtra from '../assets/company/geloextra.png'
import interrogação from '../assets/company/interrogação.png'

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
    icon: ddo,
    iconBg: "#E6DEDD",
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
    icon: ddo,
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
    icon: geloExtra,
    iconBg: "#E6DEDD",
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
    icon: interrogação,
    iconBg: "#FFFFFF",
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
    name: "CRM Empresarial",
    description:
      "CRM feito para uma empresa no ramo de gelos feito em React 18, Next 14 e TailwindCss. Integrações com API Rest, Google-maps-api, geração de relatórios em PDF e gráficos dinâmicos são algumas de suas inúmeras funcionaliades, além de zelar boas praticas de SOLID e Clean Arquiteture",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "React-Query",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
        name: "Zod",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Vpratas",
    description:
      "Ecomerce feito para a venda de pratas 925 no varejo, utilizando tecnologias como ReactJs, NextJs, TailwindCss e bibliotecas de estilização como Shadcn-ui, funcionalidades como carrinho de compras e cálculo de do valor da entrega com base no cep foram implementadas. ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Api Context",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn-Ui",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/marcossdev04/VPRATAS",
  },
  {
    name: "PrescriApp",
    description:
      "Aplicação feita para nutricionistas fazerem prescrições de medicamentos manipulados de forma personalizada, gerando PDF's impressos",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "React-Pdf",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/marcossdev04/PrescriApp-web",
  },
];

export { services, technologies, experiences, testimonials, projects };
