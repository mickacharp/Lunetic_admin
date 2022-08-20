import {
  DateInput,
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export interface IOptician {
  firstname: string;
  lastname: string;
  company: string;
}

const optionRendererOptician = (optician: IOptician) =>
  `${optician.firstname} ${optician.lastname}, ${optician.company}`;

export const OrderEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_order" disabled />
      <ReferenceInput source="id_optician" reference="opticians" fullWidth>
        {/* Allows to display a dropdown list that will show directly the name of the opticians instead of their "id_optician" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRendererOptician} />
      </ReferenceInput>
      <TextInput source="link_pdf" label="Lien facture pdf" fullWidth />
      <TextInput source="order_number" label="Numéro de commande" fullWidth />
      <DateInput source="date" fullWidth />
    </SimpleForm>
  </Edit>
);
