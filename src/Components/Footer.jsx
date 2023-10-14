import React from 'react'
import logo from "../Images/logo.png"
import { Box, Typography,Link,Stack,IconButton } from "@mui/material";
import { Telegram,Twitter,SmartToy} from '@mui/icons-material';

const Footer = () => {
    const navMenu = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "#whitePaper",
            name: "White Paper"
        },
        {
            path: "#",
            name: "Dapp"
        },
        {
            path: "#",
            name: "Team"
        }


    ]
    const footerLinks = [
        {
            path: "#",
            name: "Graph Foundation"
        },
        {
            path: "#",
            name: "Privacy Policy"
        },
        {
            path: "#",
            name: "Forum"
        },
        {
            path: "#",
            name: "Terms of Service"
        },
        {
            path: "#",
            name: "Testnet"
        },
        {
            path: "#",
            name: "Partnership Requests"
        },


    ]
  return (
    <Box bgcolor="black" display="flex" flexDirection="column" alignItems="center" width="100%" height="100%" >
        <img src={logo} alt="footer_logo" />
        <Typography variant="h2" color="white" fontWeight="bold" fontSize={{xs:20,sm:28}} letterSpacing={1} paddingTop={4} paddingBottom={5}>Fy Metaverse</Typography>

        <Box fontWeight="light">
                {
                    navMenu.map((item, index) => {
                        return <Link component="a" underline='none' href={item.path} sx={{
                            color: 'White', padding: {xs:"0px 6px 0px 6px",xl:"0px 40px 0px 40px"}, fontWeight: "bolder", fontSize:{xs:"13px",md:"20px"}
                        }}>
                            {item.name}
                        </Link>
                    })
                }

            </Box>
        <Box fontWeight="light" pt={5} sx={{display:"flex", flexWrap:"wrap" ,webkitBoxPack:"justify",placeContent:"center space-between", gap:"32px", width:"90%" }} maxWidth="1200px">
                {
                    footerLinks.map((item, index) => {
                        return <Link component="a" underline='none' href={item.path} sx={{
                            color: 'rgb(137, 137, 137)', 
                             fontWeight: "bolder",fontSize:{xs:"10px",md:"20px"},
                        }}>
                            {item.name}
                        </Link>
                    })
                }

            </Box>
            <Stack direction="row" spacing={3} pt={3} >
                <IconButton aria-label="Language_change_button" sx={{color:"white"}} >
                    <SmartToy sx={{color:"rgb(137, 137, 137)"}}/>
                </IconButton>
                <IconButton aria-label="Language_change_button" sx={{color:"white"}} >
                    <Telegram sx={{color:"rgb(137, 137, 137)"}}/>
                </IconButton>
                <IconButton aria-label="Language_change_button" sx={{color:"white"}} >
                    <Twitter sx={{color:"rgb(137, 137, 137)"}}/>
                </IconButton>
                </Stack>
                <Typography fontSize={{xs:15,md:20}} fontWeight="lighter" variant="h3" color="rgb(137, 137, 137)" pt={10} pb={5}>copyright©FY Metaverse</Typography>
                
    </Box>
  )
}

export default Footer