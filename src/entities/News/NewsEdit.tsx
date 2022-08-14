import { Edit, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const NewsEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_news" disabled />
      <TextInput source="title" />
      <TextInput source="subtitle" />
      <TextInput source="text" />
      <TextInput source="link_picture" />
    </SimpleForm>
  </Edit>
);
