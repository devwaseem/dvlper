import React from "react"
import {Heading,Text,Image,Flex,Link} from "theme-ui"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const headingStyle = {
    textAlign:"center",
    mt:20,
    mb:20
}

const textStyle = {
    minWidth:300,
    maxWidth:600,
    textAlign:"center"
}

const appStoreButtonStyle = {
    width:160,
    height:50
}

const playStoreButtonStyle = {
    maxWidth:160,
    minWidth:80,
    maxHeight:60,
    minHeight:30,
}

const buttonStyle = {
    maxWidth:160,
    minWidth:80,
    maxHeight:60,
    minHeight:30,
    mt:20,
    mb:20,
    transition: `transform`,
    "&:hover": {
        boxShadow: `10px 10px 34px 0px rgba(0,0,0,0.25)`,
        position:`relative`,
        left:-10,
        top:-10,
    },
    
    
}

function ProjectContent({title,subtitle,images,icon,github,appstore,playstore}){          
    let appstoreLink,githubLink,playstoreLink
    if(appstore){
        appstoreLink = <Link href={appstore} ><Image src="/appstorebutton.png" alt="download on app store" sx={appStoreButtonStyle}  /></Link>
    }
    if(github){
        githubLink = <Link href={github} ><Image src="/githubbutton.png" alt="view on github" sx={buttonStyle}  /> </Link>
    }
    if(playstore){
        playstoreLink = <Link href={playstore} ><Image src="/playstorebutton.png" alt="download on playstore store" sx={buttonStyle}  /></Link>
    }
    return (
        <Flex sx={{flexDirection:"column",alignItems:"center"}}>
            {icon && <Image src={icon} sx={{width:100,height:100,mt:20, borderRadius:12}}/> }
            <Heading variant="styles.h3" sx={headingStyle}>{title}</Heading>
            <Text variant="styles.p" sx={textStyle}>
                {subtitle}
            </Text>
            <Flex sx={{flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:`wrap`}}>
                {images.map((image) =>  <Zoom><Image sx={{maxWidth:250,maxHeight:500,margin:4}} src={image} key={image}/></Zoom> )}
            </Flex>
            {appstoreLink}
            {githubLink}
            {playstoreLink}
            
        </Flex>
    )
}

export default ProjectContent