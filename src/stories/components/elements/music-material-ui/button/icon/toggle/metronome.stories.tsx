import { ComponentMeta, ComponentStory } from "@storybook/react";
import Metronome from "../../../../../../../components/music-mateial-ui/button/toggle/metronome";

export default {
  title: "components/elements/music-material-ui/button/icon/toggle/metronome",
  component: Metronome,
} as ComponentMeta<typeof Metronome>;

const Template: ComponentStory<typeof Metronome> = (args) => (
  <Metronome {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: true,
};
