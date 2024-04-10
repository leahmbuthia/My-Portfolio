import React from "react";
import "./Intro.scss";
import bg from "../../assets/portfolio.jpeg";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div>
      <section id="Intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Leah Nyambura,</span>
            <br />
          </span>
          <p className="introPara"> Full Stack Developer <br/>
            I am a skilled FullStack web Developer proficient in React js and
            Node Js
          </p>
          <div className="btnAll">
          <Link>
            <button className="btn">Hire Me</button>
          </Link>
          <Link>
            <button className="btn">Download Resume</button>
          </Link>
          </div>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
