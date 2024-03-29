import type { ComponentMeta, ComponentStory } from "@storybook/react";

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
    original: "",
    changed: "",
    status: "OPEN",
    music: {
      id: "1",
      isrc: null,
      type: "ORIGINAL",
      score: "",
      visibillity: "PUBLIC",
      lyric: "",
      price: 0,
      resourceId: "",
      userId: "",
      bandId: "",
      pulls: [],
      _count: { pulls: 0 },
    },
    user: {
      id: "1",
      name: "user",
      point: 0,
      image: "",
      stripeCustomerId: "",
      _count: {
        following: 0,
        followers: 0,
      },
    },
    comments: [],
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
