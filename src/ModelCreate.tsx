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
import { PostEditActions } from "./PostEditActions";

const validateName: Validator[] = [required(), minLength(2), maxLength(100)];
const validateText: Validator[] = [
  minLength(2),
  maxLength(1500, "Longueur max : 1500 caractères"),
];
const validateMainImg: Validator[] = [required(), minLength(2), maxLength(255)];
const validateImg2: Validator[] = [minLength(2), maxLength(255)];
const validateImg3: Validator[] = [minLength(2), maxLength(255)];
const validateImg4: Validator[] = [minLength(2), maxLength(255)];
const validateImg5: Validator[] = [minLength(2), maxLength(255)];

export default interface ICollection {
  name: string;
}

const optionRenderer = (collection: ICollection) => `${collection.name}`;

export const ModelCreate = (props: ListProps) => (
  <Create
    title="Rajouter une monture" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateName} />
      <ReferenceInput source="id_collection" reference="collections">
        {/* Allows to display a dropdown list that will show directly the "name" of the collections instead of their "id_collection" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="text" validate={validateText} />
      <TextInput source="main_img" validate={validateMainImg} />
      <TextInput source="img_2" validate={validateImg2} />
      <TextInput source="img_3" validate={validateImg3} />
      <TextInput source="img_4" validate={validateImg4} />
      <TextInput source="img_5" validate={validateImg5} />
    </SimpleForm>
  </Create>
);
