// reference: https://github.com/mui/material-ui/blob/v5.11.16/examples/material-next-ts/src/Link.tsx
import * as React from "react";

// import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
// import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
// import clsx from "clsx";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
// import { useRouter } from "next/router";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<
      NextLinkProps,
      "href" | "as" | "passHref" | "onMouseEnter" | "onClick" | "onTouchStart"
    > {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior = true,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      as={linkAs}
      href={to}
      legacyBehavior={legacyBehavior}
      locale={locale}
      passHref
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});

// type LinkProps = {
//   activeClassName?: string;
//   as?: NextLinkProps["as"];
//   href: NextLinkProps["href"];
//   linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
//   noLinkStyle?: boolean;
// } & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
//   Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
// const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
//   props,
//   ref
// ) {
//   const {
//     activeClassName = "active",
//     as,
//     className: classNameProps,
//     href,
//     legacyBehavior,
//     linkAs: linkAsProp,
//     locale,
//     noLinkStyle,
//     prefetch,
//     replace,
//     role, // Link don't have roles.
//     scroll,
//     shallow,
//     ...other
//   } = props;

//   const router = useRouter();
//   const pathname = typeof href === "string" ? href : href;
//   const className = clsx(classNameProps, {
//     [activeClassName]: router.pathname === pathname && activeClassName,
//   });

//   const isExternal =
//     typeof href === "string" &&
//     (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

//   if (isExternal) {
//     if (noLinkStyle) {
//       return <Anchor className={className} href={href} ref={ref} {...other} />;
//     }

//     return <MuiLink className={className} href={href} ref={ref} {...other} />;
//   }

//   const linkAs = linkAsProp || as;
//   const nextjsProps = {
//     to: href,
//     linkAs,
//     replace,
//     scroll,
//     shallow,
//     prefetch,
//     legacyBehavior,
//     locale,
//   };

//   if (noLinkStyle) {
//     return (
//       <NextLinkComposed
//         className={className}
//         ref={ref}
//         {...nextjsProps}
//         {...other}
//       />
//     );
//   }

//   return (
//     <MuiLink
//       className={className}
//       component={NextLinkComposed}
//       ref={ref}
//       {...nextjsProps}
//       {...other}
//     />
//   );
// });

// export default Link;
