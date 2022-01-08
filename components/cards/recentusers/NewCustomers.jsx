import UsrItem from "./items/UsrItem"
import { RecentCustomers, CardHeader, H2, Table } from "./StyledComp"


const NewCustomers = () => {
    return (
        <RecentCustomers>
            <CardHeader>
                <H2>Recent Customers</H2>
            </CardHeader>
            <Table>
                <UsrItem />
                <UsrItem />
                <UsrItem />
                <UsrItem />
                <UsrItem />
                <UsrItem />
            </Table>
        </RecentCustomers>
    )
}

export default NewCustomers
