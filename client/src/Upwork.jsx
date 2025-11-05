import { useEffect, useRef } from 'react';
import './index.css';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNode, FaGit } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiExpress, SiMysql } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { FaMdb } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiNextjsLine } from 'react-icons/ri';
import Navbar from './upworkAsset/Navbar';
import Testimonials from './Testimonials';
import Blog from './blog/Blog';
import Certificate from './Cerficate';
import Projects from './upworkAsset/Projects';
import HeroAbout from './hero/HeroAbout';
import Upworkhero from './hero/Upworkhero';

const Upwork = () => {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <BiLogoTailwindCss /> },
    { name: "JavaScript", icon: <AiOutlineJavaScript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Typescript", icon: <TbBrandTypescript /> },
    { name: "Node js", icon: <FaNode /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Next js", icon: <RiNextjsLine /> },
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

  return (
    <div className="portfolio-container">
      <Navbar />
      <canvas ref={canvasRef} className="stars-canvas" />
      
      <div className="content">
        <Upworkhero scrollToSection={scrollToSection} />

        <section id="tech-stack" className="tech-stack-section">
          <div className="container">
            <h2 className="section-title">My Tech Stack</h2>
            <div className="tech-stack-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-stack-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <h3 className="tech-name" style={{textAlign:"center"}}>{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Projects />

        <section id="why-choose-me" className="why-choose-me-section">
          <div className="container">
            <h2 className="section-title">Why Choose Me</h2>
            <div className="why-choose-grid">
              {whyChooseMe.map((item, index) => (
                <div key={index} className="why-choose-card">
                  <div className="card-icon">{item.icon}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <Blog /> */}
        <Certificate />
      </div>
    </div>
  );
};

export default Upwork;