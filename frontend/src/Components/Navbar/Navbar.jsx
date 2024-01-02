import React from "react";
import "./navbar.css";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  let Container = styled.div`
    height: 60px;
    border: 2px solid green;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  `;
  const Left = styled.div`
    border: 1px solid gray;
    flex: 1;
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const SearchContainer = styled.div`
    border: 1px solid gray;
  `;
  const Input = styled.input``;
  const Center = styled.div`
    border: 1px solid gray;
    flex: 1;
  `;
  const Logo = styled.h1`
    font-weight: bold;
  `;
  const Right = styled.div`
    border: 1px solid gray;
    flex: 1;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            LAMA
          </Logo>
        </Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
