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
    id: "",
    name: {
      ja: "アルバムリストアイテム",
      en: "AlbumListItem",
      resourceId: "",
    },
    tags: [],
    links: [],
    unionType: "Album",
    bookmarks: [],
    _count: { bookmarks: 3 },
    album: {
      id: "1",
      resourceId: "",
      upc: "",
      band: null,
      bandId: "",
      _count: {
        musics: 1,
        artists: 3,
      },
      artists: [],
    },
  },
};
