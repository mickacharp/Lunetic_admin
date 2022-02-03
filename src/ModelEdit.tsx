import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const OpticianEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_model" />
      <TextInput source="name" />
      <NumberInput source="id_collection" />
      <TextInput source="main_img" />
      <TextInput source="img_2" />
      <TextInput source="img_3" />
      <TextInput source="img_4" />
      <TextInput source="img_5" />
      <TextInput source="text" />
    </SimpleForm>
  </Edit>
);
