import type { ComponentMeta, ComponentStory } from "@storybook/react";

import MusicListItem from "../../../../../components/elements/list/item/music";

export default {
  title: "components/elements/list/item/music",
  component: MusicListItem,
} as ComponentMeta<typeof MusicListItem>;

const Template: ComponentStory<typeof MusicListItem> = (args) => (
  <MusicListItem {...args} />
);

export const Original = Template.bind({});
Original.args = {
  data: {
    isrc: null,
    id: "1",
    type: "ORIGINAL",
    visibillity: "PUBLIC",
    lyric: "",
    score: "",
    price: 0,
    resource: {
      id: "",
      name: { ja: "ミュージックリストアイテム", en: "MusicListItem" },
      link: null,
      unionType: "Music",
      bookmarks: [],
      _count: { bookmarks: 3 },
    },
    resourceId: "",
    userId: "",
    bandId: "",
    user: null,
    participations: [],
    band: null,
    albumIDs: [],
    albums: [],
  },
};

export const Copy = Template.bind({});
Copy.args = {
  data: {
    isrc: null,
    id: "1",
    type: "COPY",
    visibillity: "PUBLIC",
    lyric: "",
    score: "",
    price: 0,
    resource: {
      id: "",
      name: { ja: "ミュージックリストアイテム", en: "MusicListItem" },
      link: null,
      unionType: "Music",
      bookmarks: [],
      _count: { bookmarks: 3 },
    },
    resourceId: "",
    userId: "",
    bandId: "",
    user: null,
    participations: [],
    band: null,
    albumIDs: [],
    albums: [],
  },
};
