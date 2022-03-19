import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 4rem 2rem;
    position: relative;
    
    .list{
        display: flex;
        li{
            list-style-type:none;
            margin: 0 1rem; 
            a{
                text-decoration: none;
                color: ${props => props.theme.text};
                font-weight: 400;
                position: relative;

                &:hover{
                    color: ${props => props.theme.hoverText};
                    transition: .3s;
                }

                &::after{
                    content: '';
                    position: absolute;
                    bottom: -.5rem;
                    left: 0;
                    width: 100%;
                    height: 0.1em;
                    background-color: ${props => props.theme.hoverText};
                    transition: opacity 300ms, transform 300ms;
                    transform: scale(0);
                    transform-origin: center;
                }
                &:hover::after{
                    transform: scale(1);
                }
            }
        }

    }

    .button-theme{
        cursor: pointer;
        font-size: 1.5rem;
        color: ${props => props.theme.text};
        display: flex;
        align-items: center;
        &:hover{
                    color: ${props => props.theme.buttonTheme};
                    transition: .2s
        }
    }

    .toggler{
        display: none;
    }

    @media(max-width: 750px) {
        justify-content: space-between;
        margin: 3rem 4rem; 
        .toggler{
            cursor: pointer;
            display: block;

            div{
                background-color: ${props => props.theme.mobToggler};
                width: 2.1rem;
                height: .28rem;
                margin: .4rem .4rem;
                transition: all .4s;
            }
            .uno {
                transform: rotate(-45deg) translate(-6px, 7px);
            }            
            .dos {
                opacity: 0;
            }       
            .tres {
                transform: rotate(45deg) translate(-8.5px, -9px);
            }
        }

        .list{
            display:none;
            position: absolute;
            top: 70px;
            width: 100%;
            height: 150px;
            border-radius: 1rem;
            animation:move 0.5s;
            background-color: ${props => props.theme.bgMob};

            li{
                a{
                    color: ${props => props.theme.textMob};
                    &:hover{
                        color: ${props => props.theme.hoverTextMob};
                        transition: .4s;
                    }
                    &::after{
                        background-color: ${props => props.theme.hoverTextMob};
                    }
                }
            }
        }

        .active{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;  
            z-index: 1;
        }

        @keyframes move{
        0% {
            transform: translateY(0);
            opacity: 0;
            top: -200px;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          } 
    }

    }
`;