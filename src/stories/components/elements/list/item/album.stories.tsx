import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AlbumListItem from "../../../../../components/elements/list/item/album";

export default {
  title: "components/elements/list/item/album",
  component: AlbumListItem,
} as ComponentMeta<typeof AlbumListItem>;

const Template: ComponentStory<typeof AlbumListItem> = (args) => (
  <AlbumListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    title: { ja: "アルバムリストアイテム", en: "AlbumListItem" },
    link: null,
    band: null,
    bandId: "",
    _count: {
      musics: 1,
      bookmarks: 2,
      artists: 3,
    },
    artists: [],
    bookmarks: [],
    musicIDs: [],
    artistIDs: [],
  },
};
