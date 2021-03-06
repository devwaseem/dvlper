import React from "react";

import "./404.css"

const fourzerofour = () => {
    return (
        <html lang="en-US">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"/>
                
            </head>
            <body>
                <div class="mainbox">
                    <div class="err">404</div>
                    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
                </div>
            </body>
        </html>
    )
}

export default fourzerofour