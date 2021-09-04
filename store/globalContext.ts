import * as React from "react";
import { TagsType } from "../components/Corner";

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

const globalContext: GlobalContextType = {
  config: {
    menu: {
      left: [
        { text: "luispa garcia", href: "/" },
        { text: "about", href: "/about" },
      ],
      right: [{ text: "blog", href: "/blog" }],
    },
  },
};

const GlobalContext = React.createContext(globalContext);

export { GlobalContext };
