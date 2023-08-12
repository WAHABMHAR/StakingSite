import React from 'react'
import whitepaperIMG from "../../Images/whitePaperBanner.png"
import paperIMG1 from "../../Images/paperIMG1.png"
import arrowRight from "../../Images/arrowRight.png"

import { Box, Typography, Button } from '@mui/material'

const WhitePaper = () => {
  return (<>
    <Box
      sx={{
        width: '100%',
        height: '1000px',
        zIndex: "-1",
        position: "relative",
        backgroundImage: `url(${whitepaperIMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: "black",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"


      }}
    >
      <Typography variant="h2" color="white" fontWeight="bolder" fontSize={{ xs: 18, sm: 30, md: 40, lg: 50, xl: 60 }} paddingTop={{ xs: 2, xl: 4 }} paddingBottom={2}>FY Metaverse</Typography>
      <Typography variant="h2" color="white" textAlign="center" fontSize={{ xs: 12, sm: 20, md: 30 }} lineHeight={1.5} width={{ xs: "90%", sm: "80%", xl: "70%" }} mb={5} letterSpacing={1}>The ultimate goal of the FY Metaverse network is to revolutionize the data verification and storage process by leveraging decentralized storage providers without the need for trust.</Typography>
      <Button variant="contained" sx={{
        color: "white", bgcolor: 'rgba(0,0,0,0.4);', borderRadius: "50px", fontSize: "15px", border: "1px solid #dbdad7", textDecoration: "none", textTransform: "capitalize",
        "&:hover": {
          bgcolor: 'transparent'
        }
      }} disableRipple>
        Download the White Paper
      </Button>
    </Box>
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: "black",
        alignContent: 'center',

      }}
      pt={10}
    >
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box width="260px" height="500px" border="1px solid white" borderRadius="20px" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
          <Box
            width={{ xs: "120px", sm: "170px", md: "30px" }}>
            <img src={paperIMG1} alt="banner_logo" width="100%" style={{ "max-width": "50px" }} />
          </Box>
          <Typography variant="h2" color="white" textAlign="center" fontSize={20} width="90%" lineHeight={1.5}>Data Sources e.g Blockchain and Dapps</Typography>
        </Box>
        <Box width="800px" height="300px" mt={5} ml={15}>
          <Box display="flex">
            <Box width="60%" height="300px" border="1px solid white" borderRadius="20px" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
              <img src={paperIMG1} alt="banner_logo" width="100%" style={{ "max-width": "50px" }} />
              <Typography variant="h5" color="white">Storage Pool</Typography>
              <Box display="flex" alignItems="center" >
                <Box width="320px" paddingRight= "90px">
                <img src={arrowRight} alt="banner_logo" width="100%" style={{ maxWidth:"350px" }} />
                </Box>
                <Box bgcolor="#1E1D2F" padding="10px 30px" >
                  <Typography variant="body1" color="white">Uploader</Typography>
                </Box>
                <Box width="320px" paddingRight= "90px">
                <img src={arrowRight} alt="banner_logo" width="100%" style={{ maxWidth:"350px" }} />
                </Box>
              </Box>

            </Box>
            <Box width="40%" height="300px" border="1px solid white" borderRadius="20px" ml={15}>

            </Box>

          </Box>

          <Box width="100%" height="120px" mt={5} border="1px solid white" borderRadius="20px">

          </Box>
        </Box>

      </Box>

    </Box>

  </>

  )
}

export default WhitePaper