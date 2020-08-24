/* @jsx jsx */
import {jsx} from "theme-ui"
import {Text} from "theme-ui"
import React, { useState, useRef, createRef } from "react"
// const TextScramble = require('./scramble')
import TextScramble from './scramble'

class ScrambleText extends React.Component {

    constructor(props){
        super(props)
        this.textRef = React.createRef();
        this.textScramble = new TextScramble(undefined);
    }


    componentDidMount(){
        this.textScramble = new TextScramble(this.textRef.current);
        if(this.props.to.constructor.name !== "Array") {
            this.textScramble.setText(this.props.to)    
        }else{
            let phrases = this.props.to
            let counter = 0
            const next = () => {
            this.textScramble.setText(phrases[counter]).then(() => {
                setTimeout(next, 800)
            })
            counter = (counter + 1) % phrases.length
            }
    
            next()
        }
    }

    render() {
        return(
            <Text sx={this.props.sx} ref={this.textRef} onLoad={this.start}>
            {this.props.from}
        </Text>
        )
    }
}

export default ScrambleText