import styled from 'styled-components';
//Icons
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { SiPhpmyadmin } from 'react-icons/si';
import { BsCircle } from 'react-icons/bs';


import { COLORS } from '../../styles/Colors';





const DropMenu = styled.ul`
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



const Navli = styled.li`
    position: relative;
    width: 100%;
    list-style-type: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    

`

const Nav = styled.div`
    position: fixed;
    width: 80px;
    height: 100%;
    background: ${props => props.color};
    border-left: 10px solid ${props => props.color};
    transition: 0.5s;
    overflow: hidden;
    
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


const NavUl = styled.ul`
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



const NavA = styled.a`
    position: relative;
    display: block;
    width: 100%;        
    display: flex;
    text-decoration: none;
    color: ${COLORS.white};
`

const NavImg = styled.span`
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

const NavTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
`


const DropMenuDiv = styled.div`
    display: flex;
    align-items: center;
    &.active {
        background: #f5f5f5;
        border-radius: 10px;
    }
`

const DropMenuText = styled.span`
    display: block;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
`

const DropMenuIcon = styled.span`
    display: block;
    padding-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 10px;
`


const Navigation = () => {

    // Needed Variables
    let idList = {}
    let flag = 0;
    let index = 0;

    // Functions to handle active div
    const ActiveList = (id) => {
        if (flag > 0 && Object.keys(idList).length > 0) {
            console.log(idList)
            const item = document.querySelector(`#${idList[index]}`);
            delete idList[index];
            if (index !== "b") {
                item.classList.remove('active');
            }

            if (index === "b") {
                item.classList.remove('active2');
            }
        }
        flag = 1
        index = id
        idList[id] = id;
        const item = document.querySelector(`#${id}`);

        if (id !== "b") {
            item.classList.add('active');
        }

        if (id === "b") {
            item.classList.add('active2');
        }

    }

    // Active Page function
    let itemLink = "default";
    let linkId = "default";
    let Flag2 = 0;
    const ActiveDropLink = (e, b) => {
        if (e.currentTarget.id !== linkId && Flag2 > 0) {
            const item = document.querySelector('#' + linkId);
            item.classList.remove('active');
            let CurntId = e.currentTarget.id[0].split("")
            let PrevId = linkId[0].split("")

            if (CurntId[0] !== PrevId[0]) {
                console.log(PrevId)
                const divItm = document.querySelector('#' + PrevId);
                if (PrevId != "b") {
                    divItm.classList.remove('active');
                } else {
                    
                    divItm.classList.remove('active2');
                }
                divItm.classList.remove('selected');
            }
        }
        Flag2 = 1
        itemLink = b;
        linkId = e.currentTarget.id;// safe div id
        delete idList[b];

        const item = document.querySelector('#' + e.currentTarget.id);
        item.classList.add('active');

        const divItm = document.querySelector('#' + itemLink);
        divItm.classList.add('selected');

    }

    return (
        <Nav color={COLORS.blue}>
            <NavUl>
                <Navli>
                    <NavA href="#">
                        <NavImg><SiPhpmyadmin /></NavImg>
                        <NavTitle>Brand Name</NavTitle>
                    </NavA>
                </Navli>
                <Navli id="a" size="-150">
                    <NavA href="#" onClick={(e) => ActiveList("a")}>
                        <NavImg><AiOutlineHome /></NavImg>
                        <NavTitle>Dashboard</NavTitle>
                    </NavA>
                    <DropMenu>
                        <DropMenuDiv id="a1" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Home</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a2" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Analytics</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="a3" onClick={(e) => ActiveDropLink(e, "a")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Sales</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                </Navli>
                <Navli id="b" size="-180">
                    <NavA href="#" onClick={(e) => ActiveList("b")}>
                        <NavImg><MdSpaceDashboard /></NavImg>
                        <NavTitle>Quick Menu</NavTitle>
                    </NavA>
                    <DropMenu>
                        <DropMenuDiv id="b4" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Users</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b5" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Products</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b6" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Transactions</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="b7" onClick={(e) => ActiveDropLink(e, "b")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Reports</DropMenuText>
                        </DropMenuDiv>

                    </DropMenu>
                </Navli>
                <Navli id="c" size="-150">
                    <NavA href="#" onClick={(e) => ActiveList("c")}>
                        <NavImg><AiOutlineMail /></NavImg>
                        <NavTitle>Notifications</NavTitle>
                    </NavA>
                    <DropMenu >
                        <DropMenuDiv id="c7" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Mail</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="c8" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Feedback</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="c9" onClick={(e) => ActiveDropLink(e, "c")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Messages</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                </Navli>
                <Navli id="e" size="-150">
                    <NavA href="#" onClick={(e) => ActiveList("e")}>
                        <NavImg><IoIosPeople /></NavImg>
                        <NavTitle>People</NavTitle>
                    </NavA>
                    <DropMenu >
                        <DropMenuDiv id="e8" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Manage</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="e9" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Analytics</DropMenuText>
                        </DropMenuDiv>
                        <DropMenuDiv id="e10" onClick={(e) => ActiveDropLink(e, "e")}>
                            <DropMenuIcon><BsCircle style={{ fontSize: "10" }} /></DropMenuIcon>
                            <DropMenuText>Reports</DropMenuText>
                        </DropMenuDiv>
                    </DropMenu>
                </Navli>
            </NavUl>
        </Nav>
    )
}

export default Navigation
