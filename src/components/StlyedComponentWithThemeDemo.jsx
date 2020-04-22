import React , {useState}from 'react'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';



const lightTheme = {
    bgColor: '#deb7d2',
    color: '#000000',
}

const darkTheme = {
    bgColor: '#e8153c',
    color: '#ffffff',
}
const  MainContainer = styled.div`
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.color};
        width: 400px;
        height: 200px;
    `;

const GlobalStyle = createGlobalStyle`
    button {
        padding: 8px;
        margin: 5px;
        background-color: aqua;
    }
    button:hover {
        background-color: #1ce6e6;
        cursor: pointer;
    }
`

function StlyedComponentWithThemeDemo() {
    const [theme, setTheme] = useState('light');
    const themeChange = (e) => {
        setTheme(e.target.value);
    }
    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme}>
            <MainContainer>
                <div>
                    Light: <input type="radio"  name="theme"   defaultChecked value='light' onClick={themeChange}/>
                    Dark: <input type="radio" name="theme"  value='dark' onClick={themeChange}/>
                    
                </div>
                <h3>This is using styled component</h3>
                
            </MainContainer>
            <GlobalStyle />
        </ThemeProvider>
        
    )
}
export default StlyedComponentWithThemeDemo
