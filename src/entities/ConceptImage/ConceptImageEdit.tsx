import { Edit, ListProps, NumberInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const ConceptImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_concept_image" disabled />
      <TextInput source="main_img" />
      <TextInput source="img1" />
      <TextInput source="img2" />
      <TextInput source="left_img3" />
      <TextInput source="right_img3" />
      <TextInput source="video" />
    </SimpleForm>
  </Edit>
);
