import styled from 'styled-components';

export const Container = styled.main`
    position: relative;
    width: 100%;

    .bg-images {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .dev-credits {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1.6rem;

        padding: .2rem .7rem;

        background: #fff;
        color: #000;
    }

    /* #theme {
        position: absolute;
        top: 5rem;
        right: 5rem;


        i {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 5rem;
            height: 5rem;

            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(1rem);
            -webkit-backdrop-filter: blur(1rem);

            font-size: 2.5rem;
            border-radius: .3rem;
        }

        .box-themes {
            margin-top: 2rem;

            box-radius: ;
        }
    } */

    .content {
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 100vh;

        .to-do {
            width: 60rem;
            height: 79rem;

            padding: 5rem;

            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(1rem);
            -webkit-backdrop-filter: blur(1rem);

            border-radius: 1rem;

            > h1 {
                font-size: 4rem;
                text-align: center;
                margin-bottom: 4rem;
            }

            .add-task {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 5rem;
                gap: 3rem;

                input {
                    width: 100%;
                    height: 5rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(1rem);
                    -webkit-backdrop-filter: blur(1rem);

                    padding: 0 3rem;
                    font-size: 1.8rem;
                    border-radius: .3rem;

                    &::placeholder {
                        color: rgba(0, 0, 0, 0.8);
                    }
                }

                button {
                    width: 100%;
                    height: 5rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    color: #000;
                    
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(1rem);
                    -webkit-backdrop-filter: blur(1rem);

                    font-size: 2.5rem;
                    border-radius: .3rem;
                }
            }

            header {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5rem;

                margin-top: 6rem;

                .header-tasks-area {
                    position: relative;
                    height: 7rem;
                    width: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    text-align: center;
                    font-size: 1.8rem;

                    cursor: pointer;
                    overflow: hidden;

                    &::before {
                        position: absolute;
                        content: '';
                        bottom: 0;
                        left: 0;

                        width: 100%;
                        height: .3rem;

                        background: #000;
                        
                        transform: scaleX(0);
                        opacity: 0;
                        transition: .2s ease-in-out;
                    }

                    span.ripple {
                        position: absolute; /* The absolute position we mentioned earlier */
                        border-radius: 50%;
                        transform: scale(0);
                        animation: ripple 1s linear;
                        background-color: rgba(255, 255, 255, 0.7);
                    }

                    &.active::before {
                        transform: scaleX(1);
                        opacity: 1;
                    }
                }
            }

            #tasks-wrapper {
                position: relative;
                width: 100%;
                height: 42rem;
                min-height: 42rem;
                max-height: 42rem;

                .tasks-screen {
                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 42rem;
                    min-height: 42rem;
                    max-height: 42rem;

                    overflow: hidden;
                    overflow-y: scroll;
                    
                    padding: 3rem 0 0;

                    opacity: 0;
                    pointer-events: none;
                    transition: .3s;

                    
                    &::-webkit-scrollbar-track {
                        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
                        background-color: transparent;
                    }
                    &::-webkit-scrollbar {
                        display: none;
                        width: 6px;
                        background-color: transparent;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: #000;
                        transform: translateX(1rem);
                    }

                    &.active {
                        opacity: 1;
                        pointer-events: all;
                    }

                    .not-tasks {
                        position: absolute;
                        left: 50%;
                        top: 50%;

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;

                        transform: translate(-50%, -50%);

                        width: 30rem;
                        height: 30rem;

                        /* background: red; */

                        img {
                            width: 5rem;
                            margin-bottom: 2.5rem;
                        }

                        h2 {
                            font-size: 1.8rem;
                            font-weight: 400;
                            color: #000;
                        }
                    }

                    .task {
                        background: rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(1rem);
                        -webkit-backdrop-filter: blur(1rem);

                        min-height: 5rem;
                        width: 100%;

                        padding: 3rem;
                        border-radius: 1rem;

                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        /* input {
                            height: 2.5rem;
                            width: 2.5rem;

                            margin-right: 3rem;
                        } */

                        & > div {
                            display: flex;
                            align-items: center;
                        }

                        &.active {
                            transform: translateX(100%);
                            opacity: 0;
                            transition: .4s ease-in-out;
                        }

                        .checkbox {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            
                            margin-right: 1.5rem;

                            height: 5rem;
                            width: 5rem;
                            
                            .cbx {
                                -webkit-perspective: 20;
                                perspective: 20;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                margin: -12px;
                                border: 2px solid #000;
                                background: transparent;
                                border-radius: 4px;
                                transform: translate3d(0, 0, 0);
                                cursor: pointer;
                                transition: all 0.3s ease;
                            }

                            .flip {
                                display: block;
                                transform-style: preserve-3d;
                                position: relative;
                                width: 20px;
                                height: 20px;

                                transform: rotateY(180deg) scale(0);
                            }
                            
                            input {
                                display: none;

                                &:checked + .cbx {
                                    border-color: #000;

                                    .flip {
                                        transition: 0.1s ease;
                                        transform: rotateY(180deg) scale(1);
                                    }
                                }
                            }

                            .front,
                            .back {
                                backface-visibility: hidden;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 20px;
                                height: 20px;
                                border-radius: 2px;
                            }
                            .front {
                                background: transparent;
                                z-index: 1;
                            }
                            .back {
                                transform: rotateY(180deg);
                                background: #000;
                                text-align: center;
                                color: #fff;
                                line-height: 20px;
                                box-shadow: 0 0 0 1px #000;

                                svg {
                                    margin-top: 3px;
                                    fill: none;

                                    path {
                                        stroke: #fff;
                                        stroke-width: 2.5;
                                        stroke-linecap: round;
                                        stroke-linejoin: round;
                                    }
                                }
                            }
                        }

                        strong {
                            display: inline-block;
                            overflow-wrap: break-word;
                            max-width: 30rem;
                            color: #000;
                            font-size: 2.2rem;
                            line-height: 150%;
                        }

                        + .task {
                            margin-top: 1rem;
                        }

                        .actions {
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            button {
                                width: 5rem;
                                height: 5rem;

                                background: rgba(255, 255, 255, 0.1);
                                backdrop-filter: blur(1rem);
                                -webkit-backdrop-filter: blur(1rem);
                                border-radius: 1rem;

                                i {
                                    font-size: 1.8rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {

        .content .to-do #tasks-wrapper .tasks-screen .task .checkbox {
            .cbx {
                transform: scale(.7);
            }
        }
        
    }
`;
