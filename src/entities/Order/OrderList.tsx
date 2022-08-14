import {
  ListProps,
  List,
  Datagrid,
  NumberField,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

export const OrderList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_order" />
      <ReferenceField label="Opticien" source="id_optician" reference="opticians">
        <>
          <TextField source="firstname" /> <TextField source="lastname" />,{" "}
          <TextField source="company" />
        </>
      </ReferenceField>
      <TextField source="link_pdf" label="Lien facture pdf" />
      <TextField source="order_number" label="Numéro de commande" />
      <DateField source="date" />
    </Datagrid>
  </List>
);
