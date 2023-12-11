import React from 'react';
import "./navbar.css";
import styled from "styled-components";
const Navbar = () => {
  let Container = styled.div`
  height:60px;
  border:2px solid green;
  `;
  const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  `;
  const Left = styled.div``;
  const Center = styled.div``;
  const Right = styled.div``;
  return (
    <Container>
     <Wrapper>
    <Left>left</Left>
    <Center>center</Center>
    <Right>right</Right>
     </Wrapper>
    </Container>
  )
}

export default Navbar