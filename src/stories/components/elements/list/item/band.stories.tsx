import { ComponentMeta, ComponentStory } from "@storybook/react";
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
    name: { ja: "バンドリストアイテム", en: "BandListItem" },
    link: null,
    _count: {
      bookmarks: 2,
      musics: 0,
      artists: 0,
      albums: 0,
    },
    bookmarks: [],
    artistIDs: [],
  },
};
