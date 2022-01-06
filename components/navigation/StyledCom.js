import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { DMain } from '../main/StyledCom';

export const  DropMenu = styled.ul`
margin: 0;
box-sizing: border-box;
top: 0;
left: 0;
width: 100%;
paddin-left: 5px;
padding-top: 0px;
padding-right: 0px;
padding-bottom: 15px;
display: none;
`

export const Navli = styled.li`
position: relative;
width: 100%;
list-style-type: none;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;


`

export const Nav = styled.div`
    position: fixed;
    width: 80px;
    height: 100%;
    background: ${props => props.color};
    border-left: 10px solid ${props => props.color};
    transition: 0.5s;
    overflow: hidden;
    z-index: 999;


    ${Navli} {
        &.selected {
            background: ${COLORS.white};
            & > a {
                color: ${COLORS.blue};
            }
            & > a:before {
                {
                    content: '';
                    position: absolute;
                    right: 0;
                    width: 50px;
                    top: -50px;
                    height: 50px;
                    border-radius: 50%;
                    background: transparent;
                    box-shadow: 35px 35px 0 10px ${COLORS.white};
                    pointer-events: none;
                }
            }
            & > a:after {
                {
                    content: '';
                    position: absolute;
                    right: 0;
                    width: 50px;
                    bottom: -50px !important;
                    height: 50px;
                    border-radius: 50%;
                    background: transparent;
                    box-shadow: 35px -35px 0 10px ${COLORS.white};
                    pointer-events: none;
                }
            }
        }

    }
    &.maintain {
        z-index: none;
        width: 300px;
        ${Navli} {
            &.active {
                background: ${COLORS.white};
                & > a {
                    color: ${COLORS.blue};
                }
                ${DropMenu} {
                    display: block;
                }
                & > a:before {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        top: -50px;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px 35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
                & > a:after {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        bottom: -150px !important;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px -35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
            }
            &.active2 {
                ${DropMenu} {
                    display: block;
                }
                background: ${COLORS.white};
                & > a {
                    color: ${COLORS.blue};
                }
                & > a:before {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        top: -50px;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px 35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }

                & > a:after {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        bottom: -181px !important;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px -35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
            }
        }
    }

    &:hover {
        width: 300px;

        ${Navli} {
            &.active {
                background: ${COLORS.white};
                & > a {
                    color: ${COLORS.blue};
                }
                ${DropMenu} {
                    display: block;
                }
                & > a:before {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        top: -50px;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px 35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
                & > a:after {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        bottom: -150px !important;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px -35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
            }
            &.active2 {
                ${DropMenu} {
                    display: block;
                }
                background: ${COLORS.white};
                & > a {
                    color: ${COLORS.blue};
                }
                & > a:before {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        top: -50px;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px 35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }

                & > a:after {
                    {
                        content: '';
                        position: absolute;
                        right: 0;
                        width: 50px;
                        bottom: -181px !important;
                        height: 50px;
                        border-radius: 50%;
                        background: transparent;
                        box-shadow: 35px -35px 0 10px ${COLORS.white};
                        pointer-events: none;
                    }
                }
            }
        }
    }
`;

export const NavToggle = styled.span`
position: relative;
display: block;
min-width: 60px;
height: 60px;
right: -50px;
line-height: 70px;
text-align: center;
cursor: pointer !important;
& > svg {
    font-size: 1.35em;
    & > circle {
        stroke: ${COLORS.white};
        pointer-events: all;
    }
    & > path {
        stroke: ${COLORS.white};
        pointer-events: all;
    }
}
`

export const NavUl = styled.ul`
position: absolute;
padding: 0;
top: 0;
left: 0;
width: 100%;
& > li:nth-child(1){
    margin-bottom: 40px;
    pointer-events: none;
}

`

export const NavA = styled.a`
position: relative;
display: block;
width: 100%;        
display: flex;
text-decoration: none;
color: ${COLORS.white};
`

export const NavImg = styled.span`
position: relative;
display: block;
min-width: 60px;
height: 60px;
line-height: 75px;
text-align: center;
& > svg {
    font-size: 1.75em;
}
`




export const NavTitle = styled.span`
position: relative;
display: block;
padding: 0 10px;
height: 60px;
line-height: 60px;
text-align: start;
white-space: nowrap;
`

export const DropMenuDiv = styled.div`
display: flex;
align-items: center;
width: 80%;
&.active {
    background: #f5f5f5;
    border-radius: 10px;
}
cursor: pointer;
&:hover {
    background: #f5f5f5;
    border-radius: 10px;
}
`

export const DropMenuText = styled.span`
display: block;
padding-left: 20px;
padding-top: 5px;
padding-bottom: 5px;
`

export const DropMenuIcon = styled.span`
display: block;
width: 20px;
padding-left: 30px;
padding-top: 5px;
padding-bottom: 5px;
line-height: 10px;
`