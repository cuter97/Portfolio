import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/NavBar'
import { GlobalStyles } from './styled-components/GlobalThemes'
import { dark, light } from './styled-components/theme'

const App = () => {

    const themes = { dark, light }

    const [theme, setTheme] = useState("dark")

    return (
        <ThemeProvider theme={themes[theme]}>
            <NavBar theme={theme} setTheme={setTheme} />
            <GlobalStyles/>
        </ThemeProvider>
    )
}

export default App