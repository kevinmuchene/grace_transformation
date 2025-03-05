import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="font-bold mb-0 fade-in text-center pb-4 md:py-10 text-2xl md:text-3xl lg:text-5xl leading-relaxed md:my-10"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-gray-800 font-bold mt-8 mb-2 p-2 text-2xl md:my-10" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-gray-800 font-bold mt-8 mb-3" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-bold" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 leading-loose p-2 text-lg" {...props} />
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="p-1 text-blue-700 italic"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 list-decimal pl-5 space-y-2 leading-loose text-lg"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 list-disc pl-5 space-y-1 leading-loose text-lg"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="p-2" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold p-3" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-blue-500 hover:text-blue-700";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },

  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
