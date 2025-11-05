import { useState } from "react";
import "./Blog.css";
import { FaTools } from "react-icons/fa";

export const roadmapSkills = [
  {
    id: "chrome-devtools",
    name: "Learn Developer Tool በ 15 ደቂቃ",
    category: "tools",
    icon: FaTools,
    color: "skill-tools",
    videoUrl: "https://youtu.be/qf-zcK1AV1Q?si=eESB7ClkCi0OXopi",
    videoId: "qf-zcK1AV1Q",
  },
  {
    id: "mern-fullstack-guide",
    name: "MERN Stack Full Guide",
    category: "fullstack",
    icon: FaTools,
    color: "skill-fullstack",
    videoUrl: "https://youtu.be/PyHK26jJfHU?si=qkmGTsvA_Sg2rxLv",
    videoId: "PyHK26jJfHU",
  },
  {
    id: "frontend-roadmap-2025",
    name: "Frontend Roadmap 2025 በአማርኛ",
    category: "frontend",
    icon: FaTools,
    color: "skill-roadmap",
    videoUrl: "https://www.youtube.com/watch?v=Icdh9VIGeWk",
    videoId: "Icdh9VIGeWk",
  },
  {
    id: "vscode-shortcuts",
    name: "VS Code Shortcuts በቀላሉ",
    category: "tools",
    icon: FaTools,
    color: "skill-tools",
    videoUrl: "https://www.youtube.com/watch?v=-dugArwZQ6A&t=182s",
    videoId: "-dugArwZQ6A",
  },
  {
    id: "vscode-extensions",
    name: "25 VS Code Extensions በቀላሉ",
    category: "tools",
    icon: FaTools,
    color: "skill-tools",
    videoUrl: "https://www.youtube.com/watch?v=x3lWZylSQZg&t=100s",
    videoId: "x3lWZylSQZg",
  },
  {
    id: "html-intro",
    name: "Introduction to HTML",
    category: "frontend",
    icon: FaTools,
    color: "skill-basics",
    videoUrl: "https://youtu.be/HXu73kJeKlo?si=UIpnpO31WfAYaZmI",
    videoId: "HXu73kJeKlo",
  },
  {
    id: "css-intro",
    name: "Introduction to CSS",
    category: "frontend",
    icon: FaTools,
    color: "skill-basics",
    videoUrl: "https://youtu.be/6GbvzfjbKHw?si=x5ejYhj04fHHGtXq",
    videoId: "6GbvzfjbKHw",
  },
  {
    id: "deploy-sites",
    name: "Free and Paid Deployment",
    category: "tools",
    icon: FaTools,
    color: "skill-tools",
    videoUrl: "https://youtu.be/TBxWn4vjKtQ?si=1koNucR59VoFUBpe",
    videoId: "TBxWn4vjKtQ",
  },
  {
    id: "backend-roadmap",
    name: "Backend Roadmap በ የ JS እውቀት ላይ",
    category: "backend",
    icon: FaTools,
    color: "skill-backend",
    videoUrl: "https://youtu.be/JwBoGhUWIuE?si=lD53VcOrQmCuJ_9Q",
    videoId: "JwBoGhUWIuE",
  },
  {
    id: "command-line-intro",
    name: "Using Command Line on OS",
    category: "tools",
    icon: FaTools,
    color: "skill-tools",
    videoUrl: "https://youtu.be/tHtwC1Wo4tc?si=XU68OCoWXf9odRIC",
    videoId: "tHtwC1Wo4tc",
  },
];

const Myvideo = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Videos", color: "category-all" },
    { id: "tools", name: "Tools", color: "category-tools" },
    { id: "frontend", name: "Frontend", color: "category-frontend" },
    { id: "backend", name: "Backend", color: "category-backend" },
    { id: "fullstack", name: "Full Stack", color: "category-fullstack" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? roadmapSkills
      : roadmapSkills.filter((skill) => skill.category === activeCategory);

  const handleCardClick = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const getYoutubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <>
      <section id="myvideo" className="blog-section">
        <div className="container">
          <h2 className="section-title">The Way I Teach</h2>
          <div className="blog-slogan">
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                marginBottom: "20px",
                fontSize: "1.1em",
                color: "#666",
              }}
            >
              Watch my videos and see the way I code.
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${category.color} ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="blog-scroll-container">
            <div className="blog-scroll">
              {filteredSkills.map((skill) => {
                return (
                  <div
                    key={skill.id}
                    className="blog-card"
                    onClick={() => handleCardClick(skill.videoUrl)}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myvideo;
