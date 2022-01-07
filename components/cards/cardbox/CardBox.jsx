import React from 'react'
import {  Card, BoxItems, Numbers, CardName, IconBox } from "./StyledComp"
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMoney } from 'react-icons/bi';
import { FaComments } from 'react-icons/fa';

const CardBox = ({ numb, title, icon }) => {
    return (
        <Card>
        <BoxItems>
            <Numbers>{numb}</Numbers>
            <CardName>{ title }</CardName>
        </BoxItems>
        <IconBox>
            {icon === "money" && <BiMoney/>}
            {icon === "eye" && <AiOutlineEye/>}
            {icon === "cart" && <AiOutlineShoppingCart/>}
            {icon === "comment" && <FaComments/>}
        </IconBox>
    </Card>
    )
}

export default CardBox
