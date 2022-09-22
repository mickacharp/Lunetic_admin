import { Edit, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const ConceptImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_concept_image" disabled />
      <TextInput source="main_img" fullWidth multiline />
      <TextInput source="img1" fullWidth multiline />
      <TextInput source="img2" fullWidth multiline />
      <TextInput source="left_img3" fullWidth multiline />
      <TextInput source="right_img3" fullWidth multiline />
      <TextInput source="video" fullWidth multiline />
    </SimpleForm>
  </Edit>
);
