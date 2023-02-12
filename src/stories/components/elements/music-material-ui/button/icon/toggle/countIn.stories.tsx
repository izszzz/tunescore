import type { ComponentMeta, ComponentStory } from "@storybook/react";

import CountIn from "../../../../../../../components/music-mateial-ui/button/toggle/countIn";

export default {
  title: "components/elements/music-material-ui/button/icon/toggle/countIn",
  component: CountIn,
} as ComponentMeta<typeof CountIn>;

const Template: ComponentStory<typeof CountIn> = (args) => (
  <CountIn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: true,
};
