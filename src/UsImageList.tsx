import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const UsImageList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_us_image" />
      <TextField source="main_img" />
      <TextField source="middle_img" />
      <TextField source="partners_img" />
    </Datagrid>
  </List>
);
