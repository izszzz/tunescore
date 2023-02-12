import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loop from "../../../../../../../components/music-mateial-ui/button/toggle/loop";

export default {
  title: "components/elements/music-material-ui/button/icon/toggle/loop",
  component: Loop,
} as ComponentMeta<typeof Loop>;

const Template: ComponentStory<typeof Loop> = (args) => <Loop {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: true,
};
