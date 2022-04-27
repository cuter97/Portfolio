import { HeaderContainer, TextContainer } from "../styled-components/Header.styled"
import { withTheme } from "styled-components"
import Img from "../imagenes/header-img.png"

const Header = () => {
    return (
        <HeaderContainer>
            <TextContainer className="text-container">
                <h1> Hi, <br /> 
                    I'm <span>Agustín</span>, <br />
                    web developer. 
                </h1>
                <p>Front End React developer | Engineering student.</p>
            </TextContainer>
            <img className="img-header" src={Img} alt="logo"/>
        </HeaderContainer>
    )
}

export default withTheme(Header)