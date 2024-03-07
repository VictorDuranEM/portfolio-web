import type { Meta, StoryObj } from '@storybook/react';

import Project from '../app/components/Project';

const meta = {
  title: 'Components/Project',
  component: Project,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: "bg-gray-200",
  },
};

export const Red: Story = {
  args: {
    bgColor: "bg-red-200",
  },
};
