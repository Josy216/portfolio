import { useState } from 'react';
import './Blog.css';
import { FaTimes } from 'react-icons/fa';
import blogImage from './blog.jpg';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "How I Built Netflix Clone with React & Firebase",
      description: "A complete walkthrough of building a production-ready streaming platform with authentication, payment integration, and scalable architecture.",
      meta: "Coming Soon",
      icon: "📝",
      image: blogImage
    },
    {
      id: 2,
      title: "Top 10 AI Tools Every Developer Should Know in 2025",
      description: "From code generation to deployment automation, here are the AI-powered tools that are transforming how we build software.",
      meta: "Coming Soon",
      icon: "🛠️",
      image: blogImage
    },
    {
      id: 3,
      title: "Learning Full-Stack Development as a CS Student",
      description: "My journey from computer science theory to building real-world applications, and the resources that made the difference.",
      meta: "Coming Soon",
      icon: blogImage,
      image: blogImage
    }
  ];

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <section id="blogs" className="blog-section">
        <div className="container">
          <h2 className="section-title">My Latest Writing</h2>
          <p className="section-subtitle">Thoughts on development, AI tools, and building better software</p>

          <div className="blog-scroll-container">
            <div className="blog-scroll">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="blog-card"
                  onClick={() => openModal(blog)}
                >
                  <div className="blog-image-container">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <div className="blog-overlay">
                      <div className="blog-info">
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-meta">{blog.meta}</p>
                      </div>
                    </div>
                  </div>

                  <div className="blog-description">
                    <div className="blog-icon">{blog.icon}</div>
                    <p>{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="blog-cta">
            <button
              className="blog-subscribe-btn"
              onClick={() => window.open('https://t.me/jocode216', '_blank')}
            >
              📚 Get Notified When I Publish
            </button>
          </div>
        </div>
      </section>

      {selectedBlog && (
        <div className="blog-modal-overlay" onClick={closeModal}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="modal-blog-image"
              />

              <div className="modal-blog-details">
                <h2 className="modal-blog-title">{selectedBlog.title}</h2>
                <p className="modal-blog-meta">{selectedBlog.meta}</p>
                <div className="modal-blog-description">
                  <h3>Description</h3>
                  <p>{selectedBlog.description}</p>
                </div>
                <div className="modal-blog-icon">
                  <h3>Icon</h3>
                  <span>{selectedBlog.icon}</span>
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