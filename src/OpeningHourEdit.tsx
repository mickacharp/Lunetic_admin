import {
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export interface IOptician {
  firstname: string;
  lastname: string;
  company: string;
}
export interface IDay {
  name: string;
}

const optionRendererOptician = (optician: IOptician) =>
  `${optician.firstname} ${optician.lastname}, ${optician.company}`;
const optionRendererDay = (day: IDay) => `${day.name}`;

export const OpeningHourEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_opening_hour" disabled />
      <ReferenceInput source="id_day" reference="days">
        {/* Same as above but for the days */}
        <SelectInput optionText={optionRendererDay} />
      </ReferenceInput>
      <TextInput source="start_morning" />
      <TextInput source="end_morning" />
      <TextInput source="start_afternoon" />
      <TextInput source="end_afternoon" />
      <ReferenceInput source="id_optician" reference="opticians">
        {/* Allows to display a dropdown list that will show directly the name of the opticians instead of their "id_optician" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRendererOptician} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
