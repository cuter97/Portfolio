import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { CardContent } from './styled-components/CardsContainer.styled'
import { GlobalStyles } from './styled-components/GlobalThemes'
import { dark, light } from './styled-components/theme'
import Cardcontainer from './components/Cardcontainer'
import Info from './components/Info'
import Footer from './components/Footer'
// import './sass/style.scss'

const App = () => {

    const themes = { dark, light }

    const [theme, setTheme] = useState("dark")

    return (
        <ThemeProvider theme={themes[theme]}>

            <div className='header-container'>
                <NavBar theme={theme} setTheme={setTheme} />
                <Header />
            </div>

            <CardContent id='WORKS'>
                <p className='text-tittle'>View some of my recent work</p>
                <Cardcontainer />
            </CardContent>

            <div id='INFO' >
                <Info />
            </div>
            
            <Footer />

            <GlobalStyles />

        </ThemeProvider>
    )
}

export default App