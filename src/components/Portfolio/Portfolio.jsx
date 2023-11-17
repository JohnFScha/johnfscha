import React from "react";
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'
import img7 from '../../assets/portfolio7.png'
import img8 from '../../assets/age-calculator-app.png'
import img9 from '../../assets/bookstore-app-v2.png'
import img10 from '../../assets/flexy-login.png'

import "./Portfolio.scss";

const data = [
  {
    id: 1,
    thumbnail: img1,
    title: "Movie search app",
    github: "https://github.com/JohnFScha/movieSearchApp",
    demo: "https://movie-search-app-smoky-nine.vercel.app/"
  },
  {
    id: 2,
    thumbnail: img2,
    title: "One Click English",
    github: "https://github.com/JohnFScha/OneClickEnglish",
    demo: "https://johnfscha.github.io/OneClickEnglish/"
  },
  {
    id: 3,
    thumbnail: img3,
    title: "Marvel character search ",
    github: "https://github.com/JohnFScha/MarvelCharacterSearchApp",
    demo: "https://marvel-character-search-nztfw8hab-sonicfran99.vercel.app/"
  },
  {
    id: 4,
    thumbnail: img4,
    title: "Mock used PS store",
    github: "https://github.com/JohnFScha/MockPsUsedStore",
    demo: "https://proyecto-final-react-schallibaum.vercel.app/"
  },
  {
    id: 5,
    thumbnail: img5,
    title: "Newsletter sign-up",
    github: "https://github.com/JohnFScha/Sign-up",
    demo: "https://sign-up-swart.vercel.app/"
  },
  {
    id: 6,
    thumbnail: img6,
    title: "Language Time Landing",
    github: "https://github.com/JohnFScha/EnglishTimeLandingPage",
    demo: "https://johnfscha.github.io/EnglishTimeLandingPage/index.html"
  },
  {
    id: 7,
    thumbnail: img7,
    title: "Who's that pokemon?",
    github: "https://github.com/JohnFScha/adivinar-pokemon-v2",
    demo: "https://adivinar-pokemon-v2.vercel.app/"
  },
  {
    id: 8,
    thumbnail: img8,
    title: "Age calculator",
    github: "https://github.com/JohnFScha/age-calculator-app",
    demo: "https://adivinar-pokemon-v2.vercel.app/"
  },
  {
    id: 9,
    thumbnail: img9,
    title: "Bookstore CRUD app",
    github: "https://github.com/JohnFScha/bookstore-app-v2",
    demo: "https://bookstore-app-v2.vercel.app/"
  },
  {
    id: 10,
    thumbnail: img10,
    title: "Flexy login",
    github: "https://github.com/JohnFScha/prueba-tecnica-flexy",
    demo: "https://prueba-tecnica-flexy-five.vercel.app/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, thumbnail, title, github, demo}) => 
          <article className="portfolio__item" key={id}>
            <div className="portfolio__image">
              <img src={thumbnail} alt={title}/>
            </div>           
            <h3>{title}</h3>
            <div className="portfolio__cta">
              <a               
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
