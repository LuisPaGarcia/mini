import Corner from "./Corner";
import { CornerTagsType } from "./Corner";

export default function RightCorner({ tags }: CornerTagsType) {
  return <Corner className="right-0 text-right" tags={tags} />;
}
