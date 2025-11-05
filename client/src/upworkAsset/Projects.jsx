import { useState } from 'react';
import './Projects.css';
import { FaTimes, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLearningProjects, setShowLearningProjects] = useState(false);

  const mainProjects = [
    {
      id: 1,
      title: "Jocode Dev Tool",
      description: "A powerful all-in-one platform that curates 500+ essential developer tools — from learning roadmaps to deployment resources. Built to help beginners avoid confusion and professionals save time, Jocode Dev Tool simplifies your dev journey with speed, clarity, and zero guesswork.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/mylogo.jpg",
     
      skills: ["React", "Typescript", "Superbase", "APIs"]
    },
    {
  id: 2,
  title: "Abe Garage",
  description: "A full-featured garage management system that streamlines customer intake, service tracking, and team workflows. Built with real-world business needs in mind, it enhances efficiency and boosts customer satisfaction.",
  image: "/abe.png",
  skills: ["React", "Node.js", "Express", "MySQL","Typescript", "Bootstrap"]
},
    {
      id: 3,
      title: "Amazon Clone",
      description: "A feature-rich ecommerce platform using React, Node.js, Express, and Stripe. Users can browse products, view details, add items to cart, sign up, and securely checkout via an integrated payment system — all backed by your custom backend.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/Screenshot.png",
     skills: ["React", "Node.js", "Express","CSS", "Stripe", "Firebase"]
    },
    {
      id: 4,
      title: "Evangadi Forum",
      description: "A supportive Q&A community built for students to ask questions, share answers, and grow together. Designed to empower peer-to-peer learning within the Evangadi Tech community using a full-stack architecture. Built with React, Node.js, Express, and MySQL.",
      image: "./forum.jpg",
      skills: ["React","CSS", "Node.js", "Express", "MySQL"]
    },
    {
      id: 5,
      title: "Netflix Clone",
      description: "A full-stack movie streaming app built with React and Firebase. Users can sign up, log in, explore dynamic sliders and banners, and scroll through endless movie trailers with download links — refreshed with new content on every visit.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/netflix.jpg",
      skills: ["React", "Firebase", "TMDB API", "CSS"]
    },
    {
      id: 5,
      title: "Apple Clone",
      description: "A stylish Apple.com-inspired UI built with React, Node.js, Express, and MySQL. Features include embedded product videos via YouTube API and a polished frontend that mimics Apple's signature design aesthetics.",
      image: "https://josteka.netlify.app/ID-Photos/apple.jpg",
       skills: ["React", "Node.js", "Express", "MySQL","CSS","Boostrap", "YouTube API"]
    },
    {
      id: 6,
      title: "Unsplash.com Clone",
      description: "A fast, responsive image search engine using the Unsplash API. Offers one-click downloads of high-quality photos with zero watermarks or signups — just search, find, and save.",
      image: "https://josteka.netlify.app/ID-Photos/unsplash.jpg",
       skills: ["HTML", "CSS", "JavaScript", "Unsplash API"]
    },
    {
      id: 7,
      title: "Alex Tube",
      description: "A playful YouTube reaction channel interface built with React — mimicking Netflix’s stylish layout. Alex’s hilarious video reactions keep everyone laughing, with dynamic sliders and smooth UI for a fun, binge-worthy experience. No login required — just pure entertainment.",
      image: "https://i.ytimg.com/vi/kDefuhzUSZk/hqdefault.jpg",
       skills: ["React", "TMDB API", "CSS"]
    }
  ];

  const learningProjects = [
    {
      id: 8,
      title: "My Frontend Journey — 20+ Projects from Pure Grind",
      description: "This portfolio is the raw reflection of me burning out and building up — looping through HTML, CSS, and JavaScript with passion. It’s my messy, honest, and evolving learning journey — and I’m proud of it.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTg1NjB8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwb3J0Zm9saW98ZW58MHx8fHwxNzQ5ODQzMDk5fDA&ixlib=rb-4.1.0&q=85",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 9,
      title: "QR Code Generator",
      description: "A website that lets users set their private links, text and password in QR codes. Perfect for sharing secure information in a visual format.",
      image: "https://josteka.netlify.app/ID-Photos/qr-code.jpg",
       skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 10,
      title: "TodoList App",
      description: "This app helps users organize their daily tasks by adding, updating, and deleting them. I created it using JavaScript to manage tasks efficiently. It’s useful for staying productive and keeping track of important things to do.",
      image: "https://josteka.netlify.app/ID-Photos/todo.jpg",
       skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 11,
      title: "Quote Generator",
      description: "An inspiring website that generates endless facts and motivational quotes to uplift users and provide daily inspiration.",
      image: "https://josteka.netlify.app/ID-Photos/quote.jpg",
       skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 12,
      title: "Notion Clone",
      description: "A simple and funny note-taking app that lets users edit and save notes on localStorage. Because sometimes you just need a place to dump your random thoughts!",
      image: "https://josteka.netlify.app/ID-Photos/notion.jpg",
     skills: ["HTML", "CSS", "JavaScript", "localStorage"]
    },
    {
      id: 13,
      title: "Color Generator",
      description: "A hexa and RGB color generator that gets people confused choosing from colors they don't know the name of. Perfect for designers who like surprises!",
      image: "https://josteka.netlify.app/ID-Photos/hexa-color.jpg",
       skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMoreProjects = () => {
    setShowLearningProjects(true);
    setTimeout(() => {
      scrollToSection('learning-projects');
    }, 100);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="about-text">
            <p style={{ textAlign: 'center' }}>Production-ready applications with real impact and modern deployment</p>
          </div>

          <div className="projects-grid">
            {mainProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="project-description">
                  <p>{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

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

      {showLearningProjects && (
        <section id="learning-projects" className="learning-projects-section">
          <div className="container">
            <h2 className="section-title">Learning Journey Projects</h2>
            <p className="section-subtitle">Projects I built while learning - showing my deep work and growth as a developer</p>
            <div className="projects-grid">
              {learningProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => openModal(project)}
                >
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="project-description">
                    <p>{project.description}</p>
                    <div className="project-skills">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-project-image"
              />

              <div className="modal-project-details">
                <h2 className="modal-project-title">{selectedProject.title}</h2>
                <div className="modal-project-description">
                  <h3>Description</h3>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="modal-project-skills">
                  <h3>Skills Used</h3>
                  <div className="modal-skills-grid">
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;