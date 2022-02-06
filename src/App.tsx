import { Admin, Resource, fetchUtils, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
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
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="models"
      list={ModelList}
      edit={ModelEdit}
      create={ModelCreate}
    />
    <Resource
      name="opticians"
      list={OpticianList}
      edit={OpticianEdit}
      create={OpticianCreate}
    />
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
    />
    <Resource
      name="temples"
      list={TempleList}
      edit={TempleEdit}
      create={TempleCreate}
    />
    <Resource name="wishlists" list={WishlistList} />
    <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} />
    <Resource
      name="openinghours"
      list={OpeningHourList}
      edit={OpeningHourEdit}
      create={OpeningHourCreate}
    />
    <Resource name="days" />
    <Resource
      name="collections"
      list={CollectionList}
      edit={CollectionEdit}
      create={CollectionCreate}
    />
    <Resource
      name="colors"
      list={ColorList}
      edit={ColorEdit}
      create={ColorCreate}
    />
  </Admin>
);

export default App;
