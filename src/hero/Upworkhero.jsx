import { useEffect, useRef } from 'react';
import './about.css';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';

const Upworkhero = ({ scrollToSection }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Add animation class to hero elements after a slight delay
    const elements = heroElement.querySelectorAll('.hero-animate');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 200);
    });
  }, []);



  return (
    <>
      <section className="hero-section" id="home" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name hero-animate">Joseph Teka</h1>
            <div className="animated-title hero-animate">Full-Stack Web Developer</div>
            <p className="hero-subtitle hero-animate">
              I build tools and websites that make life easier for developers, learners, and startups — using clean code, modern tech, and a creative mindset.
            </p>
            <div className="hero-cta hero-animate">
              <button
                className="cta-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="cta-primary"
                onClick={() => scrollToSection('certificates')}
              >
                view certificates
              </button>
            </div>
          </div>
                <img src="/josy.jpg"
                style={{objectFit:'contain', background:'#e3eef9', border:'none'}}
                 alt="Joseph Teka" className="about-img" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-wrapper">
                <img src="/image.jpg"
                style={{objectFit:'contain', background:'#475691', border:'none'}}
                 alt="Joseph Teka" className="about-imgs" /> 
                <div className="image-glow"></div>
              </div>
            </div>
            <div className="about-text">
              <p>
                I’m <strong>Joseph Teka</strong> — a full-stack web developer with a passion for building clean, responsive, and user-focused applications. I blend creative design with solid coding to turn ideas into impactful digital solutions.
              </p>
              <p>
                Currently studying Computer Science at Jimma University, I’ve also trained at Evangadi Tech and earned multiple certifications in web development. My skillset spans both frontend and backend, with a focus on performance, usability, and scalability.
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

export default Upworkhero;