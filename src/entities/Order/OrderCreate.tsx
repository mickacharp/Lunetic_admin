import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  Validator,
  minLength,
  maxLength,
  ReferenceInput,
  required,
  DateInput,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateLinkPdf: Validator[] = [minLength(2), maxLength(255)];
const validateOrderNumber: Validator[] = [required(), minLength(2), maxLength(100)];
const validateDate: Validator[] = [required()];
const validateReference: Validator[] = [required()];

export interface IOptician {
  firstname: string;
  lastname: string;
  company: string;
}

const optionRendererOptician = (optician: IOptician) =>
  `${optician.firstname} ${optician.lastname}, ${optician.company}`;

export const OrderCreate = (props: ListProps) => (
  <Create
    title="Rajouter une facture" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput
        source="id_optician"
        reference="opticians"
        validate={validateReference}
        fullWidth
      >
        {/* Allows to display a dropdown list that will show directly the name of the opticians instead of their "id_optician" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRendererOptician} />
      </ReferenceInput>
      <TextInput source="link_pdf" validate={validateLinkPdf} fullWidth />
      <TextInput source="order_number" validate={validateOrderNumber} fullWidth />
      <DateInput source="date" validate={validateDate} fullWidth />
    </SimpleForm>
  </Create>
);
