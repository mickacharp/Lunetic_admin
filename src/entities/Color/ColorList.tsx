import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const ColorList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_color" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
