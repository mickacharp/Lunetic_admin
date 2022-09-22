import {
  ListProps,
  Create,
  SimpleForm,
  SelectInput,
  Validator,
  required,
  ReferenceInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateReference: Validator[] = [required()];

export interface IModel {
  name: string;
}
export interface IColor {
  name: string;
}
export interface IWishlist {
  name: string;
}

const optionRendererModel = (model: IModel) => `${model.name}`;
const optionRendererColor = (color: IColor) => `${color.name}`;
const optionRendererWishlist = (wishlist: IWishlist) => `${wishlist.name}`;

export const ModelTempleColorCreate = (props: ListProps) => (
  <Create
    title="Rajouter une monture" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm>
      <NumberInput source="id_model_temple_color" disabled />
      <ReferenceInput
        source="id_model"
        reference="models"
        label="Monture"
        validate={validateReference}
        fullWidth
      >
        {/* Allows to display a dropdown list that will show directly the "name" of the models instead of their "id_model" thanks to the optionRenderer function defined above */}
        <SelectInput optionText={optionRendererModel} />
      </ReferenceInput>
      <ReferenceInput
        source="id_color_model"
        reference="colors"
        label="Couleur"
        validate={validateReference}
        fullWidth
      >
        <SelectInput optionText={optionRendererColor} />
      </ReferenceInput>
      <ReferenceInput
        source="id_wishlist"
        reference="wishlists"
        label="Nom Wishlist"
        validate={validateReference}
        fullWidth
      >
        <SelectInput optionText={optionRendererWishlist} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
