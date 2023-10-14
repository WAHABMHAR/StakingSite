import React from "react";
import whitepaperIMG from "../../Images/whitePaperBanner.png";
import paperIMG1 from "../../Images/paperIMG1.png";
import arrowRight from "../../Images/arrowRight.png";
import arrowLeft from "../../Images/arrowLeft (1).png";
import arrowUp from "../../Images/arrowUp.png";
import consumer from "../../Images/ConsumerImg.png";
import fyBlockchain from "../../Images/Fy Blockchain.png";
import DefiImg from "../../Images/DefiImg.png";

import { Box, Typography, Button } from "@mui/material";

const WhitePaper = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", xl: "1000px" },
          zIndex: "-1",
          position: "relative",
          backgroundImage: `url(${whitepaperIMG})`,
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
          FY Metaverse
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
          The ultimate goal of the FY Metaverse network is to revolutionize the
          data verification and storage process by leveraging decentralized
          storage providers without the need for trust.
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "rgba(0,0,0,0.4);",
            borderRadius: "50px",
            fontSize: "15px",
            border: "1px solid #dbdad7",
            textDecoration: "none",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          disableRipple>
          Download the White Paper
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          alignContent: "center",
        }}
        pt={10}>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          display={{ xs: "none", xl: "flex" }}>
          <Box
            width="260px"
            height="500px"
            border="1px solid white"
            borderRadius="20px"
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column">
            <Box width={{ xs: "120px", sm: "170px", md: "30px" }}>
              <img
                src={paperIMG1}
                alt="banner_logo"
                width="100%"
                style={{ "max-width": "50px" }}
              />
            </Box>
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              fontSize={20}
              width="90%"
              lineHeight={1.5}>
              Data Sources e.g Blockchain and Dapps
            </Typography>
          </Box>
          <Box width="800px" height="300px" mt={5} ml={15}>
            <Box display="flex">
              <Box
                width="60%"
                height="300px"
                border="1px solid white"
                borderRadius="20px"
                justifyContent="center"
                alignItems="center"
                display="flex"
                flexDirection="column">
                <img
                  src={paperIMG1}
                  alt="banner_logo"
                  width="100%"
                  style={{ "max-width": "50px" }}
                />
                <Typography variant="h5" color="white">
                  Storage Pool
                </Typography>
                <Box display="flex" alignItems="center">
                  <Box width="320px" paddingRight="90px">
                    <img
                      src={arrowRight}
                      alt="banner_logo"
                      width="100%"
                      style={{ maxWidth: "350px" }}
                    />
                  </Box>
                  <Box bgcolor="#1E1D2F" padding="10px 30px">
                    <Typography variant="body1" color="white">
                      Uploader
                    </Typography>
                  </Box>
                  <Box width="320px" paddingRight="90px">
                    <img
                      src={arrowRight}
                      alt="banner_logo"
                      width="100%"
                      style={{ maxWidth: "350px" }}
                    />
                  </Box>
                </Box>
                <Box
                  paddingTop={5}
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center">
                  <Box width="320px">
                    <img
                      src={arrowRight}
                      alt="banner_logo"
                      width="100%"
                      style={{ maxWidth: "150px", marginLeft: "168px" }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box position="absolute" left="51%">
                      <img
                        src={arrowUp}
                        alt=" up-arrow"
                        style={{ marginTop: "-60px" }}
                      />
                    </Box>
                    <Box bgcolor="#1E1D2F" padding="10px 30px">
                      <Typography variant="body1" color="white">
                        Validator
                      </Typography>
                    </Box>
                    <Box bgcolor="#1E1D2F" padding="10px 30px">
                      <Typography variant="body1" color="white">
                        Validator
                      </Typography>
                    </Box>
                    <Box bgcolor="#1E1D2F" padding="10px 30px">
                      <Typography variant="body1" color="white">
                        Validator
                      </Typography>
                    </Box>
                  </Box>
                  <Box width="320px">
                    <img
                      src={arrowLeft}
                      alt="banner_logo"
                      width="100%"
                      style={{ maxWidth: "150px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                width="40%"
                height="300px"
                border="1px solid white"
                borderRadius="20px"
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                textAlign={"center"}
                ml={15}>
                <Typography
                  variant="h3"
                  color="white"
                  fontFamily={"Poppins"}
                  fontSize={"18px"}
                  fontWeight="bold">
                  Web3 Storage
                  <br /> Provider e.g
                  <br /> Arweave
                </Typography>
              </Box>
            </Box>

            <Box
              width="100%"
              height="120px"
              mt={5}
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              gap={3}
              border="1px solid white"
              borderRadius="20px">
              {/* <Box> */}
              <img src={consumer} />

              <Typography
                variant="h4"
                color="white"
                fontFamily={"Poppins"}
                fontWeight="normal"
                fontSize="20px">
                Data Consumers
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          fontFamily={"Poppins"}
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          backgroundColor="black"
          flexDirection="column"
          height="100%"
          textAlign={"center"}
          width={"100%"}
          gap={4}
          pt={10}>
          <Typography
            variant="h1"
            color="white"
            fontWeight={600}
            fontSize={{ xs: "30px", xl: "60px" }}>
            Bussiness Logic
          </Typography>
          <Typography
            variant="p"
            color="white"
            width={{ xs: "80%", xl: "50%" }}
            fontSize={"18px"}
            lineHeight={2}>
            The ultimate goal of the FY Metaverse network is to revolutionize
            the data verification and storage process by leveraging
            decentralized storage providers without the need for trust.
            Uploaders collect data from various sources and store them on
            decentralized providers. Afterwards, validators on the network
            validate the data by submitting it to the storage pool. Data
            consumers can then leverage the verified data to build decentralized
            applications without trusting FY Metaverse or any intermediaries.
          </Typography>
          <Typography
            variant="p"
            color="white"
            width={{ xs: "80%", xl: "50%" }}
            fontSize={"18px"}
            lineHeight={2}>
            Network nodes are responsible for validating and archiving data
            sources assigned to specific storage pools. Protocol nodes retrieve
            data from sources and submit it to storage pools for validation by
            other participants. Every participant has the right to vote on the
            accuracy of the data. Depending on the outcome of the voting
            process, data is either archived or discarded, and uploaders of data
            are rewarded for their contribution to the network.
          </Typography>
          <Box maxWidth={{ xs: "200px", xl: "350px" }}>
            <img
              src={fyBlockchain}
              alt="imgFy"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Typography
            variant="h1"
            color="white"
            fontWeight={600}
            fontSize={{ xs: "35px", xl: "50px" }}>
            FY Blockchain Lab
          </Typography>
          <Typography
            variant="p"
            color="white"
            width={{ xs: "80%", xl: "50%" }}
            fontSize={"18px"}
            lineHeight={2}>
            The FY blockchain laboratory is based on the technology of the
            Institute of Network Behavior of the University of Hong Kong
            Established in conjunction with more than ten well-known global
            blockchain companies, it is oriented towards blockchain innovative
            applications and product development, and is mainly composed of
            experts from the Artificial Intelligence Research Institute of the
            University of Hong Kong. Research on security, digital renminbi and
            other fields
          </Typography>
          <Box xmaxWidth={{ xs: "200px", xl: "350px" }}>
            <img
              src={DefiImg}
              alt="Image_Defi"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Typography
            variant="p"
            color="white"
            width={{ xs: "80%", xl: "50%" }}
            fontSize={"18px"}
            lineHeight={2}
            pb={10}>
            Defi University is affiliated with Defi International Capital
            (Singapore). It is an open decentralized financial technology
            education brand. The members of its brand creation team are all
            experienced practitioners. Good at researching Defi, blockchain
            games, metaverse application investment, research, and teaching,
            takes the popularization of Defi knowledge as the value, is driven
            by performance and profit-driven, advocates the investment
            philosophy of pursuing long-term growth, has a complete Defi
            knowledge module system and strict risk management Management
            ability and leading international vision.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WhitePaper;
