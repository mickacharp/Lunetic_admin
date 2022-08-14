import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  Validator,
  minLength,
  maxLength,
  required,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateTitle: Validator[] = [required(), minLength(2), maxLength(255)];
const validateSubtitle: Validator[] = [minLength(2), maxLength(255)];
const validateText: Validator[] = [
  required(),
  minLength(2),
  maxLength(1500, "Longueur max : 1500 caractères"),
];
const validateLinkPicture: Validator[] = [minLength(2), maxLength(255)];

export const NewsCreate = (props: ListProps) => (
  <Create
    title="Rajouter une news" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="title" validate={validateTitle} />
      <TextInput source="subtitle" validate={validateSubtitle} />
      <TextInput source="text" validate={validateText} />
      <TextInput source="link_picture" validate={validateLinkPicture} />
    </SimpleForm>
  </Create>
);
