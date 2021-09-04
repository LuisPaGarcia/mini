import Corner from "./Corner";
import { CornerTagsType } from "./Corner";

export default function RightCorner({ tags }: CornerTagsType) {
  return <Corner className="left-0 text-left" tags={tags} />;
}
