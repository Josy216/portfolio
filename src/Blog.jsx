
import React from 'react';
import blog from './blog.jpg'
const Blog = () => {
  return (
    <section className="jobot-section">
      <div className="container">
        <h2 className="section-title">My Latest Writing</h2>
        <p className="section-subtitle">Thoughts on development, AI tools, and building better software</p>
        
        <div className="blog-preview">
          <div className="blog-card">
            <div className="blog-icon">📝</div>
            <h3>How I Built Netflix Clone with React & Firebase</h3>
            <p>A complete walkthrough of building a production-ready streaming platform with authentication, payment integration, and scalable architecture.</p>
            <span className="blog-meta">Coming Soon</span>
          </div>
          
          <div className="blog-card">
            <div className="blog-icon">🛠️</div>
            <h3>Top 10 AI Tools Every Developer Should Know in 2025</h3>
            <p>From code generation to deployment automation, here are the AI-powered tools that are transforming how we build software.</p>
            <span className="blog-meta">Coming Soon</span>
          </div>
          
          <div className="blog-card">
            <div className="blog-icon">{blog}</div>
            <h3>Learning Full-Stack Development as a CS Student</h3>
            <p>My journey from computer science theory to building real-world applications, and the resources that made the difference.</p>
            <span className="blog-meta">Coming Soon</span>
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
  );
};

export default Blog;