import { useState } from 'react';
import './Blog.css';
import { FaTimes, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  FaComputer, 
  FaHtml5, 
  FaJs, 
  FaGitAlt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

export const roadmapSkills = [
  {
    id: 'computer-basics',
    name: 'Basic Computer Skills',
    category: 'basics',
    icon: FaComputer,
    color: 'skill-basics',
    videoUrl: 'https://youtu.be/y2kg3MOk1sY?si=si0H4M7FYMqrwpVm',
    videoId: 'y2kg3MOk1sY',
    docs: [],
    description: 'Learn computer basics like files, keyboard shortcuts, and fixing simple problems. Understand how computers and operating systems work.'
  },
  {
    id: 'dev-tools',
    name: 'Developer Tools',
    category: 'tools',
    icon: FaTools,
    color: 'skill-tools',
    videoUrl: 'https://youtu.be/x4q86IjJFag?si=Vjz7ZB_fZpUT6w0c',
    videoId: 'x4q86IjJFag',
    docs: [],
    description: 'Set up and use coding tools like VS Code, Chrome\'s debugging tools, and the command line to work faster.'
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    category: 'frontend',
    icon: FaHtml5,
    color: 'skill-frontend',
    videoUrl: 'https://youtu.be/G3e-cpL7ofc?si=rElI5d-GHsi5_6bB',
    videoId: 'G3e-cpL7ofc',
    docs: [
      { name: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' },
      { name: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' }
    ],
    description: 'Create website structures with HTML and make them look good with CSS (colors, layouts, mobile-friendly designs).'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: FaJs,
    color: 'skill-frontend',
    videoUrl: 'https://youtu.be/EerdGm-ehJQ?si=XHKVGX4_pLZ0Voyb',
    videoId: 'EerdGm-ehJQ',
    docs: [
      { name: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/' }
    ],
    description: 'Make websites interactive. Learn basics like variables and functions, and how to control website elements.'
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    icon: FaGitAlt,
    color: 'skill-tools',
    videoUrl: 'https://youtu.be/b_glcE0SOoE?si=Tja0p8BVV-dV4xJT',
    videoId: 'b_glcE0SOoE',
    docs: [
      { name: 'Git Documentation', url: 'https://git-scm.com/doc' },
      { name: 'GitHub Docs', url: 'https://docs.github.com/' }
    ],
    description: 'Track code changes, work with teams, and manage projects using these version control tools.'
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: FaReact,
    color: 'skill-frontend',
    videoUrl: 'https://youtu.be/CgkZ7MvWUAA?si=v0slhYVHjlUO4_yg',
    videoId: 'CgkZ7MvWUAA',
    docs: [
      { name: 'React Documentation', url: 'https://reactjs.dev/' }
    ],
    description: 'Build modern websites using reusable components and manage how data changes what users see.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: FaNodeJs,
    color: 'skill-backend',
    videoUrl: 'https://youtu.be/yGl3f0xTl_0?si=jKR4q_dnVta5J11R',
    videoId: 'yGl3f0xTl_0',
    docs: [
      { name: 'Node.js Documentation', url: 'https://nodejs.org/en/docs' }
    ],
    description: 'Use JavaScript to create server-side applications and handle backend tasks.'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    icon: SiExpress,
    color: 'skill-backend',
    videoUrl: 'https://youtu.be/fBzm9zja2Y8?si=BnzC-AI6foRHhkn5',
    videoId: 'fBzm9zja2Y8',
    docs: [
      { name: 'Express Documentation', url: 'https://expressjs.com/' },
      { name: 'MongoDB Documentation', url: 'https://www.mongodb.com/docs/' }
    ],
    description: 'A simple tool for building web servers and APIs with Node.js. This tutorial also covers MongoDB integration.'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: FaDatabase,
    color: 'skill-database',
    videoUrl: 'https://youtu.be/5OdVJbNCSso?si=bBWKfZrH70J86nnd',
    videoId: '5OdVJbNCSso',
    docs: [
      { name: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' }
    ],
    description: 'Learn MySQL database fundamentals with Bro Code. Master SQL queries, database design, and data management.'
  }
];

export const certificationPlatforms = [
  { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
  { name: 'CS50 by Harvard', url: 'https://cs50.harvard.edu/' },
  { name: 'Coursera', url: 'https://www.coursera.org/' },
  { name: 'Google Certificates', url: 'https://grow.google/certificates/' },
  { name: 'Meta Front-End Developer', url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer' },
  { name: 'SoloLearn', url: 'https://www.sololearn.com/' },
  { name: 'Programming Hub', url: 'https://programminghub.io/' }
];

export const telegramChannels = [
  { name: '@jocode216', url: 'https://t.me/jocode216', description: 'Amazing development notes and tutorials' },
  { name: 'Web Dev Trainings', url: 'https://t.me/webdev_trainings', description: 'Comprehensive web development training materials' },
  { name: '@codehype', url: 'https://t.me/codehype', description: 'Latest coding trends and resources' }
];

const Blog = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', color: 'category-all' },
    { id: 'basics', name: 'Basics', color: 'category-basics' },
    { id: 'tools', name: 'Tools', color: 'category-tools' },
    { id: 'frontend', name: 'Frontend', color: 'category-frontend' },
    { id: 'backend', name: 'Backend', color: 'category-backend' },
    { id: 'database', name: 'Database', color: 'category-database' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? roadmapSkills 
    : roadmapSkills.filter(skill => skill.category === activeCategory);

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  const handleVideoPlay = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  const getYoutubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">The Way I Learned</h2>
          <div className="blog-slogan">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '20px', fontSize: '1.1em', color: '#666' }}>
            </p>
          </div>
          <div className="about-text">
            <p style={{ textAlign: 'center' }}>
            As Brian Tracy says, 'The more you share your knowledge, the better you learn them yourself.'</p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${category.color} ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Horizontal Scroll */}
          <div className="blog-scroll-container">
            <div className="blog-scroll">
              {filteredSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.id}
                    className="blog-card"
                    onClick={() => openSkillModal(skill)}
                  >
                    <div className="blog-image-container">
                      <img 
                        src={getYoutubeThumbnail(skill.videoId)}
                        alt={`${skill.name} Tutorial`}
                        className="blog-image"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${skill.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="blog-overlay">
                        <div className="blog-info">
                          <h3 className="blog-title">{skill.name}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="blog-description">
                      <p>{skill.description}</p>
                      <div className="project-skills">
                        <span className="skill-tag">{skill.category}</span>
                        {skill.docs.length > 0 && <span className="skill-tag">Documentation</span>}
                        <span className="skill-tag">Video Tutorial</span>
                      </div>
                      <div className="project-links">
                        <button
                          className="project-link-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoPlay(skill.videoUrl);
                          }}
                          title="Watch Tutorial"
                        >
                          Play
                        </button>
                        {skill.docs.length > 0 && (
                          <button
                            className="project-link-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(skill.docs[0].url, '_blank');
                            }}
                            title="Documentation"
                          >
                            Doc
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </section>



      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <img
                src={getYoutubeThumbnail(selectedSkill.videoId)}
                alt={`${selectedSkill.name} Tutorial`}
                className="modal-project-image"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${selectedSkill.videoId}/hqdefault.jpg`;
                }}
              />

              <div className="modal-project-details">
                <h2 className="modal-project-title">{selectedSkill.name}</h2>
                <div className="modal-project-description">
                  <h3>Description</h3>
                  <p>{selectedSkill.description}</p>
                </div>
                <div className="modal-project-skills">
                  <h3>Category</h3>
                  <div className="modal-skills-grid">
                    <span className="modal-skill-tag">{selectedSkill.category}</span>
                  </div>
                </div>
                <div className="modal-project-links">
                  <h3>Resources</h3>
                  <div className="modal-links-grid">
                    <button
                      className="modal-link-btn"
                      onClick={() => handleVideoPlay(selectedSkill.videoUrl)}
                    >
                      Play Tutorial
                    </button>
                    {selectedSkill.docs.map((doc, index) => (
                      <button
                        key={index}
                        className="modal-link-btn"
                        onClick={() => window.open(doc.url, '_blank')}
                      >
                        Doc: {doc.name}
                      </button>
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

export default Blog;