import { Box, Button, Typography } from "@mui/material";
import React from "react";
import gamefiIMG from "../../Images/gamefiIMG.png";
import game1 from "../../Images/game_1.png";
import game2 from "../../Images/game_2.png";
import game3 from "../../Images/game_3.png";
import game4 from "../../Images/game_4.png";
import game5 from "../../Images/game_5.png";
import game6 from "../../Images/game_6.png";

const Gamefi = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", md: "1000px" },
          zIndex: "-1",
          position: "relative",
          backgroundImage: `url(${gamefiIMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h2"
          color="white"
          fontWeight="bolder"
          fontSize={{ xs: 18, sm: 30, md: 40, lg: 50, xl: 60 }}
          paddingTop={{ xs: 2, xl: 4 }}
          paddingBottom={2}>
          FY-Metaverse Gamefi
        </Typography>
        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          fontSize={{ xs: 12, sm: 20, md: 30 }}
          lineHeight={1.5}
          width={{ xs: "90%", sm: "80%", xl: "70%" }}
          mb={5}
          letterSpacing={1}>
          Create a new era of Web3 game e-commerce
        </Typography>
      </Box>

      <Box
        display={"flex"}
        pt={10}
        pb={10}
        width={"100%"}
        height={"100%"}
        justifyContent="center"
        alignItems="center"
        bgcolor={"black"}
        flexDirection={"column"}>
        <Typography
          variant="h1"
          color="White"
          fontWeight={600}
          fontFamily={"Poppins"}
          fontSize={{ xs: 16, sm: 30, md: 40, lg: 50, xl: 60 }}
          textAlign="center">
          FY-Metaverse Zero Innovation <br /> Ecology/X to earn
        </Typography>
        <br />
        <Typography
          variant="p"
          color="white"
          width={{ xs: "80%", xl: "50%" }}
          fontSize={{ xs: 15, sm: 18, md: 20 }}
          lineHeight={2}
          textAlign={"center"}
          pb={10}>
          Defi University is affiliated with Defi International Capital
          (Singapore). It is an open decentralized financial technology
          education brand. The members of its brand creation team are all
          experienced practitioners. Good at researching Defi, blockchain games,
          metaverse application investment, research, and teaching, takes the
          popularization of Defi knowledge as the value, is driven by
          performance and profit-driven, advocates the investment philosophy of
          pursuing long-term growth, has a complete Defi knowledge module system
          and strict risk management Management ability and leading
          international vision.
        </Typography>
        <br />

        <Typography
          variant="h1"
          color="White"
          fontWeight={600}
          fontFamily={"Poppins"}
          fontSize={{ xs: 16, sm: 30, md: 40, lg: 50, xl: 60 }}
          pb={5}
          textAlign="center">
          FoodFi/SportsFi/StudyFi/GameFi
        </Typography>
        <Box
          display={"flex"}
          width={{ xs: "80%", lg: "60%" }}
          justifyContent={"center"}
          gap={{ xs: 2, md: 4 }}
          flexDirection={"column"}>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 2, md: 4 }}
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center">
            <Box>
              <img
                src={game1}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box>
              <img
                src={game2}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 2, md: 4 }}
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center">
            <Box>
              <img
                src={game3}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box>
              <img
                src={game4}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ xs: 2, md: 4 }}
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center">
            <Box>
              <img
                src={game5}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box>
              <img
                src={game6}
                alt="gamefiImges"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Gamefi;
