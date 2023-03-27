import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ArtistListItem from "../../../../../components/elements/list/item/artist";

export default {
  title: "components/elements/list/item/artist",
  component: ArtistListItem,
} as ComponentMeta<typeof ArtistListItem>;

const Template: ComponentStory<typeof ArtistListItem> = (args) => (
  <ArtistListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    resource: {
      id: "",
      name: {
        ja: "アーティストリストアイテム",
        en: "ArtistListItem",
        resourceId: "",
      },
      links: [],
      unionType: "Artist",
      bookmarks: [],
      _count: { bookmarks: 3 },
    },
    resourceId: "",
    bands: [],
  },
};
