import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Resumo.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sou desenvolvedor de Software apaixonado por interfaces gráficas que
        facilitam a experiência do usuário, ao longo de anos trabalhei com
        diversas tecnologias, como:{" "}
        <span className="text-[#915EFF]">Javascript</span>,{" "}
        <span className="text-[#915EFF]">Typescript</span>,{" "}
        <span className="text-[#915EFF]">React.Js</span>,{" "}
        <span className="text-[#915EFF]">NextJs</span> ,{" "}
        <span className="text-[#915EFF]">TailwindCss</span>,{" "}
        <span className="text-[#915EFF]">Three.Js</span>,{" "}
        <span className="text-[#915EFF]">Axios</span>,{" "}
        <span className="text-[#915EFF]">React-Query</span>. Sempre estou em
        constante aprendizado e colaboro eficientemente com clientes para criar
        soluções eficientes e escaláveis para resolver problemas do mundo real.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-40">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
