import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    docs: {
      extractComponentDescription: (component, { notes }) => {
        if (notes) {
          return notes;
        }
        return null;
      },
    },
  },
};

export default preview; 