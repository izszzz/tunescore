import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Stop from "../../../../../../../components/music-mateial-ui/button/toggle/stop";

export default {
  title: "components/elements/music-material-ui/button/icon/toggle/stop",
  component: Stop,
} as ComponentMeta<typeof Stop>;

const Template: ComponentStory<typeof Stop> = (args) => <Stop {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: true,
};
