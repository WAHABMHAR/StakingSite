import { Box, Typography } from '@mui/material'
import React from 'react'
import IntroBanner from "../../Images/introBanner.png";
import IntroIamge1 from "../../Images/introImage1.png";
import IntroIamge2 from "../../Images/introImage2.png";
import IntroIamge3 from "../../Images/introIMage3.png";
import IntroIamge4 from "../../Images/introImage4.png";

const IntroSection = () => {
  return (
    <Box
    sx={{
        width: '100%',
        height: '100%',
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        zIndex: "-1",
        position: "relative",
        backgroundImage: `url(${IntroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: "black",
    }}
>
  <Typography variant="h1" color="white" fontWeight="bold" fontSize={{xs:30,md:50,xl:70}} paddingTop={{xs:5,xl:10}} paddingBottom={{xs:1,xl:3}}>Who are we</Typography>
  <Typography variant="h5" color="white" width={{xs:"250px",sm:"90%"}}  letterSpacing={1} lineHeight={{xs:1.4,xl:1.8}} textAlign="center" fontSize={{xs:15,sm:20,md:25,xl:40}} height="300px">A new generation of Defi open encryption ecosystem jointly created by a group of geeks pursing extream fredom and web3 community</Typography>
  <Box width={{xs:"50px",lg:"80px"}} mt={{xs:-8,md:0}}> 
  <img src={IntroIamge4} alt="sqaure_image" width="100%" style={{"max-width":"250px"}}/>
  </Box>
  <Typography variant="h6" color="white" fontSize={{xs:17,md:25,xl:30}} pt={2}>The world of Fy-Metaverse</Typography>
  <Typography variant="h6" color="white" fontSize={{xs:17,md:25,xl:30}} textAlign={{xs:"center",xl:""}} width={{xs:"90%"}} pb={5}>Everone has their own virtual image [2025 plan], looking for another self in the world of metaverse</Typography>
  <Box display="flex" flexDirection={{xs:"column",sm:"row"}} alignItems={{xs:"center",sm:""}}  justifyContent={{sm:"center"}} >
    <Box width={{sm:"150px",md:"250px"}}>
    <img src={IntroIamge1} alt="sqaure_image" width="100%" style={{"max-width":"250px"}}/>
    </Box>
    <Box pb={{xs:2}} pt={{xs:2}} mr={{sm:2}} ml={{sm:2}} width={{sm:"150px",md:"250px"}}>
    <img src={IntroIamge2} alt="sqaure_image" width="100%" style={{"max-width":"250px"}}/>
    </Box>
    <Box width={{sm:"150px",md:"250px"}}>
    <img src={IntroIamge3} alt="sqaure_image" width="100%" style={{"max-width":"250px"}}/>
    </Box>

  </Box>
  {/* <img src={IntroIamge2} alt="Image2" /> */}
  <Box marginBottom={20}></Box>

    </Box>
  )
}

export default IntroSection