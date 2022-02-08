import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const UsImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_us_image" disabled />
      <TextInput source="main_img" />
      <TextInput source="middle_img" />
      <TextInput source="partners_img" />
    </SimpleForm>
  </Edit>
);
