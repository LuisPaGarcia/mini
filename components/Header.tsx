import RightCorner from "./RightCorner";
import LeftCorner from "./LeftCorner";
import { useContext } from "react";
import { GlobalContext } from "../store/globalContext";
import LilDude from "./LilDude";

export default function Header() {
  const {
    config: {
      menu: { left, right },
    },
  } = useContext(GlobalContext);

  return (
    <header>
      <LeftCorner tags={left} />
      <LilDude />
      <RightCorner tags={right} />
    </header>
  );
}
