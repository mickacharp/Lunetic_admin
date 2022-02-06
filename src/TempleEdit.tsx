import {
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export default interface ICollection {
  name: string;
}

const optionRenderer = (collection: ICollection) => `${collection.name}`;

export const TempleEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_temple" disabled />
      <TextInput source="name" label="Nom" />
      <ReferenceInput
        source="id_collection"
        reference="collections"
        label="Collection"
      >
        {/* Allows to display a dropdown list that will show directly the "name" of the collections instead of their "id_collection" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
