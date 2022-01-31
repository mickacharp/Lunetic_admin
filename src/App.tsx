import * as React from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  EditGuesser,
  ListGuesser,
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";
import { ModelList } from "./ModelList";
import { OpticianList } from "./OpticianList";
import AddressList from "./AddressList";
import { AddressEdit } from "./AddressEdit";
import { AddressCreate } from "./AddressCreate";

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
    <Resource name="models" list={ModelList} edit={EditGuesser} />
    <Resource name="opticians" list={OpticianList} edit={EditGuesser} />
    <Resource
      name="addresses"
      list={AddressList}
      edit={AddressEdit}
      create={AddressCreate}
    />
  </Admin>
);

export default App;
