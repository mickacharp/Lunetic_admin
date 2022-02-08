import { ListProps, List, Datagrid, NumberField, TextField } from "react-admin";

export const CarouselList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id_carousel" />
      <TextField source="img_top1" label="Img1 Carousel Top" />
      <TextField source="img_top2" label="Img2 Carousel Top" />
      <TextField source="video" label="Vidéo Carousel Top" />
      <TextField source="img_bottom1" label="Img1 Carousel Bas" />
      <TextField source="img_bottom2" label="Img2 Carousel Bas" />
      <TextField source="img_bottom3" label="Img3 Carousel Bas" />
      <TextField source="img_top3" label="ImgOptionnelle (indisponible)" />
    </Datagrid>
  </List>
);
