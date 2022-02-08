import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const UsImageList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_us_image" />
      <TextField source="main_img" label="Image Principale" />
      <TextField source="middle_img" label="Image Milieu" />
      <TextField source="partners_img" label="Image Partenaires" />
    </Datagrid>
  </List>
);
