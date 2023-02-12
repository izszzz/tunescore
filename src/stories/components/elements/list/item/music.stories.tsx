import { ComponentMeta, ComponentStory } from "@storybook/react";
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
    id: "1",
    type: "ORIGINAL",
    visibility: "PUBLIC",
    score: "",
    price: 0,
    title: { ja: "ミュージックリストアイテム", en: "MusicListItem" },
    link: null,
    _count: {
      bookmarks: 2,
    },
    userId: "",
    bandId: "",
    user: null,
    participations: [],
    band: null,
    bookmarks: [],
    albumIDs: [],
  },
};

export const Copy = Template.bind({});
Copy.args = {
  data: {
    id: "1",
    type: "COPY",
    visibility: "PUBLIC",
    score: "",
    price: 0,
    title: { ja: "ミュージックリストアイテム", en: "MusicListItem" },
    link: null,
    _count: {
      bookmarks: 2,
    },
    userId: "",
    bandId: "",
    user: null,
    participations: [],
    band: null,
    bookmarks: [],
    albumIDs: [],
  },
};
