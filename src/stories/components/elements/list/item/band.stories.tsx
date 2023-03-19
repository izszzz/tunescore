import type { ComponentMeta, ComponentStory } from "@storybook/react";

import BandListItem from "../../../../../components/elements/list/item/band";

export default {
  title: "components/elements/list/item/band",
  component: BandListItem,
} as ComponentMeta<typeof BandListItem>;

const Template: ComponentStory<typeof BandListItem> = (args) => (
  <BandListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    resource: {
      id: "",
      name: { ja: "バンドリストアイテム", en: "BandListItem" },
      link: null,
      unionType: "Artist",
      bookmarks: [],
      _count: { bookmarks: 3 },
    },
    resourceId: "",
    _count: {
      musics: 0,
      artists: 0,
      albums: 0,
    },
    artistIDs: [],
  },
};
