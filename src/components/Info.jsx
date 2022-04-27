import React from 'react'
import { InfoContainer } from '../styled-components/Info.styled'
import pdf from '../pdf/curriculum.pdf'
import  { VscFilePdf } from 'react-icons/vsc'
const Info = () => {
    return (
        <InfoContainer>
            <h2>About Me</h2>
            <p>
                Hi, I'm Agustin. I’m a junior front-end developer looking 
                for a new role in an exciting company. I focus on writing 
                accessible HTML, using modern CSS practices and writing clean JavaScript. 
                When writing JavaScript code, I mostly use React, but I can adapt to whatever 
                tools are required.
            </p>
            <h3>Formation</h3>
            <p>
                Certified by coderhouse academy of react.js, javascript and web development. 
                I am currently studying electronic engineering.
            </p>
            <div>
                <p>
                    If you look more information check my curriculum :
                </p>
            </div>
                <a className='pdf' href={pdf} target="_blank"><VscFilePdf /></a>
            
            
        </InfoContainer>
    )
}

export default Info