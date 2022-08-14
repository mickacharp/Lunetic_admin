import { Edit, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const UsImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_us_image" disabled />
      <TextInput source="main_img" label="Image Principale" />
      <TextInput source="middle_img" label="Image Milieu" />
      <TextInput source="partners_img" label="Image Partenaires" />
    </SimpleForm>
  </Edit>
);
