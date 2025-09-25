import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 58px;
  text-align: center;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, #00f2ff, #3a47d5);
    margin: 16px auto 0;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 20px;
  border-radius: 14px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  transition: 0.3s;

  &:focus {
    border: 1px solid #00f2ff;
    box-shadow: 0 0 8px #00f2ff44;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + 80};
  }
`;

const Textarea = styled.textarea`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 20px;
  border-radius: 14px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  min-height: 120px;
  outline: none;
  resize: vertical;
  transition: 0.3s;

  &:focus {
    border: 1px solid #00f2ff;
    box-shadow: 0 0 8px #00f2ff44;
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + 80};
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #00f2ff, #3a47d5);
  border: none;
  padding: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 242, 255, 0.35);
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_877y3p9', // replace with your EmailJS service ID
        'template_2wuq5mq', // replace with your EmailJS template ID
        form.current,
        'd6AHrH6ixwaB9DPSk' // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully 🚀');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <Container id="contact">
      <Title>Let's Connect</Title>
      <Description>
        Have a project, question, or just want to say hi? Drop me a message — I’d love to hear from you!
      </Description>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="from_name" placeholder="Your Name" required />
        <Input type="email" name="from_email" placeholder="Your Email" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <Textarea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message 🚀</Button>
      </Form>
    </Container>
  );
};

export default Contact;
