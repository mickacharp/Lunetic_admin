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
import { PostEditActions } from "./PostEditActions";

const validateName: Validator[] = [required(), minLength(2), maxLength(255)];

export const CollectionCreate = (props: ListProps) => (
  <Create
    title="Rajouter une collection" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateName} />
    </SimpleForm>
  </Create>
);
