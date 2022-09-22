import { ListProps, List, Datagrid, NumberField, TextField, ReferenceField } from "react-admin";

export const ModelList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_model" />
      <TextField source="name" label="Nom" />
      <ReferenceField label="Collection" source="id_collection" reference="collections">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <TextField source="text" label="Description apparaissant sur la page Catalogue" />
      <TextField source="main_img" label="Image principale" />
      <TextField source="img_2" label="Image 2" />
      <TextField source="img_3" label="Image 3" />
      <TextField source="img_4" label="Image 4" />
      <TextField source="img_5" label="Image 5" />
    </Datagrid>
  </List>
);
