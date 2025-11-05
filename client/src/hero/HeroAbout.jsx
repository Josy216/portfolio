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
              I create web applications that solve real problems - from
              developer tools that streamline workflows to educational platforms
              that make coding accessible. I focus on building solutions that
              are both functional and user-friendly.
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
                I'm Joseph - a developer who gets excited about turning complex
                problems into clean, working solutions. There's something really
                satisfying about watching an idea become a real application that
                people can actually use.
              </p>
              <p>
                My coding journey really took off after completing the Evangadi
                Tech bootcamp. These days, I'm building Jocode - a collection of
                tools and resources I wish I had when I was learning. I also
                share what I've learned through YouTube tutorials, because
                honestly, teaching others has been one of the best ways to
                deepen my own understanding.
              </p>
              <p>
                Right now, I'm focused on creating a comprehensive Developer
                Toolkit - a single hub where developers can find everything from
                design assets to learning roadmaps without jumping between
                dozens of tabs and bookmarks.
              </p>
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Year Building</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Skills Certified</span>
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
