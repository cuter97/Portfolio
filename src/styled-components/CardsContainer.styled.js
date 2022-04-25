import styled from 'styled-components'

export const CardContent = styled.div`
    height: 100vh;
    scroll-behavior: smooth;

    .text-tittle{
        text-align: center;
        padding: 40px 0 10px 0;
        font-size: 25px;
        letter-spacing: -1px;
        font-weight: 600;
        color: ${props => props.theme.letter};
    }
`;