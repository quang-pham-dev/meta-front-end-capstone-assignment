import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"]
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    onChange: { action: "changed" }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text..."
  }
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password..."
  }
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email..."
  }
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number..."
  }
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true
  }
};

export const WithCustomClass: Story = {
  args: {
    type: "text",
    placeholder: "Custom class input",
    className: "custom-input-class"
  }
};
