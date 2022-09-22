import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  choices,
  email,
  number,
} from "react-admin";
import { PostEditActions } from "../../helpers/PostEditActions";

const validateFirstname: Validator[] = [required(), minLength(2), maxLength(100)];
const validateLastname: Validator[] = [required(), minLength(2), maxLength(255)];
const validateCompany: Validator[] = [required(), minLength(2), maxLength(255)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validateOtherAddress: Validator[] = [minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{4,5}$/, "Entrez un code postal valide (4 à 5 chiffres selon pays)"),
];
const validateCity: Validator[] = [required(), minLength(2), maxLength(255)];
const validateEmail: Validator[] = [required(), email(), maxLength(255)];
const validateMobilePhone: Validator[] = [minLength(2), maxLength(50)];
const validatePassword: Validator[] = [
  required("Le mot de passe doit avoir au moins 8 caractères"),
  minLength(8),
  maxLength(100),
];
const validateWebsite: Validator[] = [minLength(2), maxLength(255)];
const validateHomePhone: Validator[] = [minLength(2), maxLength(50)];
const validateFinessCode: Validator[] = [number(), minLength(2), maxLength(20)];
const validateSiret: Validator[] = [number(), minLength(2), maxLength(25)];
const validateVatNumber: Validator[] = [number(), minLength(2), maxLength(45)];
const validateLinkPicture: Validator[] = [minLength(2), maxLength(255)];
const validateAdmin: Validator[] = [
  required(),
  choices(["0", "1"], "Préciser si cet utilisateur aura les droits administrateur ou non"),
];

export const OpticianCreate = (props: ListProps) => (
  <Create
    title="Rajouter un opticien" // Add a title to the page
    actions={<PostEditActions />} // Add custom buttons in adding screen
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="firstname" validate={validateFirstname} label="Prénom" />
      <TextInput source="lastname" validate={validateLastname} label="Nom" />
      <TextInput source="company" validate={validateCompany} label="Boutique/Société" />
      <TextInput source="address" validate={validateAddress} label="Adresse (numéro et rue)" />
      <TextInput source="other_address" validate={validateOtherAddress} label="Autre adresse" />
      <TextInput source="postal_code" validate={validatePostalCode} label="Code postal" />
      <TextInput source="city" validate={validateCity} label="Ville" />
      <TextInput source="email" validate={validateEmail} label="Email" />
      <TextInput source="mobile_phone" validate={validateMobilePhone} label="Tél. mobile" />
      <TextInput source="password" validate={validatePassword} label="Mot de passe" />
      <TextInput source="website" validate={validateWebsite} label="Site web" />
      <TextInput source="home_phone" validate={validateHomePhone} label="Tél. fixe" />
      <TextInput source="finess_code" validate={validateFinessCode} label="Code FINESS" />
      <TextInput source="siret" validate={validateSiret} label="N° SIRET" />
      <TextInput source="vat_number" validate={validateVatNumber} label="N° TVA" />
      <TextInput source="link_picture" validate={validateLinkPicture} label="Lien vers la photo" />
      <SelectInput
        label="Droits Administrateur ?"
        source="admin"
        choices={[
          { id: "0", name: "Non" },
          { id: "1", name: "Oui" },
        ]}
        validate={validateAdmin}
      />
    </SimpleForm>
  </Create>
);
