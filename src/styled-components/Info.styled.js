import styled from 'styled-components'

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
    margin: 0 auto;
    text-align: center;
    padding: 7rem;
    
    h2{
        margin: 1.5rem;
        color: ${props => props.theme.letter};
        font-size: 35px;
    }
    h3{
        margin: .5rem;
        color: ${props => props.theme.text};
        font-size: 25px;
    }
    p{
        max-width: 600px;
        color: ${props => props.theme.text};
        font-size: 19px;
        margin-bottom: 1rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        line-height: 1.7;
    }
    .pdf{
        font-size: 4.5rem;
        color: ${props => props.theme.letter};

        &:hover{
            color: ${props => props.theme.text};
        }
    }
`;