import { Admin, Resource, fetchUtils, Layout } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import TreeMenu from "@bb-tech/ra-treemenu";
import authProvider from "./helpers/authProvider";

// Entities imports
import { ModelList } from "./entities/Model/ModelList";
import { ModelEdit } from "./entities/Model/ModelEdit";
import { ModelCreate } from "./entities/Model/ModelCreate";
import { OpticianList } from "./entities/Optician/OpticianList";
import { OpticianEdit } from "./entities/Optician/OpticianEdit";
import { OpticianCreate } from "./entities/Optician/OpticianCreate";
import { OrderList } from "./entities/Order/OrderList";
import { OrderEdit } from "./entities/Order/OrderEdit";
import { OrderCreate } from "./entities/Order/OrderCreate";
import { TempleList } from "./entities/Temple/TempleList";
import { TempleEdit } from "./entities/Temple/TempleEdit";
import { TempleCreate } from "./entities/Temple/TempleCreate";
import { WishlistList } from "./entities/Wishlist/WishlistList";
import { NewsList } from "./entities/News/NewsList";
import { NewsEdit } from "./entities/News/NewsEdit";
import { NewsCreate } from "./entities/News/NewsCreate";
import { OpeningHourList } from "./entities/OpeningHour/OpeningHourList";
import { OpeningHourEdit } from "./entities/OpeningHour/OpeningHourEdit";
import { OpeningHourCreate } from "./entities/OpeningHour/OpeningHourCreate";
import { CollectionList } from "./entities/Collection/CollectionList";
import { CollectionEdit } from "./entities/Collection/CollectionEdit";
import { CollectionCreate } from "./entities/Collection/CollectionCreate";
import { ColorList } from "./entities/Color/ColorList";
import { ColorEdit } from "./entities/Color/ColorEdit";
import { ColorCreate } from "./entities/Color/ColorCreate";
import { ModelTempleColorList } from "./entities/ModelTempleColor/ModelTempleColorList";
import { ModelTempleColorEdit } from "./entities/ModelTempleColor/ModelTempleColorEdit";
import { ModelTempleColorCreate } from "./entities/ModelTempleColor/ModelTempleColorCreate";
import { CarouselList } from "./entities/Carousel/CarouselList";
import { CarouselEdit } from "./entities/Carousel/CarouselEdit";
import { ConceptImageList } from "./entities/ConceptImage/ConceptImageList";
import { ConceptImageEdit } from "./entities/ConceptImage/ConceptImageEdit";
import { ModelImageList } from "./entities/ModelImage/ModelImageList";
import { ModelImageEdit } from "./entities/ModelImage/ModelImageEdit";
import { UsImageList } from "./entities/UsImage/UsImageList";
import { UsImageEdit } from "./entities/UsImage/UsImageEdit";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider("http://localhost:4000/api", httpClient);
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
    {/* Creating a wishlist folder */}
    <Resource name="wishlist-parent" options={{ label: "Wishlists", isMenuParent: true }} />
    {/* Creating a wishlist child */}
    <Resource
      name="wishlists"
      list={WishlistList}
      options={{ label: "Listes", menuParent: "wishlist-parent" }}
    />
    {/* Creating a second wishlist child */}
    <Resource
      name="glasses"
      list={ModelTempleColorList}
      edit={ModelTempleColorEdit}
      create={ModelTempleColorCreate}
      options={{ label: "Contenu (lunettes)", menuParent: "wishlist-parent" }}
    />
    {/* Creating a images folder */}
    <Resource name="pages-images" options={{ label: "Ressources images", isMenuParent: true }} />
    <Resource
      name="carousels"
      list={CarouselList}
      edit={CarouselEdit}
      options={{ label: "Carousels Accueil", menuParent: "pages-images" }}
    />
    <Resource
      name="concept-images"
      list={ConceptImageList}
      edit={ConceptImageEdit}
      options={{ label: "Images Concept", menuParent: "pages-images" }}
    />
    <Resource
      name="models-images"
      list={ModelImageList}
      edit={ModelImageEdit}
      options={{ label: "Images Montures", menuParent: "pages-images" }}
    />
    <Resource
      name="us-images"
      list={UsImageList}
      edit={UsImageEdit}
      options={{ label: "Images Nous", menuParent: "pages-images" }}
    />
    <Resource name="days" />
  </Admin>
);

export default App;
