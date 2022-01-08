import Item from "./items/Item";
import {
    Details, RecentOrders, CardHeader, H2,
    Aref, Table, Thead, Tr, Td, Tbody
} from "./StyledComp";

import { Data } from "./Data"
import NewCustomers from "../recentusers/NewCustomers";

const DataList = () => {
    return (
        <Details>
            <RecentOrders>
                <CardHeader>
                    <H2>Recent Orders</H2>
                    <Aref>View All</Aref>
                </CardHeader>
                <Table>
                    <Thead>
                        <Tr>
                            <Td>Name</Td>
                            <Td>Price</Td>
                            <Td>Payment</Td>
                            <Td>Status</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Data?.map(({ id, name, price, payment, status }) => (
                            <Item
                                key={id}
                                name={name}
                                price={price}
                                payment={payment}
                                status={status}
                            />
                        ))}
                    </Tbody>
                </Table>
            </RecentOrders>
            <NewCustomers/>
        </Details>
    )
}

export default DataList
