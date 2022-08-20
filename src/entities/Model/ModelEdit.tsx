import {
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export default interface ICollection {
  name: string;
}

const optionRenderer = (collection: ICollection) => `${collection.name}`;

export const ModelEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_model" disabled />
      <TextInput source="name" fullWidth multiline />
      <ReferenceInput source="id_collection" reference="collections" fullWidth>
        {/* Allows to display a dropdown list that will show directly the "name" of the collections instead of their "id_collection" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="text" fullWidth multiline />
      <TextInput source="main_img" fullWidth multiline />
      <TextInput source="img_2" fullWidth multiline />
      <TextInput source="img_3" fullWidth multiline />
      <TextInput source="img_4" fullWidth multiline />
      <TextInput source="img_5" fullWidth multiline />
    </SimpleForm>
  </Edit>
);
