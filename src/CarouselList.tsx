import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const CarouselList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_carousel" />
      <TextField source="img_top1" />
      <TextField source="img_top2" />
      <TextField source="img_top3" />
      <TextField source="img_bottom1" />
      <TextField source="img_bottom2" />
      <TextField source="img_bottom3" />
      <TextField source="video" />
    </Datagrid>
  </List>
);
