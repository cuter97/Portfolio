import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1200px;
    align-items: center;
    justify-content: center;
    margin: 7rem auto;

    img{
        width: 37.125rem;
        height: 25rem;
        max-inline-size: 100%;
        block-size: auto;
        margin-left: 5rem;
    }

    @media screen and (min-width: 0px) and (max-width: 768px) {
        margin: 0;
        flex-direction: column;
        .text-container{
            margin: 0;
            h1{font-size: 2.5rem;}
            p{font-size: .7rem;}
        }
        .img-header{
            margin:0;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1048px) {
        flex-direction: column;
        .text-container{
            padding-bottom: 2rem;
            h1{font-size: 2.6rem;}
            p{font-size: .8rem;}
        }
        .img-header{
            width: 24.813rem;
            height: 18.75rem;
        }   
    }

`;

export const TextContainer = styled.div`
    color: ${props => props.theme.text};
    margin-left: 4rem;
    h1{
        font-weight: 900;
        letter-spacing: -2px;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        span{
            color :${props => props.theme.letter};
        }
    }
`;

