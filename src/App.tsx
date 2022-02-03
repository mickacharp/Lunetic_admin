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
import { TempleList } from "./TempleList";
import { WishlistList } from "./WishlistList";
import { NewsList } from "./NewsList";
import { NewsEdit } from "./NewsEdit";
import { NewsCreate } from "./NewsCreate";
import { OpeningHourList } from "./OpeningHourList";
import { CollectionList } from "./CollectionList";
import { ColorList } from "./ColorList";

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
    <Resource name="orders" list={OrderList} edit={EditGuesser} />
    <Resource name="temples" list={TempleList} edit={EditGuesser} />
    <Resource name="wishlists" list={WishlistList} edit={EditGuesser} />
    <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} />
    <Resource name="openinghours" list={OpeningHourList} edit={EditGuesser} />
    <Resource name="collections" list={CollectionList} edit={EditGuesser} />
    <Resource name="colors" list={ColorList} edit={EditGuesser} />
  </Admin>
);

export default App;
