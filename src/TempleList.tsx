import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const TempleList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_temple" />
      <TextField source="name" />
      <NumberField source="id_collection" />
    </Datagrid>
  </List>
);
