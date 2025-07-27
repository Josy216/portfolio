import { useState } from 'react';
import './Certificates.css';
import { FaTimes } from 'react-icons/fa';

const Certificate = ({ techStack = [] }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Evangadi Graduate",
      issuer: "Evangadi Tech",
      image: "./evangadi.jpg",
      description: "Comprehensive full-stack development program covering React, Node.js, Express, and database management. Completed 6-month intensive bootcamp with hands-on projects and real-world applications.",
      skills: ["React", "Node js", "Express", "MySQL", "JavaScript", "HTML", "CSS", "Boostrap", "jQuery"]
    },
    {
      id: 2,
      title: "Web Development",
      issuer: "Sololearn",
      image: "./web.jpg",
      description: "This certification validates my understanding of front-end development, covering HTML, CSS, and JavaScript. I gained hands-on experience in building responsive and interactive websites.",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "C++",
      issuer: "Sololearn",
      image: "./cplus.jpg",
      description: "This certificate showcases my skills in C++, including data structures, object-oriented programming, and problem-solving techniques. It has strengthened my logical thinking and coding abilities.",
      skills: ["C++", "Data Structures", "Object-Oriented Programming", "Problem Solving"]
    },
    {
      id: 4,
      title: "Java",
      issuer: "Sololearn",
      image: "./java.jpg",
      description: "Through this certification, I developed a strong foundation in Java, covering key concepts like classes, inheritance, and object-oriented programming. This has enhanced my ability to build structured and scalable applications.",
      skills: ["Java", "Object-Oriented Programming", "Classes", "Inheritance"]
    },
    {
      id: 7,
      title: "JavaScript Fundamentals",
      issuer: "GreatStack",
      image: "./js.jpg",
      description: "This certification covers JavaScript from basics to advanced DOM manipulation. I mastered fundamental programming concepts, event handling, and dynamic web interactions, building a strong foundation for front-end development.",
      skills: ["JavaScript", "DOM Manipulation"]
    },
    {
      id: 8,
      title: "React Hooks",
      issuer: "GreatStack",
      image: "./react.jpg",
      description: "This certification focuses on React Hooks, covering all 12 hooks from useState to custom hooks. I learned to build dynamic, stateful React applications with modern hook-based patterns for efficient and reusable code.",
      skills: ["React", "React Hooks"]
    },
    {
      id: 5,
      title: "HTML",
      issuer: "Programming Hub",
      image: "./html.jpg",
      description: "This certification highlights my expertise in HTML, focusing on HTML tags and the skeleton structure of web pages. I learned to create well-structured, semantic web pages as the foundation for front-end development.",
      skills: ["HTML"]
    },
    {
      id: 6,
      title: "CSS",
      issuer: "Programming Hub",
      image: "./css.jpg",
      description: "Certified in CSS from Programming Hub, focusing on simple responsive web design, media queries, and CSS basics. I learned to transform HTML structures into visually appealing and responsive designs using styling techniques.",
      skills: ["CSS", "HTML"]
    },
  ];

  // Function to get the icon for a skill
  const getSkillIcon = (skillName) => {
    if (!techStack || !Array.isArray(techStack)) return null; // Prevent error if techStack is undefined or not an array
    const normalizedSkill = skillName.toLowerCase().replace(/\s+/g, '');
    const tech = techStack.find(
      (tech) => tech.name.toLowerCase().replace(/\s+/g, '') === normalizedSkill
    );
    return tech ? tech.icon : null;
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-title">My Certifications</h2>
          <div className="about-text">
            <p style={{ textAlign: 'center' }}>Professional certifications that validate my technical expertise</p>
          </div>

          <div className="certificates-scroll-container">
            <div className="certificates-scroll">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="certificate-card"
                  onClick={() => openModal(cert)}
                >
                  <div className="certificate-image-container">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="certificate-image"
                      loading="lazy"
                    />
                    <div className="certificate-overlay">
                      <div className="certificate-info">
                        <h3 className="certificate-title">{cert.title}</h3>
                        <p className="certificate-issuer">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>

                  <div className="certificate-description">
                    <p>{cert.description}</p>
                    <div className="certificate-skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {getSkillIcon(skill) && (
                            <span className="skill-icon">{getSkillIcon(skill)}</span>
                          )}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="modal-certificate-image"
                loading="lazy"
              />

              <div className="modal-certificate-details">
                <h2 className="modal-certificate-title">{selectedCertificate.title}</h2>
                <p className="modal-certificate-issuer">Issued by: {selectedCertificate.issuer}</p>

                <div className="modal-certificate-description">
                  <h3>Description</h3>
                  <p>{selectedCertificate.description}</p>
                </div>

                <div className="modal-certificate-skills">
                  <h3>Skills Covered</h3>
                  <div className="modal-skills-grid">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-tag">
                        {getSkillIcon(skill) && (
                          <span className="skill-icon">{getSkillIcon(skill)}</span>
                        )}
                        {skill}
                      </span>
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

export default Certificate;