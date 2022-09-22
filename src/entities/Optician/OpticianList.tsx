import { Datagrid, EmailField, List, ListProps, NumberField, TextField } from "ra-ui-materialui";
import BooleanNumField from "../../helpers/BooleanNumField.jsx";

export const OpticianList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_optician" />
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <TextField source="company" label="Société/Boutique" />
      <TextField source="address" label="Adresse princ" />
      <TextField source="other_address" label="Adresse sec" />
      <NumberField source="postal_code" label="Code Postal" />
      <TextField source="city" label="Ville" />
      <EmailField source="email" label="Email" />
      <TextField source="mobile_phone" label="Tél mobile" />
      <TextField source="home_phone" label="Tél fixe" />
      <TextField source="website" label="Site web" />
      <TextField source="finess_code" label="FINESS" />
      <TextField source="siret" label="SIRET" />
      <TextField source="vat_number" label="N° TVA" />
      <TextField source="link_picture" label="Lien Photo" />
      <BooleanNumField source="admin" />
    </Datagrid>
  </List>
);
