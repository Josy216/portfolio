import { useEffect, useRef } from "react";
import "./about.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const HeroAbout = ({ scrollToSection }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Add animation class to hero elements after a slight delay
    const elements = heroElement.querySelectorAll(".hero-animate");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate-in");
      }, index * 200);
    });
  }, []);
const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/josy216" },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/joseph-teka-271661309",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:contact@josephteka.com",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    url: "https://t.me/jocode216",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    url: "https://youtube.com/@jocode216",
  },
];

  return (
    <>
      <section className="hero-section" id="home" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name hero-animate">Joseph Teka</h1>
            <div className="animated-title hero-animate">
              Full-Stack Web Developer
            </div>
            <p className="hero-subtitle hero-animate">
              I build tools and websites that make life easier for developers,
              learners, and startups — using clean code, modern tech, and a
              creative mindset.
            </p>
            <div className="hero-cta hero-animate">
              <button
                className="cta-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="cta-primary"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>
            <div className="social-links hero-animate">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="social-btn"
                  onClick={() => window.open(social.url, "_blank")}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>
          <img
            src="/brnd.jpg"
            style={{ objectFit: "contain", background: "#e3eef9" }}
            alt="Joseph Teka"
            className="about-img"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-wrapper">
                <img
                  src="/brnd.jpg"
                  style={{
                    objectFit: "contain",
                    background: "#475691",
                    border: "none",
                  }}
                  alt="Joseph Teka"
                  className="about-imgs"
                />
                <div className="image-glow"></div>
              </div>
            </div>
            <div className="about-text">
              <p>
                I’m Joseph Teka, a full-stack web developer passionate about
                creating clean, useful, and engaging web experiences.
              </p>
              <p>
                I finished an intensive full-stack bootcamp at Evangadi Tech and
                now run JoCode, a YouTube channel where I teach web development
                basics for free — to learn, share, and grow with others.
              </p>
              <p>
                I’m also building a Developer Toolkit, a single place where
                developers can find the best resources — from design assets to
                learning roadmaps — for every stack they work with.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
