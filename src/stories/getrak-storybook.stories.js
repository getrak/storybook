import { html } from 'lit-html';
import '../components/GetrakStorybook/GetrakStorybook.js';

export default {
  title: 'GetrakStorybook',
};

export const App = () =>
  html`
    <getrak-storybook></getrak-storybook>
  `;