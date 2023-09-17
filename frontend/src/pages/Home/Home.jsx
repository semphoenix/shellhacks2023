import React from 'react'
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import Logo from "../../assets/Logo.jsx"

const Home = () => {
    const collapseItems = [
        "Home", "Create"
      ];
  return (
    <>
    <Navbar isBordered variant="sticky" css={{backgroundColor: "#BBBBA2", $$navbarBlurBackgroundColor: "transparent", $$navbarBlur: "transparent"}}>
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit"size={25}>
            Cozy Culinary
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
        <Logo/>
        </Navbar.Content>
        <Navbar.Content 
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight-rounded"
          css={{$$navbarItemFontSize: "20px"}}
        >
          <Navbar.Link href="#" >Home</Navbar.Link>
          <Navbar.Link href="#">Create</Navbar.Link>
        </Navbar.Content>
      </Navbar></>
  )
}

export default Home