import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "outline"]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"]
    },
    children: {
      control: "text"
    },  
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button"
  }
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button"
  }
};

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button"
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true
  }
};
