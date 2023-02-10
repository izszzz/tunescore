// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file will be automatically regenerated when your Next.js server is running.
// nextjs-routes version: 1.0.8
/* eslint-disable */

// prettier-ignore
declare module "nextjs-routes" {
  export type Route =
    | DynamicRoute<"/albums/[id]", { "id": string }>
    | DynamicRoute<"/albums/[id]/settings", { "id": string }>
    | StaticRoute<"/albums">
    | StaticRoute<"/albums/new">
    | StaticRoute<"/api/agenda">
    | StaticRoute<"/api/audiveris">
    | DynamicRoute<"/api/auth/[...nextauth]", { "nextauth": string[] }>
    | StaticRoute<"/api/restricted">
    | DynamicRoute<"/api/trpc/[trpc]", { "trpc": string }>
    | DynamicRoute<"/artists/[id]", { "id": string }>
    | DynamicRoute<"/artists/[id]/settings", { "id": string }>
    | StaticRoute<"/artists">
    | StaticRoute<"/artists/new">
    | StaticRoute<"/auth/signin">
    | DynamicRoute<"/bands/[id]", { "id": string }>
    | DynamicRoute<"/bands/[id]/settings", { "id": string }>
    | StaticRoute<"/bands">
    | StaticRoute<"/bands/new">
    | StaticRoute<"/cart">
    | StaticRoute<"/dashboard/credits">
    | StaticRoute<"/dashboard">
    | StaticRoute<"/dashboard/library">
    | StaticRoute<"/dashboard/settings">
    | DynamicRoute<"/dashboard/transactions/[id]", { "id": string }>
    | StaticRoute<"/dashboard/transactions">
    | StaticRoute<"/">
    | DynamicRoute<"/musics/[id]", { "id": string }>
    | DynamicRoute<"/musics/[id]/issues/[issueId]", { "id": string; "issueId": string }>
    | DynamicRoute<"/musics/[id]/issues", { "id": string }>
    | DynamicRoute<"/musics/[id]/issues/new", { "id": string }>
    | DynamicRoute<"/musics/[id]/pulls/[pullId]/code", { "id": string; "pullId": string }>
    | DynamicRoute<"/musics/[id]/pulls/[pullId]", { "id": string; "pullId": string }>
    | DynamicRoute<"/musics/[id]/pulls/[pullId]/score/edit", { "id": string; "pullId": string }>
    | DynamicRoute<"/musics/[id]/pulls/[pullId]/score", { "id": string; "pullId": string }>
    | DynamicRoute<"/musics/[id]/pulls", { "id": string }>
    | DynamicRoute<"/musics/[id]/pulls/new", { "id": string }>
    | DynamicRoute<"/musics/[id]/settings", { "id": string }>
    | StaticRoute<"/musics">
    | StaticRoute<"/musics/new">
    | StaticRoute<"/pay">
    | DynamicRoute<"/scores/[id]/edit", { "id": string }>
    | DynamicRoute<"/scores/[id]", { "id": string }>
    | StaticRoute<"/scores">
    | StaticRoute<"/search">
    | StaticRoute<"/thanks">
    | DynamicRoute<"/users/[id]/bookmarks", { "id": string }>
    | DynamicRoute<"/users/[id]/followers", { "id": string }>
    | DynamicRoute<"/users/[id]/following", { "id": string }>
    | DynamicRoute<"/users/[id]", { "id": string }>
    | DynamicRoute<"/users/[id]/repositories", { "id": string }>
    | StaticRoute<"/users">;

  interface StaticRoute<Pathname> {
    pathname: Pathname;
    query?: Query | undefined;
    hash?: string | null | undefined;
  }

  interface DynamicRoute<Pathname, Parameters> {
    pathname: Pathname;
    query: Parameters & Query;
    hash?: string | null | undefined;
  }

  interface Query {
    [key: string]: string | string[] | undefined;
  };

  export type RoutedQuery<P extends Route["pathname"]> = Extract<
    Route,
    { pathname: P }
  >["query"];

  export type Locale = 
    | "en"
    | "ja";

  /**
   * A typesafe utility function for generating paths in your application.
   *
   * route({ pathname: "/foos/[foo]", query: { foo: "bar" }}) will produce "/foos/bar".
   */
  export declare function route(r: Route): string;
}

// prettier-ignore
declare module "next/link" {
  import type { Route } from "nextjs-routes";
  import type { LinkProps as NextLinkProps } from "next/dist/client/link";
  import type {
    AnchorHTMLAttributes,
    DetailedReactHTMLElement,
    MouseEventHandler,
    PropsWithChildren,
  } from "react";
  export * from "next/dist/client/link";

  type Query = { query?: { [key: string]: string | string[] | undefined } };
  type StaticRoute = Exclude<Route, { query: any }>["pathname"];

  export interface LinkProps
    extends Omit<NextLinkProps, "href" | "locale">,
      AnchorHTMLAttributes<HTMLAnchorElement> {
    href: Route | StaticRoute | Query;
    locale?: Locale | false;
  }

  type LinkReactElement = DetailedReactHTMLElement<
    {
      onMouseEnter?: MouseEventHandler<Element> | undefined;
      onClick: MouseEventHandler;
      href?: string | undefined;
      ref?: any;
    },
    HTMLElement
  >;

  declare function Link(props: PropsWithChildren<LinkProps>): LinkReactElement;

  export default Link;
}

// prettier-ignore
declare module "next/router" {
  import type { Locale, Route, RoutedQuery } from "nextjs-routes";
  import type { NextRouter as Router } from "next/dist/client/router";
  export * from "next/dist/client/router";
  export { default } from "next/dist/client/router";

  type NextTransitionOptions = NonNullable<Parameters<Router["push"]>[2]>;
  type StaticRoute = Exclude<Route, { query: any }>["pathname"];
  type Query = { query?: { [key: string]: string | string[] | undefined } };

  interface TransitionOptions extends Omit<NextTransitionOptions, "locale"> {
    locale?: Locale | false;
  }

  export type NextRouter<P extends Route["pathname"] = Route["pathname"]> =
    Extract<Route, { pathname: P }> &
      Omit<
        Router,
        | "push"
        | "replace"
        | "locale"
        | "locales"
        | "defaultLocale"
        | "domainLocales"
      > & {
        defaultLocale: "ja";
        domainLocales?: undefined;
        locale: Locale;
        locales: [
          "en",
          "ja"
        ];
        push(
          url: Route | StaticRoute | Query,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        replace(
          url: Route | StaticRoute | Query,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        route: P;
      };

  export function useRouter<P extends Route["pathname"]>(): NextRouter<P>;
}
