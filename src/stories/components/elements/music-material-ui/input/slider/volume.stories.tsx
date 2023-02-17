import type { ComponentMeta, ComponentStory } from "@storybook/react";

import VolumeSliderInput from "../../../../../../components/music-mateial-ui/input/slider/volume";

export default {
  title: "components/elements/music-material-ui/input/slider/volume",
  component: VolumeSliderInput,
} as ComponentMeta<typeof VolumeSliderInput>;

const Template: ComponentStory<typeof VolumeSliderInput> = (args) => (
  <VolumeSliderInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
