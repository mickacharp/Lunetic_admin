import { Edit, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const ModelImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_models_image" disabled />
      <TextInput source="main_img1" />
      <TextInput source="main_img2" />
      <TextInput source="main_img3" />
      <TextInput source="main_img4" />
      <TextInput source="sidetitle_img1" />
      <TextInput source="sidetitle_img2" />
      <TextInput source="page_img1" />
      <TextInput source="page_img2" />
      <TextInput source="middle_img1" />
      <TextInput source="middle_img2" />
      <TextInput source="main_bottom_img" />
      <TextInput source="bottom_img1" />
      <TextInput source="bottom_img2" />
      <TextInput source="bottom_img3" />
    </SimpleForm>
  </Edit>
);
