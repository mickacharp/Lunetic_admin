import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const ConceptImageList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_concept_image" />
      <TextField source="main_img" />
      <TextField source="img1" />
      <TextField source="img2" />
      <TextField source="left_img3" />
      <TextField source="right_img3" />
      <TextField source="video" label="VidéoOptionnelle (indisponible)" />
    </Datagrid>
  </List>
);
