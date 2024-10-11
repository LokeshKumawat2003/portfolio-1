import React, { useState } from "react";
import "../style/home.css";
import "../style/nav.css";
import "../style/footer.css";
const Home = () => {
  const [shows, setIshows] = useState(false);
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };

  const Project = () => {
    const contactForm = document.querySelector(".project");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };

  const About = () => {
    const contactForm = document.querySelector(".type-of-works");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };

  const Service = () => {
    const contactForm = document.querySelector(".what-i-know");
    contactForm.scrollIntoView({ behavior: "smooth" });
  };
  const show = () => {
    setIshows((prev)=> !prev)
   
  };
  return (
    <div>
      <nav>
        <div className="nav-box">
          <div className="logo">
            <h1>Portfolio</h1>
          </div>
          <a href="#" onClick={show} className="menu">
            {/* Menu */}
         X
          </a>
          <div className="links"  style={{ left: shows ? "0" : "-100%" }}>
            <a href="" onClick={Home}>
              Home
            </a>
            <a href="#Service" onClick={Service}>
              Service
            </a>
            <a href="#About" onClick={About}>
              About
            </a>
            <a href="#Project" onClick={Project}>
              Project
            </a>
          </div>
          <div className="contect-btn">
            <button onClick={scrollToContact}>Contact</button>
          </div>
        </div>
      </nav>
      <div className="hero-box">
        <div className="name-box">
          <h1 className="hii">Hello! I Am</h1>
          <h1 className="name">Lokesh Kumawat</h1>
          <p className="summery">
            I'm A Web Developer having creating website with fully responsive
            Also with backend part too.
          </p>
          <div className="hire-btn">
            <button>Hire</button>
          </div>
        </div>
        <div className="photo-box">
          <img src="profile.png" alt="" />
        </div>
      </div>
      <div className="type-of-works">
        <p>My Expertise</p>
        <div className="expirts">
          <p>
            Provide Wide Range of <br />
            Digital Services
          </p>
        </div>
      </div>
      <div className="skill-type">
        <div className="skill1">
          <img
            src="https://pawantech12.github.io/portfolio-website/images/service-icon2.png"
            alt=""
          />
          <h2>Web Development</h2>
          <p>
            Dolor repellendus temporibus autem quibusdam officiis debitis rerum
            neces aibus minima veniam.
          </p>
          <div className="btn-more">
            <button>Red More</button>
          </div>
        </div>
        <div className="skill1">
          <img
            src="https://pawantech12.github.io/portfolio-website/images/service-icon3.png"
            alt=""
          />
          <h2>Debugging</h2>
          <p>
            Dolor repellendus temporibus autem quibusdam officiis debitis rerum
            neces aibus minima veniam.
          </p>
          <div className="btn-more">
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="what-i-know">
        <div className="box-lang">
          <div className="baxs">
            <div className="scricle">
              <div className="avg-of-lang">90%</div>
            </div>
            <p className="lag-name">HTML & CSS</p>
          </div>

          <div className="baxs">
            <div className="scricle">
              <div className="avg-of-lang js">75%</div>
            </div>
            <p className="lag-name js-name">JavaScript</p>
          </div>

          <div className="baxs">
            <div className="scricle">
              <div className="avg-of-lang react">70%</div>
            </div>
            <p className="lag-name react-name">Ract Js</p>
          </div>

          <div className="baxs">
            <div className="scricle">
              <div className="avg-of-lang node">30%</div>
            </div>
            <p className="lag-name node-name">Node.js</p>
          </div>
        </div>
        <div className="query-box">
          <div className="qurey-lang">
            <h3> My Skills</h3>
            <h1>Beautiful & Unique Digital Experiences</h1>
            <p>
              Nostrum exercitationem ullam corporis suscipit laborioa nisi ut
              aliquid exrea commodi consequatur magni dolores aos qui ratione
              voluptatem nesciunt. Quia voluptas sit aspernatur aut odit aut
              fugit, sed ruiano consequntar magni dolores.
            </p>
            <div className="resume">
              {" "}
              <button>Resume file</button>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <h1>Creative Work</h1>
        <h2>My Project</h2>
        <div className="project-box">
          <div className="project-box1">
            <div className="img-project">
              <img
                src="https://pawantech12.github.io/portfolio-website/images/currency-converter.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <p>Converter App</p>
            </div>
            <div className="what-use">
              <span>HTML&CSS </span> <span>JavaScript </span>{" "}
              <span>Website</span>
            </div>
          </div>

          <div className="project-box1">
            <div className="img-project">
              <img
                src="https://pawantech12.github.io/portfolio-website/images/currency-converter.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <p>Converter App</p>
            </div>
            <div className="what-use">
              <span>HTML&CSS </span> <span>JavaScript </span>{" "}
              <span>Website</span>
            </div>
          </div>

          <div className="project-box1">
            <div className="img-project">
              <img
                src="https://pawantech12.github.io/portfolio-website/images/currency-converter.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <p>Converter App</p>
            </div>
            <div className="what-use">
              <span>HTML&CSS </span> <span>JavaScript </span>{" "}
              <span>Website</span>
            </div>
          </div>

          <div className="project-box1">
            <div className="img-project">
              <img
                src="https://pawantech12.github.io/portfolio-website/images/currency-converter.png"
                alt=""
              />
            </div>
            <div className="project-name">
              <p>Converter App</p>
            </div>
            <div className="what-use">
              <span>HTML&CSS </span> <span>JavaScript </span>{" "}
              <span>Website</span>
            </div>
          </div>
        </div>
      </div>
      <div className="form-box" id="contact-form">
        <div className="form-header">
          <h2> Get in Touch</h2>
          <h1> Any Questions? Feel Free to Contact</h1>
        </div>
        <form action="" method="post">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="number" placeholder="Your Number" />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <footer>
        <div class="footer-links">
          <a href="" onClick={Home}>
            Home
          </a>
          <a href="#Service" onClick={Service}>
            Service
          </a>
          <a href="#About" onClick={About}>
            About
          </a>
          <a href="#Project" onClick={Project}>
            Project
          </a>
          <a href="#Contact">Contact</a>
        </div>
      </footer>{" "}
      *
    </div>
  );
};

export default Home;
