import './Skills.css';
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNode, FaGit, FaGithub } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { SiExpress, SiMysql } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiNextjsLine } from 'react-icons/ri';
import { FaMdb } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { id: 1, name: "HTML", icon: <FaHtml5 /> },
        { id: 2, name: "CSS", icon: <FaCss3 /> },
        { id: 3, name: "Bootstrap", icon: <FaBootstrap /> },
        { id: 4, name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
        { id: 6, name: "React", icon: <FaReact /> },
        { id: 7, name: "React Router", icon: <FaReact /> },
        { id: 9, name: "Next.js", icon: <RiNextjsLine /> },
        { id: 10, name: "jQuery", icon: "🛠️" },
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { id: 1, name: "HTML", icon: <FaHtml5 /> },
        { id: 2, name: "CSS", icon: <FaCss3 /> },
        { id: 5, name: "JavaScript", icon: <AiOutlineJavaScript /> },
        { id: 8, name: "TypeScript", icon: <TbBrandTypescript /> },
      ]
    },
    {
      name: "Backend",
      skills: [
        { id: 11, name: "Node.js", icon: <FaNode /> },
        { id: 12, name: "Express.js", icon: <SiExpress /> },
        { id: 13, name: "Firebase", icon: <IoLogoFirebase /> },
        { id: 14, name: "Supabase", icon: "🛠️" },
      ]
    },
    {
      name: "Database",
      skills: [
        { id: 15, name: "MySQL", icon: <SiMysql /> },
        { id: 16, name: "MongoDB", icon: <FaMdb /> },
      ]
    },
    {
      name: "Deployment",
      skills: [
        { id: 17, name: "Netlify", icon: "🛠️" },
        { id: 18, name: "Vercel", icon: "🛠️" },
      ]
    },
    {
      name: "APIs/Services",
      skills: [
        { id: 19, name: "Stripe", icon: "🛠️" },
        { id: 20, name: "YouTube API", icon: "🛠️" },
        { id: 21, name: "Unsplash API", icon: "🛠️" },
        { id: 22, name: "Formspree", icon: "🛠️" },
        { id: 23, name: "Getform", icon: "🛠️" },
      ]
    },
    {
      name: "Tools",
      skills: [
        { id: 15, name: "Git", icon: <FaGit /> },
        { id: 16, name: "GitHub", icon: <FaGithub /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I use to build robust applications</p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="category-skills">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="skill-card">
                    <div className="skill-icon" title={skill.name}>{skill.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;