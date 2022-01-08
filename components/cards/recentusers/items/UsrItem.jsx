import { Tr, Td, ImgBox, Img, H4, Span } from "./StyledCom"

const UsrItem = () => {
    return (
        <Tr>
            <Td>
                <ImgBox><Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5KqiP_7htmin1ZO_xz4J9ZGEFums_SeuuuqQbqce4n4KAND-etj0j4opK_2TSPhdNIQ&usqp=CAU" alt="" /></ImgBox>
            </Td>
            <Td><H4>Angel<br></br><Span>Spain</Span></H4></Td>
        </Tr>
    )
}

export default UsrItem
