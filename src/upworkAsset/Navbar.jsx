import { useState, useEffect } from 'react';
import '../navbar.css';
import { FaUpwork } from 'react-icons/fa6';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Me', href: '#why-choose-me' },
    { name: 'certificates', href: '#certificates' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.slice(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text"><a href="#home">JT</a></span>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="hamburger-icon">
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => window.open('https://www.upwork.com/freelancers/~01263078af1824fa21?mp_source=share', '_blank')}//upwork link
            className="hire-btn mobile-hire-btn"
          >
            <FaUpwork /> 
          </button>
        </div>

        <div className="navbar-cta desktop-only">
          <button
            onClick={() => window.open('https://www.upwork.com/freelancers/~01263078af1824fa21?mp_source=share', '_blank')}
            className="hire-btn"
          >
            <FaUpwork />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;