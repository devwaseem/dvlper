import React from "react"
import {Heading,Text,Image,Flex,Link} from "theme-ui"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactPlayer from 'react-player/youtube'

import "./projectContent.css"

const headingStyle = {
    textAlign:"center",
    mt:20,
    mb:20
}

const textStyle = {
    minWidth:320,
    maxWidth:800,
    textAlign:"center"
}

const appStoreButtonStyle = {
    width:180,
    height:60,
    mt:12
}

const buttonStyle = {
    maxWidth:180,
    minWidth:80,
    maxHeight:60,
    minHeight:30,
    mt:12
}

function ProjectContent({title,subtitle,images,icon,github,appstore,playstore,producthuntId,producthunt,video}){          
    let appstoreLink,githubLink,playstoreLink,producthuntLink
    if(appstore){
        appstoreLink = <Link href={appstore} ><Image src="/appstorebutton.svg" alt="download on app store" sx={appStoreButtonStyle}  /></Link>
    }
    if(github){
        githubLink = <Link href={github} ><Image src="/githubbutton.png" alt="view on github" sx={buttonStyle}  /> </Link>
    }
    if(playstore){
        playstoreLink = <Link href={playstore} ><Image src="/playstorebutton.png" alt="download on playstore store" sx={buttonStyle}  /></Link>
    }
    if(producthunt && producthuntId){
        producthuntLink = <div><p sx={{height:50,width:50}}/><Link href={producthunt} ><img src={"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id="+producthuntId+"&theme=dark"} alt="Producthunt button" /></Link></div>
    }
    return (
        <Flex sx={{flexDirection:"column",alignItems:"center"}}>
            {icon && <Image src={icon} sx={{width:120,height:120,mt:20, borderRadius:12}}/> }
            <Heading variant="styles.h3" sx={headingStyle}>{title}</Heading>
            <Text variant="styles.p" sx={textStyle}>
                {subtitle}
            </Text>
            <Flex sx={{flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:`wrap`,mt:4}}>
                {images.map((image) =>  <Zoom><Image sx={{maxWidth:250,maxHeight:500,margin:4}} src={image} key={image}/></Zoom> )}
            </Flex>
            {video && 
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url={"https://youtu.be/34MJTPKVjUI"}
                    width="100%" 
                    height="100%"
                    playsinline={true}
                    pip={true}
                    controls={true}
                    />
                </div>
            }
            {producthuntLink}
            {appstoreLink}
            {playstoreLink}
            {githubLink}    
            
        </Flex>
    )
}

export default ProjectContent