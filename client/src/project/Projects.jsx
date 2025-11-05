import { useState } from "react";
import "./Projects.css";
import { FaTimes, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLearningProjects, setShowLearningProjects] = useState(false);
  const mainProjects = [
    {
      id: 1,
      title: "Jocode",
      description:
        "A platform providing all essential developer resources — from photos, coding tools, and learning materials to certification and deployment support. It also serves as a learning community where anyone can teach and anyone can learn, empowering developers at every stage.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/mylogo.jpg",
      demoUrl: "https://jocode.josephteka.com/",
      githubUrl: "#",
      skills: ["React", "TypeScript", "Node", "MySQL", "Express"],
    },
    {
      id: 2,
      title: "JocodeHotel",
      description:
        "A full-stack hotel management system built with MySQL, Express, React, Node, and CSS. This platform is designed as a teaching tool in my MERN Stack Mentorship Full Guide, showing how a complete web application works. Users can browse menus, register, and place orders, while admins manage orders, control users, and add, edit, or delete menu items.",
      image: "/hotela.jpg",
      demoUrl: "https://hotel.josephteka.com",
      githubUrl: "https://github.com/Josy216/myhotelclient",
      skills: ["React", "Node", "Express", "MySQL", "CSS"],
    },
    {
      id: 4,
      title: "Jocode Store",
      description:
        "A full-stack ecommerce application developed during a CodeAlpha internship. It supports user authentication, password resets, product listings from a mock API, and admin dashboards for managing products. The store blends online learning resources, digital tools, and tech gear into a single shopping experience for developers.",
      image: "/store.png",
      demoUrl: "https://ecomerce.josephteka.com/",

      githubUrl: "https://github.com/Josy216/codeAlpha-Ecomerce",
      skills: ["React", "Node.js", "Express", "MySQL", "DummyJSON API", "CSS"],
    },
    {
      id: 2,
      title: "Evangadi Forum",
      description:
        "A Q&A forum built for the Evangadi Tech community where users can post questions, respond to discussions, and learn collaboratively. The system supports authentication, discussion threads, and user engagement with a scalable backend.",
      image: "./forum.jpg",
      demoUrl: "https://evanforum.com/",
      githubUrl: "https://github.com/Josy216/Evangadi_forum",
      skills: ["React", "CSS", "Node.js", "Express", "MySQL"],
    },
    {
      id: 3,
      title: "Amazon Clone",
      description:
        "A complete ecommerce solution allowing users to register, browse products, manage cart items, and complete secure checkouts. The platform also includes admin capabilities and a functional backend to support real-time transactions and product management.",
      image:
        "https://scintillating-madeleine-ea406a.netlify.app/Screenshot.png",
      demoUrl: "https://distt-his-git-main-josy216s-projects.vercel.app/#/",
      githubUrl: "https://github.com/Josy216/AmazonBackend",
      skills: ["React", "Node.js", "Express", "CSS", "Stripe", "Firebase"],
    },
    {
      id: 6,
      title: "Netflix Clone",
      description:
        "A streaming platform interface that mimics Netflix with featured banners, movie sliders, and autoplay previews. Users can register, log in, and enjoy a smooth and engaging UI experience for discovering and viewing media content.",
      image: "https://scintillating-madeleine-ea406a.netlify.app/netflix.jpg",
      demoUrl: "https://netflx.josephteka.com",
      githubUrl: "https://github.com/Josy216/netflix",
      skills: ["React", "Firebase", "TMDB API", "CSS"],
    },
    {
      id: 7,
      title: "Unsplash.com Clone",
      description:
        "A fast-loading image search app that pulls real-time image results from the Unsplash API. Users can instantly search and download high-quality images without needing to register or log in, making it ideal for content creators.",
      image: "https://josteka.netlify.app/ID-Photos/unsplash.jpg",
      demoUrl: "https://joseph-unsplash.netlify.app/",
      githubUrl: "https://github.com/Josy216/Joseph-unsplash-API",
      skills: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    },
    {
      id: 9,
      title: "Alex Tube",
      description:
        "A fun and interactive video showcase platform inspired by Netflix, focused on displaying entertaining YouTube reaction content. It features smooth sliders, a clean layout, and no login barriers — just hit play and enjoy.",
      image: "https://i.ytimg.com/vi/kDefuhzUSZk/hqdefault.jpg",
      demoUrl: "https://alexfegegfegeg.netlify.app/",
      githubUrl: "https://github.com/Josy216/netflix",
      skills: ["React", "TMDB API", "CSS"],
    },
  ];

  const learningProjects = [
    {
      id: 8,
      title: "My Frontend Journey — 20+ Projects from Pure Grind",
      description:
        "This portfolio is the raw reflection of me burning out and building up — looping through HTML, CSS, and JavaScript with passion. It’s my messy, honest, and evolving learning journey — and I’m proud of it.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTg1NjB8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBwb3J0Zm9saW98ZW58MHx8fHwxNzQ5ODQzMDk5fDA&ixlib=rb-4.1.0&q=85",
      demoUrl: "https://josteka.netlify.app/",
      githubUrl: "https://github.com/josephteka/color-generator",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 8,
      title: "Abe Garage",
      description:
        "A garage management system designed to handle customer registration, vehicle service tracking, and task assignments. Built for business use, it streamlines daily workflows and ensures service transparency for both customers and staff.",
      image: "/abe.png",
      demoUrl: "#",
      githubUrl: "https://github.com/Josy216/Abe_greage",
      skills: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Typescript",
        "Bootstrap",
      ],
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewMoreProjects = () => {
    setShowLearningProjects(true);
    setTimeout(() => {
      scrollToSection("learning-projects");
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
            <p style={{ textAlign: "center" }}>
              Production-ready applications with real impact and modern
              deployment
            </p>
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
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button
                      className="project-link-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                      title="Live Demo"
                    >
                      🔗
                    </button>
                    <button
                      className="project-link-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </button>
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
            <p className="section-subtitle">
              Projects I built while learning - showing my deep work and growth
              as a developer
            </p>
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
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <button
                        className="project-link-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoUrl, "_blank");
                        }}
                        title="Live Demo"
                      >
                        🔗
                      </button>
                      <button
                        className="project-link-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
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
                      <span key={index} className="modal-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-project-links">
                  <h3>Links</h3>
                  <div className="modal-links-grid">
                    <button
                      className="modal-link-btn"
                      onClick={() =>
                        window.open(selectedProject.demoUrl, "_blank")
                      }
                    >
                      🔗 Live Demo
                    </button>
                    <button
                      className="modal-link-btn"
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                    >
                      <FaGithub /> GitHub
                    </button>
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
