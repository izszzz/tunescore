import type { ComponentMeta, ComponentStory } from "@storybook/react";

import UserListItem from "../../../../../components/elements/list/item/user";

export default {
  title: "components/elements/list/item/user",
  component: UserListItem,
} as ComponentMeta<typeof UserListItem>;

const Template: ComponentStory<typeof UserListItem> = (args) => (
  <UserListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    name: "User",
    point: 0,
    image: "",
    stripeCustomerId: "",
    _count: {
      followers: 0,
      following: 0,
    },
  },
};
