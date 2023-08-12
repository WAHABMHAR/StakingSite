import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import adSVG1 from "../../Images/advantageSVG1.png"
import adSVG2 from "../../Images/advantageSVG2.png"
import adSVG3 from "../../Images/advantageSVG3.png"

const AdvantagesSection = () => {
    return (
        <Box bgcolor="black" display="flex" flexDirection="column" alignItems="center" width="100%" height="100%" pt={10} pb={20}>

            <Typography variant="h2" color="white" fontWeight="bolder" textAlign={{xs:"center",sm:""}} lineHeight={1.4} fontSize={{xs:30,sm:40,lg:70}} width="90%" >New forms of empowerment to address</Typography>
            <Typography variant="h4" color="#dbdad7" fontWeight="light" letterSpacing={1} lineHeight={1.5} fontSize={{xs:14,sm:25}} pt={3} width="70%" textAlign="center"  >Technical problems can be solved through technical means, while the problems of liquidity and the number of players need new forms ofempowerment to solve.</Typography>
            <Typography variant="h4" color="#dbdad7" fontWeight="light" letterSpacing={1} lineHeight={1.5} fontSize={{xs:14,sm:25,}} pt={3} width="70%" textAlign="center">Judging from the current gameplay and form of blockchain games, Metaverse is a very suitable concept for empowering GameFi. And many chain games have also begun to move closer to the Metaverse.</Typography>
            <Box display="flex" flexDirection={{xs:"column",lg:"row"}} justifyContent="center" rowGap={{xs:8,lg:0}} alignItems="center" columnGap={{lg:0,xl:20}} pt={10}>
                <Box  display="flex" gap={2} flexDirection="column" alignItems="center" >
                    <Box width={{xs:"50px",sm:"70px",md:"100px"}}>
                    <img src={adSVG1} alt="svg1"  width="100%" style={{"max-width":"270px"}}/>
                    </Box>
                    <Typography variant="h6" color="white">Interoperability</Typography>
                    <Typography variant="body1" color="#dbdad7" width={{xs:"250px",sm:"300px",md:"60%",xl:"300px"}} textAlign="center">Only an efficient NFT market is needed to achieve it. Different characters can play other game worlds. Metaverse supports interoperability between NFTs and games.</Typography>
                </Box>
                <Box  display="flex" gap={2} flexDirection="column" alignItems="center">
                <Box width={{xs:"50px",sm:"70px",md:"100px"}}>
                    <img src={adSVG2} alt="svg1"  width="100%" style={{"max-width":"270px"}}/>
                    </Box>
                    <Typography variant="h6" color="white">Fluidity</Typography>
                    <Typography variant="body1" color="#dbdad7" width={{xs:"250px",sm:"300px",md:"60%",xl:"300px"}} textAlign="center">In the Metaverse, after achieving interoperability, we will look at liquidity from a holistic perspective. By using the original NFT assets, we can easily participate in brand new games.</Typography>
                </Box>
                <Box  display="flex" gap={2} flexDirection="column" alignItems="center">
                <Box width={{xs:"50px",sm:"70px",md:"100px"}}>
                    <img src={adSVG3} alt="svg1"  width="100%" style={{"max-width":"270px"}}/>
                    </Box>
                    <Typography variant="h6" color="white">Variety of game forms</Typography>
                    <Typography variant="body1" color="#dbdad7" width={{xs:"250px",sm:"300px",md:"60%",xl:"300px"}}  textAlign="center">Web3.0 is an open world, and the vastness of the metaverse can fully support game developers to build various games on it to provide players with a rich gaming experience.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AdvantagesSection