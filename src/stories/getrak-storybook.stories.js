import { html } from 'lit-html';
import '../components/GetrakStorybook/GetrakStorybook.js';

export default {
  title: 'GetrakStorybook',
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' }
      ]
    }
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    primary: true
  }
};

const Template = ({ primary, label }) =>
  html`<getrak-storybook ?primary=${primary} .label=${label}></getrak-storybook>`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Input'
}

export const Terciary = Template.bind({});
Terciary.args = {
  ...Secondary.args,
  label: 'Paragraph'
}
