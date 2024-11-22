import React from "react";
import styled from "styled-components";
import pageNotFoundImg from "../../assets/images/Page-not-found.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
min-height:30%;
padding: 100px 0px 80px 0px;
gap: 12px;
color:white;
@media (max-width: 960px) {
  flex-direction: column;
}
`;

const Image = styled.img`
  max-width: 100%;
  padding-top:40px;
  height: auto;
  border-radius: 8px; /* Optional: Adds rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Adds shadow for depth */
  @media (max-width: 960px) {
    max-width: 80%;
  }
`;

const pageNotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={pageNotFoundImg} alt="404 Image" />
        <Title>Opps... Something went wrong. Page Not Found !!!</Title>
      </Wrapper>
    </Container>
  );
};

export default pageNotFound;
