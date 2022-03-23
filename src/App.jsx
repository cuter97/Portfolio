import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { GlobalStyles } from './styled-components/GlobalThemes'
import { dark, light } from './styled-components/theme'

const App = () => {

    const themes = { dark, light }

    const [theme, setTheme] = useState("dark")

    return (
        <ThemeProvider theme={themes[theme]}>
            <NavBar theme={theme} setTheme={setTheme} />
            <Header theme={theme} />
            <GlobalStyles/>
        </ThemeProvider>
    )
}

export default App