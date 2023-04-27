import React from 'react'
import styled from 'styled-components';
import video from "./components/assets/videos/dubaibg.mp4";
import Header from './components/Header'

function Guidelines() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <BackgroundVideo autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </BackgroundVideo>
        <Content>
          <h2>GUIDELINES TO FOLLOW IN CONTEST & HACKATHONS</h2>
          <p>NOTE: This Contests and Hackathons are held Virtually.</p>
          <p><span className='important'><b>Important!!!</b></span>  Arabian Engineering Contest doesn't call you to pay any amount. Do not make any payment to the unauthorized people. All the instructions, further communication, and payment details will be given through email itself. <span className='important'><b>arabian.engineering.ae@gmail.com</b></span> is our official email address. </p>
          <p>Registration fee have to be paid only be following the instructions via email and on website.</p>
          <p>
            <ul>
              <li>
                <span>
                  <h4>Eligibility: </h4>
                  <p>The contest is open to individuals from all over the world who are interested in engineering and technology. Participants must be at least 18 years of age at the time of the contest.</p>
                </span>
              </li>
              <li>
                <span>
                  <h4>Registration: </h4>
                  <p>Participants can register for the contest on our website by filling out a registration form and paying the registration fee. The registration fee covers the cost of participation and any materials or resources provided during the contest.</p>
                </span>
              </li>
              <li>
                <span>
                  <h4>Format: </h4>
                  <p>The contest will be held in multiple rounds, with each round testing different skills and knowledge in the field of engineering. The final round will be a hackathon, where participants will work in teams to develop a technology-based solution to a real-world problem.</p>
                </span>
              </li>
              <li>
                <span>
                  <h4>Prizes: </h4>
                  <p>Participants will have the opportunity to win cash prizes and job offers from leading multinational companies in the Arabian region. The top three winners of the final round will receive cash prizes, while all participants will be considered for job offers based on their performance in the contest.</p>
                </span>
              </li>
              <li>
                <span>
                  <h4>Code of Conduct: </h4>
                  <p>We expect all participants to maintain a high level of professionalism and respect for one another throughout the contest. Any behavior that is deemed inappropriate or offensive may result in disqualification from the contest.</p>
                </span>
              </li>
              <li>
                <span>
                  <h4>Judging: </h4>
                  <p>The contest will be judged by a panel of experts in the field of engineering and technology. Participants will be evaluated based on their performance in each round of the contest, including their technical skills, creativity, teamwork, and problem-solving abilities.</p>
                </span>
              </li>
            </ul>
          </p>
        </Content>
      </HomeContainer>
    </Container>
  )
}

export default Guidelines

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
  h4, .important{
    color: #c2272d;
  }
  ul{
    list-style-type: none;
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