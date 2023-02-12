import { ComponentMeta, ComponentStory } from "@storybook/react";
import TransactionListItem from "../../../../../components/elements/list/item/transaction";

export default {
  title: "components/elements/list/item/transaction",
  component: TransactionListItem,
} as ComponentMeta<typeof TransactionListItem>;

const Template: ComponentStory<typeof TransactionListItem> = (args) => (
  <TransactionListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "1",
    type: "PURCHASE",
    amount: 300,
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
    music: null,
    musicId: "",
    userId: "",
    stripePaymentIntentId: "",
    createdAt: new Date(),
  },
};
