import { ComponentMeta, ComponentStory } from "@storybook/react";
import PullButton from "../../../../../components/elements/button/group/pull";

export default {
  title: "components/elements/button/group/pull",
  component: PullButton,
} as ComponentMeta<typeof PullButton>;

const Template: ComponentStory<typeof PullButton> = (args) => (
  <PullButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: "",
    title: "",
    body: "",
    score: { original: "", changed: "" },
    status: "OPEN",
    music: {
      id: "1",
      type: "ORIGINAL",
      score: "",
      visibility: "PUBLIC",
      price: 0,
      link: null,
      title: { ja: "", en: "" },
      userId: "",
      bandId: "",
      albumIDs: [],
    },
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
    vote: null,
    musicId: "",
    userId: "",
  },
  conflict: false,
  diff: true,
  loading: false,
  onOpen: () => {
    console.log("open");
  },
  onMerge: () => {
    console.log("merge");
  },
  onClose: () => {
    console.log("close");
  },
  onDraft: () => {
    console.log("draft");
  },
  onVote: () => {
    console.log("vote");
  },
};
