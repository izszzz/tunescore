import { ComponentMeta, ComponentStory } from "@storybook/react";
import PlayButton from "../../../../../../../components/music-mateial-ui/button/icon/toggle/play";

export default {
  title: "components/elements/music-material-ui/button/icon/play",
  component: PlayButton,
} as ComponentMeta<typeof PlayButton>;

const Template: ComponentStory<typeof PlayButton> = (args) => (
  <PlayButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: true,
};
