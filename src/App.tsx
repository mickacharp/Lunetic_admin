import { Admin, Resource, fetchUtils, Layout } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import TreeMenu from "@bb-tech/ra-treemenu";
import authProvider from "./authProvider";
import { ModelList } from "./ModelList";
import { ModelEdit } from "./ModelEdit";
import { ModelCreate } from "./ModelCreate";
import { OpticianList } from "./OpticianList";
import { OpticianEdit } from "./OpticianEdit";
import { OpticianCreate } from "./OpticianCreate";
import { OrderList } from "./OrderList";
import { OrderEdit } from "./OrderEdit";
import { OrderCreate } from "./OrderCreate";
import { TempleList } from "./TempleList";
import { TempleEdit } from "./TempleEdit";
import { TempleCreate } from "./TempleCreate";
import { WishlistList } from "./WishlistList";
import { NewsList } from "./NewsList";
import { NewsEdit } from "./NewsEdit";
import { NewsCreate } from "./NewsCreate";
import { OpeningHourList } from "./OpeningHourList";
import { OpeningHourEdit } from "./OpeningHourEdit";
import { OpeningHourCreate } from "./OpeningHourCreate";
import { CollectionList } from "./CollectionList";
import { CollectionEdit } from "./CollectionEdit";
import { CollectionCreate } from "./CollectionCreate";
import { ColorList } from "./ColorList";
import { ColorEdit } from "./ColorEdit";
import { ColorCreate } from "./ColorCreate";
import { ModelTempleColorList } from "./ModelTempleColorList";
import { ModelTempleColorEdit } from "./ModelTempleColorEdit";
import { ModelTempleColorCreate } from "./ModelTempleColorCreate";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:4000/api",
  httpClient
);
const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={(props) => <Layout {...props} menu={TreeMenu} />}
  >
    <Resource
      name="temples"
      list={TempleList}
      edit={TempleEdit}
      create={TempleCreate}
      options={{ label: "Branches" }}
    />
    <Resource
      name="collections"
      list={CollectionList}
      edit={CollectionEdit}
      create={CollectionCreate}
      options={{ label: "Collections" }}
    />
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
      options={{ label: "Commandes" }}
    />
    <Resource
      name="colors"
      list={ColorList}
      edit={ColorEdit}
      create={ColorCreate}
      options={{ label: "Couleurs" }}
    />
    <Resource
      name="openinghours"
      list={OpeningHourList}
      edit={OpeningHourEdit}
      create={OpeningHourCreate}
      options={{ label: "Horaires opticiens" }}
    />
    <Resource
      name="models"
      list={ModelList}
      edit={ModelEdit}
      create={ModelCreate}
      options={{ label: "Montures" }}
    />
    <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} />
    <Resource
      name="opticians"
      list={OpticianList}
      edit={OpticianEdit}
      create={OpticianCreate}
      options={{ label: "Opticiens" }}
    />
    <Resource
      name="wishlist-parent"
      options={{ label: "Wishlists", isMenuParent: true }}
    />
    <Resource
      name="wishlists"
      list={WishlistList}
      options={{ label: "Listes", menuParent: "wishlist-parent" }}
    />
    <Resource
      name="glasses"
      list={ModelTempleColorList}
      edit={ModelTempleColorEdit}
      create={ModelTempleColorCreate}
      options={{ label: "Contenu (lunettes)", menuParent: "wishlist-parent" }}
    />
    <Resource name="days" />
  </Admin>
);

export default App;
