import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const OpeningHourList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_opening_hour" />
      <TextField source="start_morning" />
      <TextField source="end_morning" />
      <TextField source="start_afternoon" />
      <TextField source="end_afternoon" />
      <NumberField source="id_optician" />
      <NumberField source="id_day" />
    </Datagrid>
  </List>
);
