import {
  ListProps,
  List,
  Datagrid,
  NumberField,
  TextField,
  ReferenceField,
} from "react-admin";

export const WishlistList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <NumberField source="id_wishlist" />
      <TextField source="name" />
      <ReferenceField
        label="Opticien"
        source="id_optician"
        reference="opticians"
      >
        <>
          <TextField source="firstname" /> <TextField source="lastname" />,{" "}
          <TextField source="company" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);
