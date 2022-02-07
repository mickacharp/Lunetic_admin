import {
  ListProps,
  List,
  Datagrid,
  NumberField,
  TextField,
  ReferenceField,
} from "react-admin";

export const TempleList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_temple" />
      <TextField source="name" />
      <ReferenceField
        label="Collection"
        source="id_collection"
        reference="collections"
      >
        <>
          <TextField source="name" label="Nom" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);
