import React from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;
`;

const Container = styled.div`
  width: 70%;
  min-height: 600px;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }
    p {
      border-radius: 50px 0 50px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text};
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.text};
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
`;

const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;
`;

const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <RoadMapItem title="Grand Opening" subtext="Alienet wou wou wou"  />
          <RoadMapItem title="Great Benefits" subtext="Alienet wou wou wou" />
          <RoadMapItem title="Early Access" subtext="Alienet wou wou wou" />
          <RoadMapItem title="New Merch" subtext="Alienet wou wou wou" />
          <RoadMapItem title="Holders Ranking" subtext="Alienet wou wou wou" />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
