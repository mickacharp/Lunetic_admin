import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const NewsList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_news" />
      <TextField source="title" />
      <TextField source="subtitle" />
      <TextField source="text" />
    </Datagrid>
  </List>
);
