import { Edit, ListProps, NumberInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const OpticianEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_optician" disabled />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="company" />
      <TextInput source="address" />
      <TextInput source="other_address" />
      <TextInput source="postal_code" />
      <TextInput source="city" />
      <TextInput source="email" />
      <TextInput source="mobile_phone" />
      <TextInput source="password" />
      <TextInput source="website" />
      <TextInput source="home_phone" />
      <TextInput source="finess_code" />
      <TextInput source="siret" />
      <TextInput source="vat_number" />
      <TextInput source="link_picture" />
      <SelectInput
        label="Droits Administrateur ?"
        source="admin"
        choices={[
          { id: "0", name: "Non" },
          { id: "1", name: "Oui" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
