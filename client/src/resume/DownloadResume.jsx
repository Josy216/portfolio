import './DownloadResume.css';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const DownloadResume = () => {
  return (
    <section className="download-resume-section">
      <div className="container">
        <div className="resume-card">
          <div className="resume-content">
            <h2 className="resume-title">Ready to Work Together?</h2>
            <p className="resume-description">
              Get a detailed overview of my skills, experience, and achievements.
              Download my resume to learn more about what I can bring to your project.
            </p>
            <a href='/resume.jpg' download style={{textDecoration:'none'}}>
              <button className="download-btn">
                <span className="download-icon"> <FaArrowAltCircleDown /> </span>
                Download Resume
              </button>
            </a>
          </div>
          <div className="resume-visual">
            <div className="resume-preview">
              <div className="resume-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;
