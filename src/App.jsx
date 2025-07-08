import { useEffect, useRef, useState } from 'react';
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
import DownloadResume from './Downloadresume';
import { RiGithubLine, RiNextjsLine } from 'react-icons/ri';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import Blog from './Blog';
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
  const [showLearningProjects, setShowLearningProjects] = useState(false);

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
  const handleViewMoreProjects = () => {
    setShowLearningProjects(true);
    setTimeout(() => {
      scrollToSection('learning-projects');
    }, 100);
  };
  
 
  const mainProjects = [{
  title: "Jocode Dev Tool",
  description: "A powerful all-in-one platform that curates 500+ essential developer tools — from learning roadmaps to deployment resources. Built to help beginners avoid confusion and professionals save time, Jocode Dev Tool simplifies your dev journey with speed, clarity, and zero guesswork.",
  image: "https://scintillating-madeleine-ea406a.netlify.app/mylogo.jpg",
  demoUrl: "https://jocode-devtools.netlify.app/",
  githubUrl: "#"
}
,
    {
      title: "Netflix Clone",
      description: "A full-stack movie streaming app built with React and Firebase. Users can sign up, log in, explore dynamic sliders and banners, and scroll through endless movie trailers with download links — refreshed with new content on every visit.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/netflix.jpg",
      demoUrl: "https://net-dist.vercel.app/",
      githubUrl: "https://github.com/Josy216/netflix"
    }
,
    {
      title: "Amazon Clone",
      description: "A feature-rich ecommerce platform using React, Node.js, Express, and Stripe. Users can browse products, view details, add items to cart, sign up, and securely checkout via an integrated payment system — all backed by your custom backend.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/Screenshot.png",
      demoUrl: "https://distt-his-git-main-josy216s-projects.vercel.app/#/",
      githubUrl: "https://github.com/Josy216/AmazonBackend"
    },
    {
      title: "Evangadi Forum",
      description: "A supportive Q&A community built for students to ask questions, share answers, and grow together. Designed to empower peer-to-peer learning within the Evangadi Tech community using a full-stack architecture.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/firum.png",
      demoUrl: "https://evanforum.com/",
      githubUrl: "#"
    },
    {
      title: "Apple Clone",
      description: "A stylish Apple.com-inspired UI built with React, Node.js, Express, and MySQL. Features include embedded product videos via YouTube API and a polished frontend that mimics Apple's signature design aesthetics.",
      image: "https://josteka.netlify.app/ID-Photos/apple.jpg",
      demoUrl: "https://jotekasap-le.netlify.app/",
      githubUrl: "https://github.com/Josy216/Apple"
    },
    {
      title: "Unsplash.com Clone",
      description: "A fast, responsive image search engine using the Unsplash API. Offers one-click downloads of high-quality photos with zero watermarks or signups — just search, find, and save.",
      image: "https://josteka.netlify.app/ID-Photos/unsplash.jpg",
      demoUrl: "https://joseph-unsplash.netlify.app/",
      githubUrl: "https://github.com/Josy216/Joseph-unsplash-API"
    },{
  title: "Alex Tube",
  description: "A playful YouTube reaction channel interface built with React — mimicking Netflix’s stylish layout. Alex’s hilarious video reactions keep everyone laughing, with dynamic sliders and smooth UI for a fun, binge-worthy experience. No login required — just pure entertainment.",
  image: "https://i.ytimg.com/vi/kDefuhzUSZk/hqdefault.jpg",
  demoUrl: "https://alexfegegfegeg.netlify.app/",
  githubUrl: "https://github.com/Josy216/netflix"
}
  ];

  const learningProjects = [
    {
      title: "My Frontend Journey — 20+ Projects from Pure Grind",
      description: " This portfolio is the raw reflection of me burning out and building up — looping through HTML, CSS, and JavaScript with passion.   It’s my messy, honest, and evolving learning journey — and I’m proud of it.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTg1NjB8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwb3J0Zm9saW98ZW58MHx8fHwxNzQ5ODQzMDk5fDA&ixlib=rb-4.1.0&q=85",
      demoUrl: "https://josteka.netlify.app/",
      githubUrl: "https://github.com/josephteka/color-generator"
    },
    {
      title: "QR Code Generator",
      description: "A website that lets users set their private links, text and password in QR codes. Perfect for sharing secure information in a visual format.",
      image: "https://josteka.netlify.app/ID-Photos/qr-code.jpg",
      demoUrl: "https://jo-qr-code.netlify.app/",
      githubUrl: "https://github.com/Josy216/final-port"
    },
    {
      title: "TodoList App",
      description: "This app helps users organize their daily tasks by adding, updating, and deleting them. I created it using JavaScript to manage tasks efficiently. It’s useful for staying productive and keeping track of important things to do.",
      image: "https://josteka.netlify.app/ID-Photos/todo.jpg",
      demoUrl: "https://joseph-todo.netlify.app/",
      githubUrl: "https://github.com/josephteka/quote-generator"
    },
    {
      title: "Quote Generator",
      description: "An inspiring website that generates endless facts and motivational quotes to uplift users and provide daily inspiration.",
      image: "https://josteka.netlify.app/ID-Photos/quote.jpg",
      demoUrl: "https://dailquote.netlify.app/",
      githubUrl: "https://github.com/Josy216/Generator-Qoute"
    },
    {
      title: "Notion Clone ",
      description: "A simple and funny note-taking app that lets users edit and save notes on localStorage. Because sometimes you just need a place to dump your random thoughts!",
      image: "https://josteka.netlify.app/ID-Photos/notion.jpg",
      demoUrl: "https://my-notion-five-rust.vercel.app/",
      githubUrl: "https://github.com/Josy216/my-notion"
    },
    {
      title: "Color Generator",
      description: "A hexa and RGB color generator that gets people confused choosing from colors they don't know the name of. Perfect for designers who like surprises!",
      image: "https://josteka.netlify.app/ID-Photos/hexa-color.jpg",
      demoUrl: "https://josy-hex-code.netlify.app/",
      githubUrl: "https://github.com/Josy216/hexa-color-code"
    }
  ];

  const whyChooseMe = [
    {
      title: "Clean Code Expert",
      description: "I write maintainable, readable, and efficient code that follows industry best practices and standards."
    },
    {
      title: "AI-Powered Development",
      description: "Leveraging cutting-edge AI tools to accelerate development processes and deliver innovative solutions."
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
  { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/Joseph376533100?t=ofK-E2KAL642p8zZ7TBPNA&s=09" } 
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

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">My Work</h2>
            <div className='about-text'>
              <p style={{textAlign:'center'}}>Production-ready applications with real impact and modern deployment</p>
            </div>
            <div className="projects-grid">
              {mainProjects.map((project, App) => (
                <div key={App} className="project-card">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    {/* Project Links */}
                    <div className="project-icons">
                      <button
                        className="project-icon-btn"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        title="Live Demo"
                      >
                        🔗
                      </button>
                      <button
                        className="project-icon-btn"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        title="GitHub Repository"
                      >
                         <FaGithub />
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Projects Button */}
            {!showLearningProjects && (
              <div className="view-more-container">
                <button 
                  className="view-more-btn"
                  onClick={handleViewMoreProjects}
                >
                  View More Projects
                </button>
              </div>
            )}
          </div>
        </section>


        {/* Learning Projects Section */}
        {showLearningProjects && (
          <section id="learning-projects" className="learning-projects-section">
            <div className="container">
              <h2 className="section-title">Learning Journey Projects</h2>
              <p className="section-subtitle">Projects I built while learning - showing my deep work and growth as a developer</p>
              <div className="projects-grid">
                {learningProjects.map((project, App) => (
                  <div key={App} className="project-card">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Project Links */}
                      <div className="project-icons">
                        <button
                          className="project-icon-btn"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                          title="Live Demo"
                        >
                          🔗
                        </button>
                        <button
                          className="project-icon-btn"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          title="GitHub Repository"
                        >
                          <FaGithub />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
      placeholder="your.email@example.com"
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
    ✉️ Send Message
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
