import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    max-width: 1024px;
    margin: 0 auto;
    padding: 10rem;
    border-top: ${props => props.theme.footer};
    
    

    .redes-icon{
        display: flex;
        align-items: center;
        margin: 5rem;


        ul{
            display: flex;
            li{
                display: flex;
                align-items: center;
                flex-direction: column;
                list-style: none;
                margin: 0 1rem;
                color: #fff;
                font-weight: bold;
                font-size: small;
                color: ${props => props.theme.text};

                a{
                    font-size: 3rem;
                    color: ${props => props.theme.text};
                    &:hover{
                        color: ${props => props.theme.letter};
                    }
                }

            }
        }
    }

    .mail-content{
        margin: 5rem;

        .contact-me{
            font-size: 27px;
            padding-bottom: 1rem;
            text-align: center;
            font-weight: bold;
            letter-spacing: -1.5px;
            color: ${props => props.theme.letter}; 
        }
        .mail{
            margin: 0.2rem;
            text-align: center;
            div{
                display:flex;
                align-items: center;
                color: ${props => props.theme.text};

                .mail-icon{
                    font-size: 50px;
                    color: ${props => props.theme.letter};
                }
                p{
                    font-size: 24px;
                }
            }

            .btn-copy, .btn-copy2{
                margin: 1rem;
                padding: .7rem;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                border: 1px solid ${props => props.theme.letter};
                background-color: ${props => props.theme.letter};
                color:${props => props.theme.text};
                &:hover{
                    background-color: hsl(180, 66%, 49%);
                }

            }
            
        }
    }

    @media screen and (min-width: 0px) and (max-width: 920px) {
        flex-direction: column;
        padding: 8rem 0px;
        .redes-icon{
            justify-content: center;
            ul{
                flex-direction: column;
                li{
                    margin: 1rem 0;
                }
            }
        }
        .mail-content{
            justify-content: center;
            margin: 0;
            .mail{
                .mail-icon-content{
                    justify-content: center;
                    p{
                        font-size: medium;
                    }
                }
            }
        }
    }


`;