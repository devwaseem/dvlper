/* @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import {Heading,Text,Image,Flex} from "theme-ui"
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
    textAlign:"center",
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

function ProjectContent({title,subtitle,images,icon,github,appstore,playstore,producthuntId,producthunt,video,isIpad,titleUrl,techUsed}){          
    let appstoreLink,githubLink,playstoreLink,producthuntLink
    if(appstore){
        appstoreLink = <a href={appstore} target="_blank"><Image src="/appstorebutton.svg" alt="download on app store" sx={appStoreButtonStyle}  /></a>
    }
    if(github){
        githubLink = <a href={github} target="_blank"><Image src="/githubbutton.png" alt="view on github" sx={buttonStyle}  /> </a>
    }
    if(playstore){
        playstoreLink = <a href={playstore} target="_blank"><Image src="/playstorebutton.png" alt="download on playstore store" sx={buttonStyle}  /></a>
    }
    if(producthunt && producthuntId){
        producthuntLink = <div><p sx={{height:30,width:50}}/><a href={producthunt} target="_blank"><img src={"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id="+producthuntId+"&theme=dark"} alt="Producthunt button" /></a></div>
    }
    return (
        <Flex sx={{flexDirection:"column",alignItems:"center"}}>
            {icon && <Image src={icon} sx={{width:120,height:120,mt:20, borderRadius:12}}/> }
            {titleUrl && 
                <a href={titleUrl}><Heading variant="styles.h3" sx={headingStyle}>{title}</Heading></a> 
            }
            {!titleUrl && 
                <Heading variant="styles.h3" sx={headingStyle}>{title}</Heading>
             }
            {subtitle && 
            <Text variant="styles.p" sx={textStyle}> {subtitle} </Text>
            }
            {techUsed && 
            <>
                <Text variant="styles.h6" sx={{mt:4}}>Technolgies Used: </Text>
                <Text variant="styles.p" sx={textStyle}> {techUsed} </Text>
            </>
            }
            { !isIpad && images && <Flex sx={{flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:`wrap`,mt:4}}>
                {images.map((image) =>  <Zoom><Image sx={{maxWidth:250,maxHeight:500,margin:4}} src={image} key={image}/></Zoom> )}
            </Flex>}
            {isIpad && images &&
            <Flex sx={{flexDirection:"row",alignItems:"center",justifyContent:"center",flexWrap:`wrap`,mt:4}}>
            <Zoom>
                <Image sx={{height:[200,450,700],margin:[1,2,4],objectFit:'contain'}} src={images[0]} key={images[0]}/>
            </Zoom>
            </Flex>
            }
            {video && 
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url={video}
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