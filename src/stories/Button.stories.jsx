import React from 'react';

// import {
//   Title,
//   Subtitle,
//   Description,
//   ArgsTable,
//   Stories,
//   Primary,
//   PRIMARY_STORY,
//   Canvas
// } from '@storybook/addon-docs';

import { Button } from '../components/Button/Button';

// import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { 
      control: 'color',
      table: {
        category: 'Colors'
      },
    },
    primary: {
      table: {
        category: 'Colors'
      }
    },
    label: {
      table: {
        category: 'Text'
      }
    },
    onClick: {
      table: {
        category: 'Events'
      }
    },
    size: {
      table: {
        category: 'Sizes'
      }
    }
  },
  parameters: {
    docs: {
      // page: CustomMDXDocumentation
      // source: {
      //   type: 'code'
      // },
      description: {
        component: 'Some component _markdown_'
      },
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Canvas>
      //       <Primary />
      //     </Canvas>
      //     <ArgsTable story={PRIMARY_STORY} />
      //     <Stories />
      //   </>
      // )
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const someFunction = (someValue) => {
  return `i am a ${someValue}`;
}

// const Template = (args) => <Button {...args} />;
const Template = (args) => {
  const { label } = args;

  const functionResult = someFunction(label);
  return <Button {...args} label={functionResult} />
}

export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const CustomSource = () => Template.bind({});

CustomSource.parameters = {
  docs: {
    source: {
      code: 'Some custom string here'
    },
    description: {
      story: 'Some story **markdown**'
    }
  }
}
