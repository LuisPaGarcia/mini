import RightCorner from "./RightCorner";
import LeftCorner from "./LeftCorner";
import { useContext } from "react";
import { GlobalContext } from "../store/globalContext";

export default function Header() {
  const {
    config: {
      menu: { left, right },
    },
  } = useContext(GlobalContext);

  return (
    <header>
      <LeftCorner tags={left} />
      <RightCorner tags={right} />
    </header>
  );
}
