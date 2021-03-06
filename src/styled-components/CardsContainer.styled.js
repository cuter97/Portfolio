import styled from 'styled-components'

export const CardContent = styled.div`

    .text-tittle{
        text-align: center;
        padding: 40px 0 20px 0;
        font-size: 30px;
        letter-spacing: -1px;
        font-weight: 600;
        color: ${props => props.theme.letter};
    }

    //card container css 

    .card-list{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        list-style: none;
        max-width: 1200px;
        margin: 0 auto;
    
        .card-container{
            padding-bottom: 1rem;
            background-color:  ${props => props.theme.bgCard};
            border-radius: 15px;
            box-shadow:  ${props => props.theme.box};
            position: relative;
            margin: 40px;
            max-width: 250px;

            &:hover{transform: scale(1.05,1.05);}
            transition: 0.5s;

            .card-content{

                .tam-img{
                    height: 220px;
                    width: 250px;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                }
                .card-info{
                    text-align: center;
                    h2{
                        margin: 1rem;
                        color: ${props => props.theme.text};
                    }
                    .tags-container{
                        display: flex;
                        justify-content: center;
                        margin: 1rem;
                        p {
                            margin: 4px; 
                            background-color: rgba(255, 238, 0, 0.932);
                            padding: 3px;
                            font-size: medium;
                            border-radius: 3px;
                        }
                    }
                }
            }
            .card-open-link {
                position: absolute;
                top: 0px;
                height: 360px;
                width: 250px;
                margin: auto;
            }
        }
    }
    
    //card open 
    .card-container.open{
        position: fixed;
        top:0;
        left:0;
        margin: auto;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(7px);
        
        .card-content{
            display: flex;
            background-color: rgb(255, 255, 255);
            position: absolute;
            max-width: 1024px;
            border-radius: 20px;

            .card-info{
                padding: 1.5rem;
                margin: 1.5rem;

                h2{
                    margin-bottom: 10px;
                    letter-spacing: -1px;
                }
                
                .icons-content{
                    display: flex;
                    justify-content: end;
                    padding-top: 30px;
                    a{
                        display: flex;
                        align-items: center;
                        margin-right: 40px;
                        font-size: 27px;
                        color: black;
                        text-decoration: none;

                        &:hover{
                            color: rgb(3, 190, 190);
                        }

                        p{
                            font-size: 16px;
                            font-weight: 600;
                            margin-left: 5px;
                        }
                    }
                
                }

                .toolsTags{
                    margin-top: 20px;
                }

                .tools-container, .tags-container{
                    display: flex;
                    margin-top: 5px;
                    p{
                        margin-right: 20px;
                        background-color: rgb(255, 238, 0);
                        padding: 5px;
                        font-weight: 500;
                    }
                }

            }

            .btn-close{
                position: absolute;
                top: 10px;
                right: 12px;
                font-size: 30px;
                color: rgba(0, 0, 0, 0.9);

                &:hover{
                    color: rgb(190, 3, 3);
                }
            }
        }

    }

    .open .tam-img{
        height: 100%;
        width: 500px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    @media screen and (min-width: 0px) and (max-width: 480px) {

        .card-container.open{

            .card-content{
                flex-direction: column;
                max-height: 680px;
                max-width: 370px;

                .tam-img{
                    width: 100%;
                    height: 260px;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                }
                .card-info{
                    padding: 0;

                    p{font-size: small;}

                    h2{margin: 0;text-align: center;}

                    .icons-content{
                        justify-content: space-evenly;
                        a{font-size: medium;}
                    }

                }
            }
        }
    }

    @media screen and (min-width: 481px) and (max-width: 920px) {
        .card-container.open{

            .card-content{
                flex-direction: column;
                max-height: 780px;
                max-width: 480px;

                .tam-img{
                    width: 100%;
                    height: 350px;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                }
                .card-info{
                    h2{text-align: center;}
                    padding: 0;

                    .icons-content{
                        justify-content: space-evenly;
                        a{font-size: small;}
                    }

                }
            }
        }
    }
`;