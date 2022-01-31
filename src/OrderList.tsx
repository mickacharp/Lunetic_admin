import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const OrderList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_order" />
      <NumberField source="id_optician" />
      <TextField source="link_pdf" />
      <TextField source="order_number" />
      <TextField source="date" />
    </Datagrid>
  </List>
);
