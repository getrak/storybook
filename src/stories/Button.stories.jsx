import React from 'react';

import { Button } from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'JSX/Button',
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
      description: {
        component: 'O componente `button` é um elemento acionável por clique. Tem variações de tamanho que são passadas através do argumento `size`. Também é possível sinalizar se o botão deve ser primário ou secundário, passando ou não o argumento `primary`, onde o mesmo assume o valor default `false`. Para alterar o conteúdo do botão, basta passar o argumento `label`.'
      }
    }
  }
};

const someFunction = (someValue) => {
  return `I am a ${someValue}`;
}


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} />;

const Template = (args) => {
  const { label } = args;

  const functionResult = someFunction(label);
  return <Button {...args} label={functionResult} />
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Hierarquia = () => {
  return (
    <div>
      <Secondary {...Secondary.args} label="secondary action" />
      <Primary {...Primary.args} label="primary action" />
    </div>
  );
}
Hierarquia.parameters = {
  docs: {
    description: {
      story: 'Quando houver a presensa de mais de um botão na mesma interação, ex.: modal, deve-se estabelecer uma hierarquia de importância, onde o botão principal deve estar marcando como `primary`, onde este deve estar sempre alinhado à direita do elemento. O botão secundário deve vir logo após, posicionado à esquerda do botão primário.'
    }
  }
}

export const Tamanhos = () => {
  return (
    <div>
      <Secondary {...Secondary.args} size="small" label="Small" />
      <Secondary {...Secondary.args} size="medium" label="Medium" />
      <Secondary {...Secondary.args} size="large" label="Large" />
    </div>
  );
}
Tamanhos.parameters = {
  docs: {
    description: {
      story: 'É possível definir o tamanho do componente `button` passando o argumento `size`. Atualmente temos os tamanhos `small`, `medium` e `large`.'
    }
  }
}
