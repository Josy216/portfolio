import { useEffect, useRef, useState } from 'react';
import './Index.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const Index = () => {

  const techStack = [
    { name: "HTML", icon:<FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap />},
    { name: "Tailwind", icon: <BiLogoTailwindCss /> },
    { name: "JavaScript", icon: <BiLogoJavascript /> },
    { name: "React", icon: <FaReact />},
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git/GitHub", icon: <FaGit /> },
    { name: "Firebase", icon: <IoLogoFirebase /> },
    { name: "Netlify", icon: <SiNetlify />  }
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
  
 
  const mainProjects = [
    {
      title: "Netflix Clone",
      description: "A full-stack movie streaming app built with React and Firebase. Users can sign up, log in, explore dynamic sliders and banners, and scroll through endless movie trailers with download links — refreshed with new content on every visit.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/netflix.jpg"
    },
    {
      title: "Amazon Clone",
      description: "A feature-rich ecommerce platform using React, Node.js, Express, and Stripe. Users can browse products, view details, add items to cart, sign up, and securely checkout via an integrated payment system — all backed by your custom backend.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/Screenshot.png"
    },
    {
      title: "Evangadi Forum",
      description: "A supportive Q&A community built for students to ask questions, share answers, and grow together. Designed to empower peer-to-peer learning within the Evangadi Tech community using a full-stack architecture.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/firum.png"
    },
    {
      title: "Apple Clone",
      description: "A stylish Apple.com-inspired UI built with React, Node.js, Express, and MySQL. Features include embedded product videos via YouTube API and a polished frontend that mimics Apple's signature design aesthetics.",
      image: "https://josteka.netlify.app/ID-Photos/apple.jpg"
    },
    {
      title: "Jocode Dev Tool",
      description: "A platform offering free premium dev tools and learning resources for aspiring developers. Designed to support the coding journey with handpicked content and productivity features.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/mylogo.jpg"
    },
    {
      title: "MovieLand",
      description: "A simple yet powerful React app where users can search movies, view detailed info like cast, storyline, and posters — all fetched via an external movie API.",
      image: "https://images.unsplash.com/photo-1677344297888-81f04aa12a60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTg1NjB8MHwxfHNlYXJjaHwyfHxtb3ZpZXN8ZW58MHx8fHwxNzQ5ODQxNzMyfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Unsplash.com Clone",
      description: "A fast, responsive image search engine using the Unsplash API. Offers one-click downloads of high-quality photos with zero watermarks or signups — just search, find, and save.",
      image: "https://josteka.netlify.app/ID-Photos/unsplash.jpg"
    }
  ];

  const learningProjects = [
    {
      title: "My Frontend Journey — 20+ Projects from Pure Grind",
      description: " This portfolio is the raw reflection of me burning out and building up — looping through HTML, CSS, and JavaScript with passion.   It’s my messy, honest, and evolving learning journey — and I’m proud of it.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTg1NjB8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwb3J0Zm9saW98ZW58MHx8fHwxNzQ5ODQzMDk5fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "QR Code Generator",
      description: "A website that lets users set their private links, text and password in QR codes. Perfect for sharing secure information in a visual format.",
      image: "https://josteka.netlify.app/ID-Photos/qr-code.jpg"
    },
    {
      title: "TodoList App",
      description: "This app helps users organize their daily tasks by adding, updating, and deleting them. I created it using JavaScript to manage tasks efficiently. It’s useful for staying productive and keeping track of important things to do.",
      image: "https://josteka.netlify.app/ID-Photos/todo.jpg"
    },
    {
      title: "Quote Generator",
      description: "An inspiring website that generates endless facts and motivational quotes to uplift users and provide daily inspiration.",
      image: "https://josteka.netlify.app/ID-Photos/quote.jpg"
    },
    {
      title: "Notion Clone ",
      description: "A simple and funny note-taking app that lets users edit and save notes on localStorage. Because sometimes you just need a place to dump your random thoughts!",
      image: "https://josteka.netlify.app/ID-Photos/notion.jpg"
    },
    {
      title: "Color Generator",
      description: "A hexa and RGB color generator that gets people confused choosing from colors they don't know the name of. Perfect for designers who like surprises!",
      image: "https://josteka.netlify.app/ID-Photos/hexa-color.jpg"
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


  return (
    <div className="portfolio-container">
      {/* Animated Stars Background */}
      <canvas
        ref={canvasRef}
        className="stars-canvas"
      />
      
      {/* Content */}
      <div className="content">
        {/* Header/Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            {/* Profile Picture */}
            <div className="profile-picture" style={{textAlign: "center"}}>
              <img 
                src="https://josteka.netlify.app/ID-Photos/20241012172330711.jpg" 
                alt="Joseph Teka"
                className="profile-img" style={{border:"none"}}
              />
            </div>
            
            <h1 className="hero-name">Joseph Teka</h1>
            <div className="animated-title">Full-Stack Web Developer</div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hi, I'm Joseph Teka — a passionate full-stack web developer with experience building modern web apps using clean code and solid UI/UX principles. I'm a Computer Science student at Jimma University and graduated from Evangadi Tech with full-stack development skills.
                </p>
                <p>
                  I hold various certificates in web development and am constantly expanding my knowledge in the latest technologies. Currently working as a freelancer, building innovative solutions and growing my expertise in the field.
                </p>
                <p>This portfolio is Basically designed for upwork, whic means it contains no link to project or me. so you can see all my projects live demo and github Repository Once we make our deal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-stack-section">
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

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">My Work</h2>
            <div className="projects-grid">
              {mainProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
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
                {learningProjects.map((project, index) => (
                  <div key={index} className="project-card">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
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
      </div>
    </div>
  );
};

export default Index;
