import React, { useState, useEffect } from 'react';
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
  50% { text-shadow: 0 0 20px rgba(255, 255, 255, 1); }
  100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
`;

// Styled components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #f3e7e9, #e3eeff, #e3f4f1);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  font-family: 'Playfair Display', serif;
  color: #333;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  animation: ${glow} 2s ease-in-out infinite;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 600px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CountdownItem = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  min-width: 100px;
  text-align: center;
`;

const CountdownValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

const CountdownLabel = styled.div`
  font-size: 1rem;
  color: #777;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: transform 0.3s ease;
  &:focus {
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #e91e63;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: #c2185b;
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  font-size: 0.9rem;
  color: #777;
`;

// Coming Soon Component
const Home = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date (e.g., 30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = launchDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here (e.g., API call)
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <PageWrapper>
      <Title>Discover Radiant Beauty</Title>
      <Subtitle>Our luxurious skincare range is launching soon. Be the first to experience glowing skin!</Subtitle>
      <CountdownWrapper>
        <CountdownItem>
          <CountdownValue>{countdown.days}</CountdownValue>
          <CountdownLabel>Days</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.hours}</CountdownValue>
          <CountdownLabel>Hours</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.minutes}</CountdownValue>
          <CountdownLabel>Minutes</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{countdown.seconds}</CountdownValue>
          <CountdownLabel>Seconds</CountdownLabel>
        </CountdownItem>
      </CountdownWrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Enter your email" required />
        <Button type="submit">Stay Updated</Button>
      </Form>
      <Footer>&copy; 2025 Your Skincare Brand. All rights reserved.</Footer>
    </PageWrapper>
  );
};

export default Home;