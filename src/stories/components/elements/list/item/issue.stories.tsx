import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IssueListItem from "../../../../../components/elements/list/item/issue";

export default {
  title: "components/elements/list/item/issue",
  component: IssueListItem,
} as ComponentMeta<typeof IssueListItem>;

const Template: ComponentStory<typeof IssueListItem> = (args) => (
  <IssueListItem {...args} />
);

export const Open = Template.bind({});
Open.args = {
  data: {
    id: "1",
    title: "Open",
    body: "aaa",
    status: "OPEN",
    user: {
      id: "1",
      name: "user",
      email: "",
      point: 0,
      image: "",
      emailVerified: null,
      stripeCustomerId: "",
      voteIDs: [],
    },
    musicId: "",
    userId: "",
  },
};

export const Close = Template.bind({});
Close.args = {
  data: {
    id: "1",
    title: "Close",
    body: "aaa",
    status: "CLOSE",
    user: {
      id: "1",
      name: "user",
      email: "",
      point: 0,
      image: "",
      emailVerified: null,
      stripeCustomerId: "",
      voteIDs: [],
    },
    musicId: "",
    userId: "",
  },
};
