import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const ColorEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_color" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
