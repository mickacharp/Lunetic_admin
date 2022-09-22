import { ListProps, List, Datagrid, NumberField, TextField, ReferenceField } from "react-admin";

export const ModelTempleColorList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_model_temple_color" />
      <ReferenceField label="Monture" source="id_model" reference="models">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField label="Couleur" source="id_color_model" reference="colors">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField label="Nom Wishlist" source="id_wishlist" reference="wishlists">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);
