import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateName: Validator[] = [required(), minLength(2), maxLength(255)];

export default interface ICollection {
  name: string;
}

const optionRenderer = (collection: ICollection) => `${collection.name}`;

export const TempleCreate = (props: ListProps) => (
  <Create
    title="Rajouter des branches" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateName} label="Nom" fullWidth multiline />
      <ReferenceInput
        source="id_collection"
        reference="collections"
        label="Collection"
        fullWidth
        multiline
      >
        {/* Allows to display a dropdown list that will show directly the "name" of the collections instead of their "id_collection" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
