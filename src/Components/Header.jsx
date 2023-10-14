import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import Logo from "../Images/logo.png";
import { Language, Menu, Clear } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/whitepaper",
      name: "White Paper",
    },
    {
      path: "/gamefi",
      name: "Gamefi",
    },
  ];
  return (
    <>
      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
        width="100%"
        height="90px"
        bgcolor="rgba(0,0,0,0.4)"
        sx={{ zIndex: "1", position: "absolute" }}
        alignItems="center">
        {/* <Box padding="0 20% 0 20%" display="flex" width="100%" alignItems="center" sx={{zIndex:'1'}} justifyContent="space-around"> */}

        <Box display="flex" alignItems="center">
          <img src={Logo} alt="logo_image" />
          <Typography
            variant="h4"
            color="#dbdad7"
            display={{ md: "none", lg: "flex" }}
            fontWeight="bold"
            fontSize={20}
            paddingLeft={2}>
            FyMetaverse
          </Typography>
        </Box>
        <Box
          paddingLeft={{ md: 4, lg: 7 }}
          paddingRight={{ md: 4, lg: 7 }}
          fontWeight="light">
          {navMenu.map((item, index) => {
            return (
              <Link
                component="a"
                underline="none"
                href={item.path}
                sx={{
                  color: "#dbdad7",
                  padding: "0px 30px 30px 0",
                  fontWeight: "bolder",
                }}>
                {item.name}
              </Link>
            );
          })}
        </Box>
        <Stack direction="row" spacing={{ md: 2, lg: 3 }}>
          <IconButton
            aria-label="Language_change_button"
            sx={{ color: "#dbdad7" }}>
            <Language />
          </IconButton>
          <Button
            variant="outlined"
            sx={{
              color: "#dbdad7",
              borderRadius: "50px",
              marginLeft: "5px",
              border: "1px solid white",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            disableRipple>
            Connect Wallet
          </Button>
        </Stack>
      </Box>
      {/* ///////////responsive */}
      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent="space-between"
        width="100%"
        height="80px"
        bgcolor="rgba(0,0,0,0.4)"
        sx={{ zIndex: "1", position: "absolute" }}
        alignItems="center"
        paddingLeft={{ xs: 2 }}>
        <img src={Logo} alt="respnosiove_logo" />
        <Stack direction="row" paddingRight={{ xs: 2 }}>
          <IconButton
            aria-label="Language_change_button"
            sx={{ color: "#dbdad7" }}>
            <Language />
          </IconButton>
          <IconButton
            aria-label="Language_change_button"
            sx={{ color: "#dbdad7" }}
            onClick={() => setOpen(true)}>
            <Menu />
          </IconButton>
        </Stack>
      </Box>
      {/* ////////////////////////Header Section/////////////////////////////// */}

      <Drawer
        width="100vw"
        height="100vh"
        sx={{
          color: "#142033",
        }}
        variant="temporary"
        anchor="left"
        open={open}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          bgcolor="rgba(0,0,0,0.8)"
          width="90vw"
          height="100vh">
          <IconButton onClick={() => setOpen(false)}>
            <Clear sx={{ width: "60px", color: "white" }}></Clear>
          </IconButton>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            paddingTop={3}>
            <img src={Logo} alt="logo_image" />
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              fontSize={20}
              paddingTop={2}
              pb={3}>
              FyMetaverse
            </Typography>
          </Box>
          {navMenu.map((item, index) => {
            return (
              <>
                <Link
                  underline="none"
                  href={item.path}
                  sx={{
                    color: "white",
                    padding: "20px",
                    fontWeight: "bolder",
                    transition: "0.5s ease-in",
                  }}>
                  {item.name}
                </Link>
              </>
            );
          })}
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderRadius: "50px",
              marginLeft: "5px",
              border: "3px solid white",
              "&:hover": {
                border: "3px solid #dbdad7",
              },
            }}
            disableRipple>
            Connect Wallet
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
