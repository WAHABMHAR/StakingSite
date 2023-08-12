import { Box, Typography, Stack, Link, IconButton, Button, AppBar, Toolbar, Drawer, Divider } from '@mui/material'
import Logo from "../../Images/logo.png"
import React, { useState } from 'react'
import { Language, Telegram, Twitter, GitHub, SmartToy, MoreHoriz, AttachFile, Menu, Clear } from '@mui/icons-material';
import ImageBanner from "../../Images/banner.png";
import bannerLogo from '../../Images/bannerLogo.png';

const Header = () => {
    return (<>
        {/* ///////////responsive */}
        {/* //////////////////////////////Banner SEction///////////////////// */}
        <Box
            sx={{
                width: '100%',
                height: '100%',
                zIndex: "-1",
                position: "relative",
                backgroundImage: `url(${ImageBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: "black",
                alignContent: "center"
            }}
        >
            <Box display="flex" flexDirection="column" alignItems="center" paddingTop="190px" >
                <Box width={{xs:"120px",sm:"170px",md:"270px"}}>
                <img src={bannerLogo} alt="banner_logo" width="100%" style={{"max-width":"270px"}} />
                </Box>
                <Typography variant="h2" color="white" fontWeight="bolder" fontSize={{xs:25,sm:40,xl:60}} paddingTop={{xs:2,xl:4}} paddingBottom={2}>FY Metaverse</Typography>
                <Typography variant="h5" color="white" letterSpacing={1} paddingBottom={4} fontSize={{xs:15,sm:20,xl:40}} width={{xs:"200px",sm:"500px",md:"100%"}} textAlign={{xs:"center"}}>Committed to creating a new generation of Defi open encryption ecosystem</Typography>
                <Stack direction={{xs:"column",sm:"row"}} spacing={4}>
                    <Button variant="contained" sx={{
                        color: "white", bgcolor: 'rgba(0,0,0,0.4);', borderRadius: "50px", fontSize: "15px", border: "1px solid #dbdad7", textDecoration: "none", textTransform: "capitalize",
                        "&:hover": {
                            bgcolor: 'transparent'
                        }
                    }} disableRipple>
                        Download the White Paper
                    </Button>
                    <Button variant="contained" sx={{
                        color: "white", bgcolor: 'rgba(0,0,0,0.4);', borderRadius: "50px", border: "1px solid #dbdad7", textDecoration: "none", textTransform: "capitalize", fontSize: "15px", transition: "0.5s ease-in",
                        "&:hover": {
                            bgcolor: 'transparent'
                        }
                    }} disableRipple>
                        Dapp
                    </Button>
                </Stack>
                <Stack direction="row" spacing={-1} pt={5} mb={30}>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <Telegram sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <Twitter sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <GitHub sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <SmartToy sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <AttachFile sx={{ color: "#dbdad7", rotate: "330deg" }} />
                    </IconButton>
                    <IconButton aria-label="Language_change_button" sx={{ color: "white" }} >
                        <MoreHoriz sx={{ color: "#dbdad7" }} />
                    </IconButton>
                </Stack>
            </Box >


        </Box>
    </>
    )
}

export default Header