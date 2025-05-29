import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for glowing text
const glow = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
  50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
  100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
`;

// Particle animation for celestial effect
const particleMove = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.5; }
  100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
`;

// Fade-in animation for content
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled components
const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${process.env.PUBLIC_URL}/images/background5.jpg) no-repeat center center fixed;
  background-size: cover;
  font-family: 'Cinzel', serif;
  color: #fff;
  padding: 20px;
  position: relative;
  overflow: hidden;
  cursor: auto;
  transform: translateZ(0);

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

// Particle effect for celestial background
const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 215, 0, 0.5);
  border-radius: 50%;
  animation: ${particleMove} ${() => Math.random() * 6 + 6}s linear infinite;
  animation-delay: ${() => Math.random() * 5}s;
  left: ${() => Math.random() * 100}%;
  top: 100%;
  transform: translateZ(0);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  padding: 20px;
  background: rgba(30, 30, 63, 0.8); /* Darker, more opaque background for contrast */
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.2s;
  cursor: default;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #fff; /* Fallback color */
  background: linear-gradient(90deg, #fff, #d4af37); /* Adjusted gradient for better contrast */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  animation: ${glow} 2s ease-in-out infinite;
  letter-spacing: 4px;
  line-height: 1.1;
  position: relative;
  padding-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Added shadow for readability */

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.6rem;
  color: #f5f5f5; /* Slightly brighter for better visibility */
  margin: 0.5rem 0 1.5rem;
  max-width: 500px;
  font-style: italic;
  font-family: 'Playfair Display', serif;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); /* Added shadow for readability */

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.6rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  width: 220px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: text;
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }

  @media (max-width: 480px) {
    width: 180px;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #1e1e3f;
  background: #d4af37;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background: #f0e6d2;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.7);
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
  font-size: 0.9rem;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: rgba(30, 30, 63, 0.7); /* Darker background for contrast */
  color: #f5f5f5; /* Brighter for visibility */
  opacity: 0.7;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); /* Added shadow for readability */

  @media (max-width: 480px) {
    font-size: 0.7rem;
    bottom: 5px;
  }
`;

// Home4 Component
const Home4 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Celénor updates!');
    e.target.reset();
  };

  // Generate 15 particles for the celestial effect
  const particles = Array.from({ length: 15 }, (_, index) => (
    <Particle key={index} />
  ));

  return (
    <PageWrapper>
      <Particles>{particles}</Particles>
      <ContentWrapper>
        <Title>Celénor</Title>
        <Tagline>Unveil Your Radiance with Celestial Luxury</Tagline>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Enter your email" required />
          <Button type="submit">Stay Radiant</Button>
        </Form>
      </ContentWrapper>
      <Footer>© 2025 Celénor. All rights reserved.</Footer>
    </PageWrapper>
  );
};

export default Home4;