import { expect } from "@storybook/jest";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";

import ResourceListItem from "../../../../../components/elements/list/item/resource";

const meta: ComponentMeta<typeof ResourceListItem> = {
  title: "components/elements/list/item/resource",
  component: ResourceListItem,
};
export default meta;

export const Music: ComponentStoryObj<typeof ResourceListItem> = {
  args: {
    data: {
      id: "1",
      unionType: "Music",
      links: [],
      bookmarks: [],
      tags: [],
      band: null,
      album: null,
      artist: null,
      _count: { bookmarks: 0 },
      name: {
        ja: "ミュージックカード",
        en: "MusicCard",
        resourceId: "",
      },
      music: {
        id: "",
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        isrc: "",
        score: "",
        lyric: "",
        price: 0,
        resourceId: "",
        userId: "",
        bandId: "",
        band: null,
        user: null,
        albums: [],
        participations: [],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("link").getAttribute("href")).toEqual("/musics/1");
  },
};
export const Album: ComponentStoryObj<typeof ResourceListItem> = {
  args: {
    data: {
      id: "1",
      unionType: "Album",
      links: [],
      bookmarks: [],
      tags: [],
      band: null,
      music: null,
      artist: null,
      _count: { bookmarks: 0 },
      name: {
        ja: "アルバム",
        en: "Album",
        resourceId: "",
      },
      album: {
        id: "",
        upc: null,
        resourceId: "",
        bandId: null,
        band: null,
        _count: {
          artists: 0,
          musics: 0,
        },
        artists: [],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("link").getAttribute("href")).toEqual("/albums/1");
  },
};

export const Artist: ComponentStoryObj<typeof ResourceListItem> = {
  args: {
    data: {
      id: "1",
      unionType: "Artist",
      links: [],
      bookmarks: [],
      tags: [],
      band: null,
      music: null,
      album: null,
      _count: { bookmarks: 0 },
      name: {
        ja: "アーティスト",
        en: "Artist",
        resourceId: "",
      },
      artist: {
        id: "",
        resourceId: "",
        bands: [],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("link").getAttribute("href")).toEqual("/artists/1");
  },
};

export const Band: ComponentStoryObj<typeof ResourceListItem> = {
  args: {
    data: {
      id: "1",
      unionType: "Band",
      links: [],
      bookmarks: [],
      tags: [],
      band: null,
      music: null,
      album: null,
      _count: { bookmarks: 0 },
      name: {
        ja: "バンド",
        en: "Band",
        resourceId: "",
      },
      artist: {
        id: "",
        resourceId: "",
        bands: [],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("link").getAttribute("href")).toEqual("/bands/1");
  },
};
