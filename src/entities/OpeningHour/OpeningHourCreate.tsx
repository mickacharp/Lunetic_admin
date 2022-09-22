import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  Validator,
  minLength,
  maxLength,
  ReferenceInput,
  required,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateOpeningHour: Validator[] = [maxLength(45)];
const validateReference: Validator[] = [required()];

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

export const OpeningHourCreate = (props: ListProps) => (
  <Create
    title="Rajouter une monture" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="id_day" reference="days" validate={validateReference}>
        {/* Allows to display a dropdown list that will show directly the name of the days instead of their "id_day" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRendererDay} />
      </ReferenceInput>
      <TextInput source="start_morning" validate={validateOpeningHour} />
      <TextInput source="end_morning" validate={validateOpeningHour} />
      <TextInput source="start_afternoon" validate={validateOpeningHour} />
      <TextInput source="end_afternoon" validate={validateOpeningHour} />
      <ReferenceInput source="id_optician" reference="opticians" validate={validateReference}>
        {/* Same as the ReferenceInput above but for the opticians */}
        <SelectInput optionText={optionRendererOptician} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
