// import { Button } from '../components/Button/Button'
import { html } from 'lit-html';
import '../components/Button/GButton.js';

export default {
  title: 'Atoms/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' }
  }
}

const Template = ({ primary, label, backgroundColor, onClick, size }) =>
  html`<g-button ?primary=${primary} .label=${label} .backgroundColor=${backgroundColor} @click=${onClick} .size=${size}></g-button>`;


export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Botão primário'
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  label: 'Botão secundário'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Botão largo'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Botão pequeno'
}