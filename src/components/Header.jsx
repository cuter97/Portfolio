import { HeaderContainer, TextContainer } from "../styled-components/Header.styled"
import { withTheme } from "styled-components"
import Logo from '../imagenes/developer.jpg'
import LogoDark from '../imagenes/developerDark.jpg'

const Header = (props) => {

    const imagen = props.theme === 'light' ? Logo : LogoDark


    return (
        <HeaderContainer>
            <TextContainer className="text-container">
                <h1> Hi, <br /> 
                    I'm <span>Agustín</span>, <br />
                    web developer. 
                </h1>
                <p>Front End React developer | Engineering student.</p>
            </TextContainer>
            <img className="img-header" src={imagen} alt="logo"/>
        </HeaderContainer>
    )
}

export default withTheme(Header)