import styled from 'styled-components';
import { useState } from 'react';
//Icons
import { AiOutlineHome, AiOutlineMail, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { SiPhpmyadmin } from 'react-icons/si';
import { BsCircle } from 'react-icons/bs';
import { GrRadial, GrRadialSelected } from 'react-icons/gr';

import { COLORS } from '../../styles/Colors';
import { DropMenu, Navli, Nav, NavUl, NavA, NavImg, NavTitle, DropMenuDiv,
         DropMenuText, DropMenuIcon, NavToggle, NavToggleMobile } from './StyledCom';


const Navigation = () => {

    // Needed Variables
    let idList = {}
    let flag = 0;
    let index = 0;

    // Functions to handle active div
    const ActiveList = (id) => {
        if (flag > 0 && Object.keys(idList).length > 0) {
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

    const [toggle, setToggle] = useState(false);

    const ToggleMenu = (e, id, MainDivId) => {
        if (toggle) {

            const item = document.querySelector(`#${id}`);
            item.classList.remove('maintain');

            const item2 = document.querySelector(`#${MainDivId}`);
            item2.classList.remove('maintain');
            setToggle(false)
        } else {
            const item = document.querySelector(`#${id}`);
            item.classList.add('maintain');
            const item2 = document.querySelector(`#${MainDivId}`);
            item2.classList.add('maintain');
            setToggle(true)
        }


    }

    const TogleMobilee = (e, id) => {
        console.log("working")
        const Nav = document.querySelector('#' + id);
        Nav.classList.remove("togglemobile")

    }

    return (
        <Nav id="Nav" color={COLORS.blue}>
            <NavUl>
                <Navli>
                    <NavA href="#">
                        <NavImg><SiPhpmyadmin /></NavImg>
                        <NavTitle>Brand Name</NavTitle>
                        {toggle ? <NavToggle onClick={(e) => ToggleMenu(e, "Nav", "Main")}><GrRadialSelected /></NavToggle>: 
                        <NavToggle onClick={(e) => ToggleMenu(e, "Nav", "Main")}><GrRadial /></NavToggle>}
                        <NavToggleMobile onClick={(e) => TogleMobilee(e, "Nav")}><AiOutlineCloseCircle /></NavToggleMobile>
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
