import { Tr, Td, Span } from "../StyledComp"

const Item = ({id ,name, price, payment , status}) => {
    return (
    <Tr>
        <Td>{name}</Td>
        <Td>{price}</Td>
        <Td>{payment}</Td>
        <Td><Span status={status}>{status}</Span></Td>
    </Tr>
    )
}

export default Item
