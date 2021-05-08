import React from "react";
import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <BgImages />
        <CTA>
          <CTAlogoOne src="/images/cta-logo-one.svg" />
          <SignUP>GET ALL THERE</SignUP>
          <Description>
            get premier access to all new things and watch everything like its
            full of everything new cartoon is going to come out soon as i am get
            premier access to all new things and watch everything like its full
            of everything new cartoon bu pricing is dollar 1 .
          </Description>
          <CTAlogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImages = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  transition-timing-function: ease-out;
  transition: opacity 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: auto;
  width: 100;
`;

const CTAlogoOne = styled.img`
  margin-bottom: 12px;
  min-height: 1px;
  max-height: 600px;
  display: block;
  width: 100%;
`;
const SignUP = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.2%, 1);
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTAlogoTwo = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
  display: inline;
  width: 100%;
  vertical-align: bottom;
`;
export default Login;
