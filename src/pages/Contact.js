import React, { useState } from 'react';
// import firebase from './firebase/app';
// import './firebase/functions';
import styled from 'styled-components';
import Header from './components/Header';


function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const sendEmail = firebase.functions().httpsCallable('sendEmail');
    // await sendEmail({ name, email, message });

    // setName('');
    // setEmail('');
    // setMessage('');

    alert('Your message was submitted Successfully. Our Team will get back to you. Appriciate your patience....')
  };
  return (
    <Container>
      <Header />
      <Contpage>
        <FormDetails>
          <Title>Contact Us</Title>
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Input type="text" placeholder="Name" required />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="Message" required />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </FormContainer>
        </FormDetails>
        <ImgForm>
          <Pictorial>
            <ContBox>
              <h3>Email us your queries at </h3>
              <span>arabian.engineering.ae@gmail.com</span>
              <h4>Mobile</h4>
              <span>+971 55 333 8427</span>
            </ContBox>
          </Pictorial>
        </ImgForm>
      </Contpage>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #c2272d;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Contpage = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:  0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ImgForm = styled.div`
  height: 100vh;
  width: 50%;
  /* margin: 50px 0 -50px 0; */

  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`

const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 50px;
  width: 50%;

  @media only screen and (max-width: 768px) {
    /* margin-top: 100px; */
    width: 100%;
  }
`

const Pictorial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0px;
  height: 100vh;
  width: 100%;
  background-image: url('./images/contact-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
`

const ContBox = styled.div`
  text-align: center;
  margin: 10px;
  padding: 10px;
  position: absolute;
  bottom: 5%;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;

  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c2272d;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c2272d;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  resize: vertical;
  height: 150px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: #c2272d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #c2272d;
    border: 2px solid #c2272d;
  }
`