import { useEffect, useRef } from 'react';
import './index.css';
import mypic from '/josy.jpg'

import { FaGithub, FaGithubAlt, FaLinkedin, FaTelegram, FaTelegramPlane, FaTiktok, FaTwitter } from "react-icons/fa";

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { FaMdb } from 'react-icons/fa';
import Jobot from './Jobot';
import { TbBrandTypescript } from 'react-icons/tb';
import DownloadResume from './resume/DownloadResume';
import { RiGithubLine, RiNextjsLine } from 'react-icons/ri';
import Navbar from './Navbar';
// import Skills from './skills/Skills'
// import Testimonials from './Testimonials';
import Blog from './blog/Blog';
import { FaYoutube } from 'react-icons/fa';
import Certificate from './Cerficate';
import Projects from './project/Projects';
const App = () => {

  const techStack = [
    { name: "HTML", icon:<FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Boostrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <BiLogoTailwindCss /> },
    { name: "JavaScript", icon: <AiOutlineJavaScript /> },
    { name: "React", icon: <FaReact />},
    { name: "Typescript", icon: <TbBrandTypescript />},
    { name: "Node js", icon: <FaNode /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Next js", icon: <RiNextjsLine />},
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDb", icon: <FaMdb /> },
    { name: "Git/GitHub", icon: <FaGit /> },
    { name: "Firebase", icon: <IoLogoFirebase /> }
  ];




  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Animate opacity
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whyChooseMe = [
    {
      title: "Clean Code",
      description: "I write maintainable, readable, and efficient code that follows industry best practices and standards."
    },
    {
      title: "Full-Stack Proficiency",
      description: "Seamlessly work across both frontend and backend technologies with equal expertise and confidence."
    },
    {
      title: "Problem Solving Skills",
      description: "Strong analytical thinking and creative problem-solving abilities to tackle complex technical challenges."
    },
    {
      title: "Tool Mastery",
      description: "Experienced with a wide range of development tools and technologies to speed up the development process."
    },
    {
      title: "Visual Communication",
      description: "Excellent at expressing ideas both visually through design and clearly through written communication."
    }
  ];

  const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/josy216" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/joseph-teka-271661309" },
  { name: "Telegram", icon: <FaTelegramPlane />, url: "https://t.me/jocode216" },
  { name: "TikTok", icon: <FaTiktok />, url: "https://tiktok.com/@jocode216" },
  { name: "Youtube", icon: <FaYoutube />, url: "https://youtube.com/@jocode216" } 
];

  return (
    <div className="portfolio-container">

      <Navbar />
      {/* Animated Stars Background */}
      <canvas
        ref={canvasRef}
        className="stars-canvas"
      />
      
      {/* Content */}
      <div className="content">
        {/* Header/Hero Section */}
        <section className="hero-section" id='home'>
  <div className="hero-content">
    {/* Profile Picture */}
    <div className="profile-picture" style={{ textAlign: "center" }}>
      <img
        src={mypic}
        alt="Joseph Teka"
        className="profile-img"
        style={{ border: "none" }}
      />
    </div>

    <h1 className="hero-name">Joseph Teka</h1>

<div className="animated-title">Full-Stack Web Developer</div>

<p className="hero-subtitle">
  I build tools and websites that make life easier for developers, learners, and startups — using clean code, modern tech, and a creative mindset.
</p>

<div className="hero-cta">
  <button 
    className="cta-secondary"
    onClick={() => window.open('https://t.me/jocode216', '_blank')}
  >
    <FaTelegram />
  </button>
  
  <button 
    className="cta-secondary"
    onClick={() => scrollToSection('projects')}
  >
    View My Work
  </button>
  
  <button 
    className="cta-secondary"
    onClick={() => window.open('https://github.com/josy216', '_blank')}
  >
    <RiGithubLine />
  </button>
</div>

  </div>
</section>

{/* About Me Section */}
<section id="about" className="about-section">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          Hey there — I’m <strong>Joseph Teka</strong>, a passionate and creative full-stack web developer with a strong eye for clean design, efficient code, and intuitive user experiences. I specialize in building modern, responsive web applications that solve real-world problems with precision and style.
        </p>
        <p>
          I’m currently pursuing a degree in Computer Science at Jimma University and graduated from the Full-Stack Development Program at Evangadi Tech. With a solid foundation in both frontend and backend technologies, I enjoy transforming ideas into fully functional digital products.
        </p>
        <p>
          Along the way, I’ve earned multiple certifications in web development and continuously stay up to date with the latest tools, trends, and best practices in the tech world. Whether it’s designing a polished UI or crafting powerful backend systems, I’m always eager to learn, build, and deliver.
        </p>
        <p>
          As a freelancer, I work with individuals and startups to create impactful web solutions — while constantly sharpening my skills and pushing the boundaries of what I can create.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Tech Stack Section */}
        <section id='tech-stack' className="tech-stack-section">
          <div className="container">
            <h2 className="section-title">My Tech Stack</h2>
            <div className="tech-stack-grid">
              {techStack.map((tech, App) => (
                <div key={App} className="tech-stack-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <h3 className="tech-name" style={{textAlign:"center"}}>{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        


        <DownloadResume />

        <Projects />

        

        {/* Why Choose Me Section */}
        <section id="why-choose-me" className="why-choose-section">
          <div className="container">
            <h2 className="section-title">Why Choose Me</h2>
            <div className="why-choose-grid">
              {whyChooseMe.map((item, App) => (
                <div key={App} className="why-choose-card">
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <Jobot />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Certificate />

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Let's Build Something Amazing</h2>
            <div className="about-text">
              <p style={{textAlign:"center"}}>Ready to turn your idea into a production-ready application?</p>
            </div>
            <div className="contact-card">
             <form
  action="https://getform.io/f/bvryzqzb"
  method="POST"
  className="contact-form"
>
  
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      placeholder="Your full name"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      placeholder="your email here"
      className="form-input"
    />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      required
      rows={6}
      placeholder="Tell me about your project..."
      className="form-textarea"
    />
  </div>

  {/* Honeypot Field */}
  <input type="hidden" name="_gotcha" style={{ display: 'none' }} />


  <button type="submit" className="submit-btn">
    Send Message
  </button>
</form>

            </div>
          </div>
        </section>

        {/* Footer with Social Links */}
        <footer className="footer">
          <div className="container">
            {/* Social Media Links */}
            <div className="social-links">
              {socialLinks.map((social, App) => (
                <button
                  key={App}
                  className="social-btn"
                  onClick={() => window.open(social.url, '_blank')}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </button>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="copyright">
              <p>© 2025 Joseph Teka. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
