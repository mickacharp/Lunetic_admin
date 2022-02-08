import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export const CarouselEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Add custom buttons in adding screen */}
    <SimpleForm>
      <NumberInput source="id_carousel" disabled />
      <TextInput source="img_top1" />
      <TextInput source="img_top2" />
      <TextInput source="img_top3" />
      <TextInput source="img_bottom1" />
      <TextInput source="img_bottom2" />
      <TextInput source="img_bottom3" />
      <TextInput source="video" />
    </SimpleForm>
  </Edit>
);
