import * as React from "react";
import { TagsType } from "../components/Corner";
import config from "./config";
interface GlobalContextMenuType {
  left: TagsType[];
  right: TagsType[];
}

interface GlobalContextConfigType {
  menu: GlobalContextMenuType;
}

interface GlobalContextType {
  config: GlobalContextConfigType;
}

const globalContext: GlobalContextType = config;

const GlobalContext = React.createContext(globalContext);

export { GlobalContext };
