import { Edit, ListProps, NumberInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

export const OpticianEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_optician" disabled />
      <TextInput source="firstname" fullWidth multiline />
      <TextInput source="lastname" fullWidth multiline />
      <TextInput source="company" fullWidth multiline />
      <TextInput source="address" fullWidth multiline />
      <TextInput source="other_address" fullWidth multiline />
      <TextInput source="postal_code" fullWidth multiline />
      <TextInput source="city" fullWidth multiline />
      <TextInput source="email" fullWidth multiline />
      <TextInput source="mobile_phone" fullWidth multiline />
      <TextInput source="password" fullWidth multiline />
      <TextInput source="website" fullWidth multiline />
      <TextInput source="home_phone" fullWidth multiline />
      <TextInput source="finess_code" fullWidth multiline />
      <TextInput source="siret" fullWidth multiline />
      <TextInput source="vat_number" fullWidth multiline />
      <TextInput source="link_picture" fullWidth multiline />
      <SelectInput
        label="Droits Administrateur ?"
        source="admin"
        choices={[
          { id: "0", name: "Non" },
          { id: "1", name: "Oui" },
        ]}
        fullWidth
      />
    </SimpleForm>
  </Edit>
);
