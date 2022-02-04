import {
  ListProps,
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
} from "react-admin";

export const WishlistList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_wishlist" />
      <TextField source="name" />
      <DateField source="date" />
      <NumberField source="id_optician" />
    </Datagrid>
  </List>
);
