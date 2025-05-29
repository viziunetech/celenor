import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for gradient background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animation for glowing text
const glow = keyframes`
  0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
  50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.9); }
  100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
`;

// Animation for floating image
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

// Particle animation for celestial effect
const particleMove = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
`;

// Styled components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e1e3f, #3b2f77, #d4af37);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 12s ease infinite;
  font-family: 'Cinzel', serif;
  color: #fff;
  padding: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
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
  width: 5px;
  height: 5px;
  background: rgba(255, 215, 0, 0.7);
  border-radius: 50%;
  animation: ${particleMove} ${() => Math.random() * 5 + 5}s linear infinite;
  animation-delay: ${() => Math.random() * 5}s;
  left: ${() => Math.random() * 100}%;
  top: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 500px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    align-items: center;
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  animation: ${glow} 2s ease-in-out infinite;
  letter-spacing: 2px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.8rem;
  color: #f0e6d2;
  margin: 1rem 0 2rem;
  max-width: 450px;
  font-style: italic;
  font-family: 'Playfair Display', serif;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 100%;
  }
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 350px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  animation: ${float} 4s ease-in-out infinite;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
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
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  font-size: 0.9rem;
  color: #f0e6d2;
  opacity: 0.8;
`;

// Home4 Component
const Home4 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Celenor updates!');
    e.target.reset();
  };

  // Generate 50 particles for the celestial effect
  const particles = Array.from({ length: 50 }, (_, index) => (
    <Particle key={index} />
  ));

  return (
    <PageWrapper>
      <Particles>{particles}</Particles>
      <ContentWrapper>
        <Title>Celenor</Title>
        <Tagline>Unveil Your Radiance with Celestial Luxury</Tagline>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Enter your email" required />
          <Button type="submit">Stay Radiant</Button>
        </Form>
      </ContentWrapper>
      <ProductImageWrapper>
        <ProductImage
          src={`${process.env.PUBLIC_URL}/images/image4.jpeg`}
          alt="Celenor Luxury Skincare Products"
        />
      </ProductImageWrapper>
      <Footer>© 2025 Celenor. All rights reserved.</Footer>
    </PageWrapper>
  );
};

export default Home4;