import Link from "next/link";
import { Fragment } from "react";

export interface TagsType {
  text: string;
  href?: string;
}

export interface CornerTagsType {
  tags: TagsType[];
}

interface CornerProps extends CornerTagsType {
  className: string;
}

const Href = ({ text, href }: TagsType) => <Link href={href}>{text}</Link>;

const Span = ({ text }: TagsType) => <span>{text}</span>;

const CornerRender = ({ text, href }: TagsType) => {
  const Component = href ? Href : Span;
  return (
    <Fragment key={text}>
      <Component text={text} href={href} />
      <br />
    </Fragment>
  );
};

export default function CornerComponent({ className, tags }: CornerProps) {
  return (
    <div
      className={`p-3 md:p-4 lg:p-5 fixed top-0 uppercase z-10 ${className}`}
    >
      {tags.map(CornerRender)}
    </div>
  );
}
