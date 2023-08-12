import { Box, Stack, Typography, Button, Grid } from '@mui/material'
import safety from "../../Images/safetyIMG.png"
import Fast from "../../Images/fastIMG.png"
import Protocol from "../../Images/protocolIMG.png"
import threshold from "../../Images/thresholdIMG.png"
import Decentralized from "../../Images/DecentralizedIMG.png"
import governance from "../../Images/governanceIMG.png"
import smallBanner from "../../Images/smallBanner.png"
import logos from "../../Images/logosImages.png"
import block1 from "../../Images/PartnerBlocks/partnerBlock1.png"
import block2 from "../../Images/PartnerBlocks/partnerBlock2.png"
import block3 from "../../Images/PartnerBlocks/partnerBlock3.png"
import block4 from "../../Images/PartnerBlocks/partnerBlock4.png"
import block5 from "../../Images/PartnerBlocks/partnerBlock5.png"
import block6 from "../../Images/PartnerBlocks/partnerBlock6.png"
import block7 from "../../Images/PartnerBlocks/partnerBlock7.png"
import block8 from "../../Images/PartnerBlocks/partnerBlock8.png"
import block9 from "../../Images/PartnerBlocks/partnerBlock9.png"
import block10 from "../../Images/PartnerBlocks/partnerBlock10.png"
import block11 from "../../Images/PartnerBlocks/partnerBlock11.png"
import block12 from "../../Images/PartnerBlocks/partnerBlock12.png"
import React from 'react'

const AdvantageSection = () => {
    return (<>    <Box bgcolor="black" display="flex" flexDirection="column" alignItems="center" width="100%" height="100%" pb={5}>
        <Typography variant="h2" color="white" fontWeight="bolder" fontSize={{xs:35,md:70}}>Advantage</Typography>
        <Box display="flex" justifyContent="center" flexDirection={{xs:"column",lg:"row"}} alignItems="center" rowGap={5} columnGap={{lg:15}} pt={10}>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
            <Box width={{xs:"80px",md:"100px"}}>
                <img src={safety} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>

                <Typography variant="h6" color="white">Safety</Typography>
                <Typography variant="body1" color="#dbdad7" width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}} textAlign="center">Multi-signatures and BOR tunnels provide double assurance of assets.</Typography>
            </Box>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
                <Box width={{xs:"80px",md:"100px"}}>
                <img src={Fast} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>
                <Typography variant="h6" color="white">Fast</Typography>
                <Typography variant="body1" color="#dbdad7" width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}} textAlign="center">Tokens can be minted/redeemed in minutes.</Typography>
            </Box>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
            <Box width={{xs:"80px",md:"100px"}}>
                <img src={Protocol} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>
                <Typography variant="h6" color="white">Protocol</Typography>
                <Typography variant="body1" color="#dbdad7" width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}} textAlign="center">ProtocolUser-friendly, anyone can freely use the FY DAO protocol.</Typography>
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" flexDirection={{xs:"column",lg:"row"}} alignItems="center" rowGap={5} columnGap={{lg:15}} pt={10}>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
            <Box width={{xs:"80px",md:"100px"}}>
                <img src={threshold} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>

                <Typography variant="h6" color="white">No threshold</Typography>
                <Typography variant="body1" color="#dbdad7" width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}} textAlign="center">Non-ERC20 tokens can be easily converted into Tokens with one click.</Typography>
            </Box>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
            <Box width={{xs:"80px",md:"100px"}}>
                <img src={Decentralized} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>
            
                <Typography variant="h6" color="white">Decentralized</Typography>
                <Typography variant="body1" color="#dbdad7" width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}}  textAlign="center">FY is deployed on Binance chain and operates in a fully decentralized manner.</Typography>
            </Box>
            <Box display="flex" gap={2} flexDirection="column" alignItems="center">
            <Box width={{xs:"80px",md:"100px"}}>
                <img src={governance} alt="svg1" width="100%" style={{"max-width":"100px"}} />
                </Box>
                <Typography variant="h6" color="white">DAO governance</Typography>
                <Typography variant="body1" color="#dbdad7"width={{xs:"80%",lg:"300px"}} letterSpacing={1} fontSize={{xs:"15x",sm:"25px"}} textAlign="center">Community members are the real controllers of FY.</Typography>
            </Box>
        </Box>
        <Box pt={{xs:10,sm:15}} width={{xs:"250px",sm:"470px",md:"700px",lg:"1000px"}}>
                <img src={logos} alt="svg1" width="100%" style={{"max-width":"1000px"}} />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" pt={10} >
            <Typography variant="h2" color="white" fontSize={{xs:25,md:50}} letterSpacing={1} fontWeight="bolder">FY Metaverse 2.0</Typography>
            <Typography variant="h2" color="white" fontSize={{xs:20,md:50}}letterSpacing={1} textAlign={{xs:"center"}} fontWeight="bolder">Support more public chains and tokens</Typography>
            <Typography variant="h2" color="#dbdad7" fontSize={{xs:14,sm:20}}  letterSpacing={1} pt={1} textAlign={{xs:"center"}}fontWeight="bolder">More ecosystems will be added in the future to promote sustainable development</Typography>

        </Box>
    </Box>
        <Box
            width="100%"
            height="200px"
            sx={{
                display: "flex",
                flexDirection:{xs:"column",md:"row"},
                justifyContent: "space-around",
                alignItems: "center",
                backgroundImage: `url(${smallBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: "black",
            }}
        >
            <Typography variant="body1" color="white" fontSize={{xs:30,md:60}} fontWeight="bolder" >LEARN MORE</Typography>
            <Box display="flex"  alignItems="center">
                <Typography variant="h4" color="white" fontWeight="bolder" fontSize={20} paddingRight={3}>GitBook</Typography>
                <Button variant="contained" sx={{ bgcolor: "#446EFF", borderRadius: "20px", fontWeight: "light", textTransform: "capitalize" }}>
                    Fy Metaverse
                </Button>
            </Box>
        </Box>
        {/* <///////partner Time */}
        <Box bgcolor="black"   width="100%" height="100%">
        <Box bgcolor="black" display="Block"  width="100%" height="100%" maxWidth="1200px" sx={{boxSizing:"border-box",marginLeft:"auto",marginRight:"auto"}} pt={5} pb={20} 
        >
            <Typography variant="h2" color="white" fontWeight="bolder" fontSize={{xs:30,sm:50}} letterSpacing={1} textAlign="center" pb={10}>Partner</Typography>
        <Grid container spacing={3} columnSpacing={-5} pl={4}>
            <Grid item lg={3} xs={12} sm={6} md={4} alignContent="center">
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }



                }}>
                    <img src={block1} alt="block1" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block2} alt="block1" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block3} alt="block1" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block4} alt="block1" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block5} alt="block5" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block6} alt="block6" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block7} alt="block7" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block8} alt="block8" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block9} alt="block9" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block10} alt="block10" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block11} alt="block11" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} md={4}>
                <Box display="flex" width={{xs:"220px",sm:"250px"}} height="80px" borderRadius="10px" border="1px solid white" sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        transition:"0.2s",
                        "&:hover":{
                            background: 'linear-gradient(to right, #00CD60, #7FCEDF,#F1C0AA,#F349FF)',
                        }
                }}>
                    <img src={block12} alt="block12" style={{"max-width":"150px","width":"100%"}}/>
                </Box>
            </Grid>
          
        </Grid>
        </Box>
        </Box>


    </>

    )
}

export default AdvantageSection
