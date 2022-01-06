import { Tbar, FastMenu, Search, Label, Input, User, Img } from './StyledCom';
import { AiOutlineMail , AiOutlineSearch } from 'react-icons/ai';


const TopBar = () => {

    return (
        <Tbar>
            <FastMenu >
                <AiOutlineMail />
            </FastMenu>
            {/* Search */}
            <Search>
                <Label>
                    <Input type="text" placeholder="Search Here" />
                    <AiOutlineSearch />
                </Label>
            </Search>
            {/* User */}
            <User>
                <Img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
            </User>
        </Tbar>
    )
}

export default TopBar
