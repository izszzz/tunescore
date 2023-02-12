import { ComponentMeta, ComponentStory } from "@storybook/react";
import ScoreButton from "../../../../../components/elements/button/group/score";

export default {
  title: "components/elements/button/group/score",
  component: ScoreButton,
} as ComponentMeta<typeof ScoreButton>;

const Template: ComponentStory<typeof ScoreButton> = (args) => (
  <ScoreButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  watch: {
    route: { pathname: "/" },
  },
  edit: {
    route: { pathname: "/" },
  },
  loading: false,
};
