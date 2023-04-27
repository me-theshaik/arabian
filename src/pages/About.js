import React from 'react'
import styled from 'styled-components';
import video from "./components/assets/videos/dubaibg.mp4";
import Header from './components/Header'

function About() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <BackgroundVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <Content>
          <h2>ABOUT ARABIAN ENGINEERING CONTEST & HACKATHONS</h2>
          <p>Welcome to the Arabian Engineering Contests and International Hackathons website! We are thrilled to host a series of exciting events that bring together the brightest minds in engineering and technology from around the world.</p>
          <p>Our organization is committed to promoting innovation and excellence in the field of engineering. By participating in our contests and hackathons, participants can showcase their skills and creativity, connect with like-minded professionals, and gain valuable experience that can propel their careers to new heights.</p>
          <p>We are proud to collaborate with a leading staffing and recruitment companies in Dubai, Saudi Arabia, Oman, Qatar and many more arabian countries, to provide participants with an unparalleled opportunity to work at multinational companies across the Arabian region. Our goal is to connect talented individuals with top-tier organizations that offer rewarding careers and excellent growth prospects.</p>
          <p>Whether you are a student, a recent graduate, or a seasoned professional, we invite you to join us in our mission to advance the field of engineering and shape the future of technology. Explore our website to learn more about our upcoming events and how you can participate. We look forward to hearing from you and seeing you at our next contest or hackathon!</p>
        </Content>
      </HomeContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  height: 100vh;
  ResHeader{
    position: fixed;
  }
`

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;

const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  max-width: 70%;
  min-height: 60%;
  border: 2px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 50px;
  border-radius: 25px;
  text-align: justify;
  top: 15%;
  margin-bottom: 50px;
  h2{
    color: #c2272d;
    text-align: center;
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
    top: 20%;
    padding: 25px;
    h2{
      font-size: 16px; 
    }
    p{
      font-size: 14px;
    }
  }
`;