import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const ModelList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_model" />
      <TextField source="name" />
      <NumberField source="id_collection" />
      <TextField source="main_img" />
      <TextField source="img_2" />
      <TextField source="img_3" />
      <TextField source="img_4" />
      <TextField source="img_5" />
      <TextField source="text" />
    </Datagrid>
  </List>
);
