// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// This file will be automatically regenerated when your Next.js server is running.
/* eslint-disable */

// prettier-ignore
declare module "nextjs-routes" {
  export type Route =
    | { pathname: "/albums/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/albums/[id]/settings"; query: Query<{ "id": string }> }
    | { pathname: "/albums"; query?: Query | undefined }
    | { pathname: "/albums/new"; query?: Query | undefined }
    | { pathname: "/api/agenda"; query?: Query | undefined }
    | { pathname: "/api/auth/[...nextauth]"; query: Query<{ "nextauth": string[] }> }
    | { pathname: "/api/restricted"; query?: Query | undefined }
    | { pathname: "/api/spotify/search"; query?: Query | undefined }
    | { pathname: "/api/spotify/tracks/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/api/trpc/[trpc]"; query: Query<{ "trpc": string }> }
    | { pathname: "/api/youtube/channels/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/api/youtube/search"; query?: Query | undefined }
    | { pathname: "/api/youtube/videos/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/artists/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/artists/[id]/settings"; query: Query<{ "id": string }> }
    | { pathname: "/artists"; query?: Query | undefined }
    | { pathname: "/artists/new"; query?: Query | undefined }
    | { pathname: "/bands/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/bands/[id]/settings"; query: Query<{ "id": string }> }
    | { pathname: "/bands"; query?: Query | undefined }
    | { pathname: "/bands/new"; query?: Query | undefined }
    | { pathname: "/"; query?: Query | undefined }
    | { pathname: "/musics/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/musics/[id]/issues/[issueId]"; query: Query<{ "id": string; "issueId": string }> }
    | { pathname: "/musics/[id]/issues"; query: Query<{ "id": string }> }
    | { pathname: "/musics/[id]/issues/new"; query: Query<{ "id": string }> }
    | { pathname: "/musics/[id]/pulls/[pullId]/code"; query: Query<{ "id": string; "pullId": string }> }
    | { pathname: "/musics/[id]/pulls/[pullId]"; query: Query<{ "id": string; "pullId": string }> }
    | { pathname: "/musics/[id]/pulls/[pullId]/score/edit"; query: Query<{ "id": string; "pullId": string }> }
    | { pathname: "/musics/[id]/pulls/[pullId]/score"; query: Query<{ "id": string; "pullId": string }> }
    | { pathname: "/musics/[id]/pulls"; query: Query<{ "id": string }> }
    | { pathname: "/musics/[id]/pulls/new"; query: Query<{ "id": string }> }
    | { pathname: "/musics/[id]/settings"; query: Query<{ "id": string }> }
    | { pathname: "/musics"; query?: Query | undefined }
    | { pathname: "/musics/new"; query?: Query | undefined }
    | { pathname: "/scores/[id]/edit"; query: Query<{ "id": string }> }
    | { pathname: "/scores/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/scores"; query?: Query | undefined }
    | { pathname: "/search"; query?: Query | undefined }
    | { pathname: "/users/[id]/bookmarks"; query: Query<{ "id": string }> }
    | { pathname: "/users/[id]/followers"; query: Query<{ "id": string }> }
    | { pathname: "/users/[id]/following"; query: Query<{ "id": string }> }
    | { pathname: "/users/[id]"; query: Query<{ "id": string }> }
    | { pathname: "/users/[id]/repositories"; query: Query<{ "id": string }> }
    | { pathname: "/users/[id]/settings"; query: Query<{ "id": string }> }
    | { pathname: "/users"; query?: Query | undefined };

  type Query<Params = {}> = Params & {
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
  import type { PropsWithChildren, MouseEventHandler } from "react";
  export * from "next/dist/client/link";

  type Query = { query?: { [key: string]: string | string[] | undefined } };
  type StaticRoute = Exclude<Route, { query: any }>["pathname"];

  export interface LinkProps<Href extends Route | Query = Route | Query>
    extends Omit<NextLinkProps, "href" | "locale"> {
    href: Href;
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

  declare function Link(
    props: PropsWithChildren<LinkProps<Route>>
  ): LinkReactElement;
  declare function Link(
    props: PropsWithChildren<LinkProps<StaticRoute>>
  ): LinkReactElement;
  declare function Link(
    props: PropsWithChildren<LinkProps<Query>>
  ): LinkReactElement;

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

  interface TransitionOptions extends Omit<NextTransitionOptions, "locale"> {
    locale?: Locale | false;
  };

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
          url: Route,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        push(
          url: StaticRoute,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        push(
          url: { query?: { [key: string]: string | string[] | undefined } },
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        replace(
          url: Route,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        replace(
          url: StaticRoute,
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        replace(
          url: { query?: { [key: string]: string | string[] | undefined } },
          as?: string,
          options?: TransitionOptions
        ): Promise<boolean>;
        route: P;
      }

  export function useRouter<P extends Route["pathname"]>(): NextRouter<P>;
}
