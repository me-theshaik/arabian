import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import video from "./components/assets/videos/dubaibg.mp4";

function Contest() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        {/* <BackgroundVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </BackgroundVideo> */}
        <Content>
          
          <h2>Contest you are looking for is now closed</h2>
          <TimeOut src='./images/timeout.png' />
          <p>The Contest is being closed due to high volume of participants in this season.</p>
          <p>Check back in the <b>FIRST WEEK OF MAY</b> to take part in the Contest/Hackathon.</p>
        </Content>
      </HomeContainer>
    </Container>
  )
}

export default Contest

const Container = styled.div`
  height: 100vh;
  ResHeader{
    position: fixed;
  }
`;
const TimeOut = styled.img`
  height: 200px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;
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
  border: 2px solid #c2272d;
  background-color: rgba(194, 39, 45, 0.3);
  color: #c2272d;
  padding: 20px;
  border-radius: 25px;
  text-align: justify;
  top: 15%;
  margin-bottom: 50px;
  text-align: center;
  h2{
    color: #c2272d;
    font-size: 30px;
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