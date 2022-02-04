import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const NewsList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_news" />
      <TextField source="title" label="Titre" />
      <TextField source="subtitle" label="Sous-titre" />
      <TextField source="text" label="Texte" />
      <TextField source="link_picture" label="Lien de l'image" />
    </Datagrid>
  </List>
);
