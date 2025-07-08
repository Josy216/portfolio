
import React, { useState, useEffect, useRef } from 'react';
import './Jobot.css';

const Jobot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Jobot, Joseph Teka's AI assistant. I can tell you about his skills, projects, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base about Joseph Teka
  const knowledgeBase = {
    skills: [
      "HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "React", 
      "Node.js", "Express", "MySQL", "Git/GitHub", "Firebase", "Netlify"
    ],
    experience: "Joseph is a passionate full-stack web developer and Computer Science student at Jimma University. He graduated from Evangadi Tech with full-stack development skills and currently works as a freelancer.",
    mainProjects: [
      {
        name: "Netflix Clone",
        description: "A full-stack movie streaming app with React and Firebase, featuring user authentication and dynamic content."
      },
      {
        name: "Amazon Clone", 
        description: "A feature-rich ecommerce platform with React, Node.js, Express, and Stripe payment integration."
      },
      {
        name: "Evangadi Forum",
        description: "A Q&A community platform for students to ask questions and share answers."
      },
      {
        name: "Apple Clone",
        description: "A stylish Apple.com-inspired UI with embedded product videos via YouTube API."
      }
    ],
    strengths: [
      "Clean Code Expert - writes maintainable, readable, and efficient code",
      "AI-Powered Development - leverages cutting-edge AI tools",
      "Full-Stack Proficiency - works across frontend and backend technologies",
      "Problem Solving Skills - strong analytical and creative thinking",
      "Tool Mastery - experienced with wide range of development tools",
      "Visual Communication - excellent at expressing ideas through design"
    ],
    contact: {
      email: "Available through the contact form on the portfolio",
      github: "https://github.com/josy216",
      linkedin: "https://www.linkedin.com/in/joseph-teka-271661309"
    }
  };

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return `Joseph is skilled in: ${knowledgeBase.skills.join(', ')}. He specializes in full-stack development with modern technologies!`;
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      const projectList = knowledgeBase.mainProjects.map(p => `• ${p.name}: ${p.description}`).join('\n');
      return `Here are Joseph's main projects:\n\n${projectList}\n\nHe also has many learning projects showing his growth as a developer!`;
    }
    
    if (message.includes('experience') || message.includes('background') || message.includes('about')) {
      return knowledgeBase.experience;
    }
    
    if (message.includes('strength') || message.includes('why') || message.includes('choose')) {
      const strengthList = knowledgeBase.strengths.map(s => `• ${s}`).join('\n');
      return `Here's why you should choose Joseph:\n\n${strengthList}`;
    }
    
    if (message.includes('contact') || message.includes('hire') || message.includes('reach')) {
      return `You can contact Joseph through:\n• Contact form on his portfolio\n• GitHub: ${knowledgeBase.contact.github}\n• LinkedIn: ${knowledgeBase.contact.linkedin}`;
    }
    
    if (message.includes('netflix')) {
      return "Joseph's Netflix Clone is a full-stack movie streaming app built with React and Firebase. It features user authentication, dynamic sliders, and movie trailers with download links!";
    }
    
    if (message.includes('amazon')) {
      return "The Amazon Clone is a feature-rich ecommerce platform using React, Node.js, Express, and Stripe. Users can browse products, add to cart, and checkout securely!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to tell you about Joseph Teka. He's a talented full-stack developer with amazing projects. What would you like to know about him?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about Joseph or check out his projects on the portfolio!";
    }
    
    // Default response
    return "I can tell you about Joseph's skills, projects, experience, or how to contact him. What specific information are you looking for?";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="jobot-container">
      {/* Chat Window */}
      <div className={`jobot-chat ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="jobot-header">
          <div className="jobot-header-content">
            <div className="jobot-avatar">
              <img src="https://avatars.githubusercontent.com/u/179788482?v=4" alt="Jobot" />
            </div>
            <div className="jobot-info">
              <h3>Jobot</h3>
              <p>Joseph's AI Assistant</p>
            </div>
          </div>
          <button className="jobot-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="jobot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.isBot ? 'bot' : 'user'}`}>
              <div className={`message-avatar ${message.isBot ? 'bot' : 'user'}`}>
                {message.isBot ? (
                  <img src="https://avatars.githubusercontent.com/u/179788482?v=4" alt="Jobot" />
                ) : (
                  '👤'
                )}
              </div>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="message-avatar bot">
                <img src="https://avatars.githubusercontent.com/u/179788482?v=4" alt="Jobot" />
              </div>
              <div className="typing-indicator">
                <span>Jobot is typing</span>
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="jobot-input">
          <input
            type="text"
            placeholder="Ask me about Joseph..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
          />
          <button
            className="jobot-send"
            onClick={handleSend}
            disabled={isTyping || !inputValue.trim()}
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="jobot-fab" onClick={() => setIsOpen(!isOpen)}>
        <div className="jobot-icon">
          {isOpen ? '✕' : <img src="https://avatars.githubusercontent.com/u/179788482?v=4" alt="Jobot" />}
        </div>
      </button>
    </div>
  );
};

export default Jobot;