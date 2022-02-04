import {
  ListProps,
  List,
  Datagrid,
  NumberField,
  TextField,
  ReferenceField,
} from "react-admin";

export const OpeningHourList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_opening_hour" />
      <ReferenceField label="Jour" source="id_day" reference="days">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <TextField source="start_morning" label="Ouverture matin" />
      <TextField source="end_morning" label="Fermeture matin" />
      <TextField source="start_afternoon" label="Ouverture après-midi" />
      <TextField source="end_afternoon" label="Fermeture après-midi" />
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
