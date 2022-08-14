import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const ModelImageList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_models_image" />
      <TextField source="main_img1" />
      <TextField source="main_img2" />
      <TextField source="main_img3" />
      <TextField source="main_img4" />
      <TextField source="sidetitle_img1" />
      <TextField source="sidetitle_img2" />
      <TextField source="page_img1" />
      <TextField source="page_img2" />
      <TextField source="middle_img1" />
      <TextField source="middle_img2" />
      <TextField source="main_bottom_img" />
      <TextField source="bottom_img1" />
      <TextField source="bottom_img2" />
      <TextField source="bottom_img3" />
    </Datagrid>
  </List>
);
