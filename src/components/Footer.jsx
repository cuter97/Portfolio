import { useState } from "react"
import { FooterContainer } from '../styled-components/Footer.styled'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Footer = () => {
    const [copy, setCopy] = useState(false)

    const copyHandle = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 4000)
    }

    const mail = 'aguscastets@gmail.com'

    return (
        <FooterContainer>
            <div className="redes-icon" id='CONTACT'>
                <ul>
                    {/* Instagram */}
                    <li>
                        <a href="https://www.instagram.com/agustincastets/" target='_blank'>
                            <BsInstagram />
                        </a>
                        <span>Instagram</span>
                    </li>

                    {/* Linkedin */}
                    <li>
                        <a href="https://www.linkedin.com/in/agustin-castets-ba685a220/" target='_blank'>
                            <BsLinkedin />
                        </a>
                        <span>LinkedIn</span>
                    </li>

                    {/* github */}
                    <li>
                        <a href="https://github.com/cuter97" target='_blank'>
                            <BsGithub />
                        </a>
                        <span>GitHub</span>
                    </li>
                </ul>
            </div>

            <div className="mail-content">

                <p className="contact-me">Contact me!</p>

                <div className="mail">

                    <div className="mail-icon-content">
                        <HiMail className="mail-icon"/>
                        <p>{mail}</p>
                    </div>
                    <CopyToClipboard text={mail}>
                        <button className={!copy ? "btn-copy" : "btn-copy2"} onClick={()=>copyHandle()}>{(copy) ? 'Copy!' : 'Copy Mail'}</button>
                    </CopyToClipboard>

                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer