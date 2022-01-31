import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ListProps,
  NumberField,
  TextField,
} from "ra-ui-materialui";

export const OpticianList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_optician" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="company" />
      <TextField source="address" />
      <TextField source="other_address" />
      <DateField source="postal_code" />
      <TextField source="city" />
      <EmailField source="email" />
      <TextField source="mobile_phone" />
      <TextField source="password" />
      <TextField source="website" />
      <TextField source="home_phone" />
      <TextField source="finess_code" />
      <TextField source="siret" />
      <TextField source="vat_number" />
      <TextField source="link_picture" />
      <TextField source="lat" />
      <TextField source="lng" />
      <NumberField source="admin" />
    </Datagrid>
  </List>
);
