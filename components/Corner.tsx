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

export default function CornerComponent({ className, tags }: CornerProps) {
  return (
    <div className={`p-3 fixed top-0 md:p-4 lg:p-5 uppercase ${className}`}>
      {tags.map(({ text }) => (
        <>
          <span>{text}</span>
          <br />
        </>
      ))}
    </div>
  );
}
