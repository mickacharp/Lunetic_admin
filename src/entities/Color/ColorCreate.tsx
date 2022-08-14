import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  Validator,
  required,
  minLength,
  maxLength,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateName: Validator[] = [required(), minLength(2), maxLength(50)];

export const ColorCreate = (props: ListProps) => (
  <Create
    title="Rajouter une couleur" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateName} />
    </SimpleForm>
  </Create>
);
