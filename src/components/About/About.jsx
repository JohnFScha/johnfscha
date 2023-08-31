import React from "react";
import "./About.scss";
import { FaBrain, FaGraduationCap } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBrain className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of Experience</small>
            </article>
            <article className="about__card">
              <RiUserStarFill className="about__icon" />
              <h5>Freelancer</h5>
              <small>Personal clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+5 projects</small>
            </article>
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Formation</h5>
              <small>Constantly learning</small>
            </article>
          </div>
        </div>
      </div>
      <p className="about__content-description">
        I'm a Frontend Developer from Argentina. I can help you build small to
        medium scale projects, ranging but not limited to: landing pages,
        e-commerce websites and web applications of varied uses.I'm currently
        learning backend technologies to bring you a comprehensive service.
        Contact me to start building your online presence!
      </p>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </section>
  );
};

export default About;
