import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const CollectionList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_collection" />
      <TextField source="name" label="Nom" />
    </Datagrid>
  </List>
);
