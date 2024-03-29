import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PullListItem from "../../../../../components/elements/list/item/pull";

export default {
  title: "components/elements/list/item/pull",
  component: PullListItem,
} as ComponentMeta<typeof PullListItem>;

const Template: ComponentStory<typeof PullListItem> = (args) => (
  <PullListItem {...args} />
);

export const Open = Template.bind({});
Open.args = {
  data: {
    id: "1",
    title: "OPEN",
    body: "aaa",
    status: "OPEN",
    original: "",
    changed: "",
    user: {
      id: "1",
      name: "user",
      point: 0,
      image: "",
      stripeCustomerId: "",
      _count: {
        followers: 0,
        following: 0,
      },
    },
    musicId: "",
    userId: "",
  },
};

export const Close = Template.bind({});
Close.args = {
  data: {
    id: "1",
    title: "OPEN",
    body: "aaa",
    status: "CLOSE",
    original: "",
    changed: "",
    user: {
      id: "1",
      name: "user",
      point: 0,
      image: "",
      stripeCustomerId: "",
      _count: {
        followers: 0,
        following: 0,
      },
    },
    musicId: "",
    userId: "",
  },
};

export const Merge = Template.bind({});
Merge.args = {
  data: {
    id: "1",
    title: "Merge",
    body: "aaa",
    status: "MERGE",
    original: "",
    changed: "",
    user: {
      id: "1",
      name: "user",
      point: 0,
      image: "",
      stripeCustomerId: "",
      _count: {
        followers: 0,
        following: 0,
      },
    },
    musicId: "",
    userId: "",
  },
};
export const Draft = Template.bind({});
Draft.args = {
  data: {
    id: "1",
    title: "Merge",
    body: "aaa",
    status: "DRAFT",
    original: "",
    changed: "",
    user: {
      id: "1",
      name: "user",
      point: 0,
      image: "",
      stripeCustomerId: "",
      _count: {
        followers: 0,
        following: 0,
      },
    },
    musicId: "",
    userId: "",
  },
};
