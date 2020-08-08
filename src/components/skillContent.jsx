/* @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import {Text,Image,Flex,Box} from "theme-ui"
import Zoom from 'react-medium-image-zoom'

const animatorProps = {
    "data-sal":"slide-up",
    "data-sal-delay":"300",
    "data-sal-easing":"ease"
}
export default ({name,icon})=>{
    return(
        <Flex sx={{m:1}}>
            <Zoom zoomMargin={40}>
                <Box
                    {...animatorProps}
                    sx={{width:150,borderRadius:20,paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:2}}
                    color='white'
                    >
                    <Image sx={{width:60,height:60,display:`block`,margin:`0 auto`,objectFit:`contain`}} src={icon} />
                    <Text variant="styles.h6" sx={{textAlign:`center`,mt:2}}>{name}</Text>
                </Box>
            </Zoom>
        </Flex>
    )
}